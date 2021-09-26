import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import style from "./Chat.module.css";
import {FormattedMessage} from "../../common/FormattedMessage/FormattedMessage";
import {useDispatch, useSelector} from "react-redux";
import {getMessages as getMessagesSelector} from "../../../utils/selectors/chat-selectors";
import {actionsChat} from "../../../Redux/chatReducer";
import classNames from "classnames";
import {v4 as uuidv4} from 'uuid';
import {WebSocketMessage} from "./WebsocketNewMessage/WebsocketMessage/WebSocketMessage";
import {WebsocketMessagesFormType, WebsocketNewMessagesForm} from "./WebsocketNewMessage";


export const Chat: React.FC<{}> = () => {
    const [isActive, setIsActive] = useState ( false );
    const messages = useSelector ( getMessagesSelector );
    const dispatch = useDispatch ();
    const chatRef = useRef<HTMLDivElement> ( null );


    const openChat = () => {
        setIsActive ( true );
        if (messages.length) {
            setTimeout ( () => chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight ), 1000 );
        }
    };


    useEffect ( () => {
        dispatch ( actionsChat.startMessageListening ( dispatch ) );
        return () => {
            dispatch ( actionsChat.stopMessageListening ( dispatch ) );
        };
    }, [] );

    useEffect ( () => chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight ), [messages] );


    const closeChat = () => {
        setIsActive ( false );

    };

    const onSubmit = (form: WebsocketMessagesFormType) => {
        const message = form.newMessageBody;
        if (message && message.trim ()) {
            dispatch ( actionsChat.sendMessage ( message.trim () ) );

        }
    };


    const mappedMessages = messages.map ( m => {
        return (
            <WebSocketMessage key={ uuidv4 () } message={ m }/>
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
                <WebsocketNewMessagesForm disabled={ false } onSubmit={ onSubmit }/>
            </div>
        </div>
    );
};