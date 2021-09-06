import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import style from "./Chat.module.css";
import {FormattedMessage} from "../../common/FormattedMessage/FormattedMessage";
import {getWebSocket} from "./Websocket";
import {useDispatch, useSelector} from "react-redux";
import {getMessages as getMessagesSelector} from "../../../utils/selectors/chat-selectors";
import {actionsChat, WebSocketMessageType} from "../../../Redux/chatReducer";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../common/formsContols/FormControls";
import {requiredField} from "../../../utils/validators";
import Button from "../../common/Button/Button";


type PropsType = {}
export type WebsocketMessageFormType = {
    newMessageBody: string
    validate: any[]
}


const WebsocketMessageForm: React.FC<InjectedFormProps<WebsocketMessageFormType>> & PropsType = React.memo ( (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            { createField ( 'enter new message here', 'newMessageBody', [requiredField], Textarea, {type: 'text'} ) }
            <Button text={ 'send message' }/>
        </form>
    );
} );
const WebsocketNewMessage = reduxForm<WebsocketMessageFormType> ( {form: 'websocket post message form'} ) ( WebsocketMessageForm );


export const Chat: React.FC<{}> = () => {
    const [isActive, setIsActive] = useState ( false );
    const [ws, setWS] = useState<WebSocket | null> ( null );
    const messages = useSelector ( getMessagesSelector );
    const dispatch = useDispatch ();
    const chatRef = useRef<HTMLDivElement> ( null );
    const setMessagesCallback = (messages: WebSocketMessageType[]) => {
        dispatch ( actionsChat.setMessages ( messages ) );
    };




    const openChat = () => {
        setIsActive(true);
    };


    useEffect(() => {
         setWS(getWebSocket())
        ws?.addEventListener ( 'message', (messageEvent) => {
            setMessagesCallback ( [...messages, ...JSON.parse ( messageEvent.data )] );
        }
        )
        return () => {
            ws?.close();
        }
    },[])

    if (ws) {
        ws.onmessage = (messageEvent) => {
            setMessagesCallback ( [...messages, ...JSON.parse ( messageEvent.data )] );
            chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight );
        };
    }
    const closeChat = () => {
        setIsActive(false)

    }

    const onSubmit = (form: WebsocketMessageFormType) => {
        ws?.send ( form.newMessageBody.trim () );
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
        <div  className={ `${style.chatWrapper} ${isActive && style.active}` }>
            <div onClick={isActive ? closeChat : openChat} className={ `${style.title} ${isActive && style.activeTitle}` }>
                <FormattedMessage _id={ isActive ? "chat.title" : "chat.handler" }/>
            </div>
            <div className={ `${style.chat} ${isActive && style.activeChat}` }>
                <div ref={ chatRef } className={ style.messages }>{ mappedMessages }</div>
                <WebsocketNewMessage onSubmit={ onSubmit }/>
            </div>
        </div>
    );
};