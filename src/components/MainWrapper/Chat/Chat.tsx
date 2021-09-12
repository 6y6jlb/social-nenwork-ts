import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import style from "./Chat.module.css";
import {FormattedMessage} from "../../common/FormattedMessage/FormattedMessage";
import {wsConnect} from "./Websocket";
import {useDispatch, useSelector} from "react-redux";
import {getMessages as getMessagesSelector} from "../../../utils/selectors/chat-selectors";
import {actionsChat, WebSocketMessageType} from "../../../Redux/chatReducer";
import {reset} from "redux-form";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';
import {WebSocketMessage} from "./WebsocketNewMessage/WebsocketMessage/WebSocketMessage";
import {WebsocketMessagesFormType, WebsocketNewMessagesForm} from "./WebsocketNewMessage";


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

    const onSubmit = (form: WebsocketMessagesFormType) => {
        const message = form.newMessageBody;
        if (message && message.trim ()) {
            ws?.send ( message.trim () );
            dispatch ( reset ( 'websocketPostMessageForm' ) );
        }
    };


    const mappedMessages = messages.map ( m => {
        return (
            <WebSocketMessage key={ uuidv4() } message={ m }/>
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
                <WebsocketNewMessagesForm disabled={ ws?.readyState === ws?.CLOSED } onSubmit={ onSubmit }/>
            </div>
        </div>
    );
};