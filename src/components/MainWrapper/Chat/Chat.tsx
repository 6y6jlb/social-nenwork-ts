import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import style from "./Chat.module.css";
import {FormattedMessage} from "../../common/FormattedMessage/FormattedMessage";
import {wsConnect} from "./Websocket";
import {useDispatch, useSelector} from "react-redux";
import {getMessages as getMessagesSelector} from "../../../utils/selectors/chat-selectors";
import {actionsChat, WebSocketMessageType} from "../../../Redux/chatReducer";
import {InjectedFormProps, reduxForm, reset} from "redux-form";
import {createField, Textarea} from "../../common/formsContols/FormControls";
import {requiredField} from "../../../utils/validators";
import Button from "../../common/Button/Button";
import classNames from "classnames";


type PropsType = {
    disabled: boolean
}
export type WebsocketMessageFormType = {
    newMessageBody: string
    validate: any[]
}


const WebsocketMessageForm: React.NamedExoticComponent<InjectedFormProps<WebsocketMessageFormType, PropsType> & PropsType> = React.memo ( (props) => {
    const {handleSubmit, disabled} = props;
    return (
        <form className={style.form} onSubmit={ handleSubmit }>
            { createField ( 'enter new message here', 'newMessageBody', [requiredField], Textarea, {type: 'text'} ) }
            <Button disabled={ disabled } text={ 'send message' }/>
        </form>
    );
} );
const WebsocketNewMessage = reduxForm<WebsocketMessageFormType, PropsType> ( {form: 'websocketPostMessageForm'} ) ( WebsocketMessageForm );


export const Chat: React.FC<{}> = () => {
    const [isActive, setIsActive] = useState ( false );
    const [ws, setWS] = useState<WebSocket | null> ( null );
    const messages = useSelector ( getMessagesSelector );
    const dispatch = useDispatch ();
    const chatRef = useRef<HTMLDivElement> ( null );
    const setMessagesCallback = (newMessages: WebSocketMessageType[]) => {
        dispatch ( actionsChat.setMessages ( newMessages ) );
    };


    const openChat = () => {
        setIsActive ( true );
        if (ws) {
            setTimeout ( () => chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight ), 1000 );
        }
    };


    useEffect ( () => {
        setWS ( wsConnect () );
        const onListener = (messageEvent: any) => {
            setMessagesCallback ( [...messages, ...JSON.parse ( messageEvent.data )] );
        };
        ws?.addEventListener ( 'message', onListener );
        return () => {
            ws?.removeEventListener ( 'message', onListener );
            ws?.close ();
        };
    }, [] );

    if (ws) {
        ws.onmessage = (messageEvent) => {
            setMessagesCallback ( [...messages, ...JSON.parse ( messageEvent.data )] );
            chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight );
        };
    }
    const closeChat = () => {
        setIsActive ( false );

    };

    const onSubmit = (form: WebsocketMessageFormType) => {
        const message = form.newMessageBody;
        if (message && message.trim ()) {
            ws?.send ( message.trim () );
            dispatch ( reset ( 'websocketPostMessageForm' ) );
        }
    };


    const mappedMessages = messages.map ( m => {
        return (
            <div className={ style.messageFrame } key={ Math.ceil ( Math.random () * m.userId ) }>
                <div className={ style.description }>
                    <img src={ m.photo } alt={ m.userId.toString () }/>
                    <span>{ m.userName }</span>
                </div>
                <span className={ style.body }>{ m.message }</span>
            </div>
        );
    } );

    return (
        <div className={ `${ style.chatWrapper } ${ isActive && style.active }` }>
            <div onClick={ isActive ? closeChat : openChat }
                 className={ classNames ( style.title, isActive && style.activeTitle ) }>
                <FormattedMessage _id={ isActive ? "chat.title" : "chat.handler" }/>
            </div>
            <div className={ `${ style.chat } ${ isActive && style.activeChat }` }>
                <div ref={ chatRef } className={ style.messages }>{ mappedMessages }</div>
                <WebsocketNewMessage disabled={ ws?.readyState === ws?.CLOSED } onSubmit={ onSubmit }/>
            </div>
        </div>
    );
};