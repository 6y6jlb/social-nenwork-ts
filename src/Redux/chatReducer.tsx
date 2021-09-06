import {InferActionsType} from "./reduxStore";
import React from "react";
import {WEBSOCKET} from "./consts";


//types

export type WebSocketMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}


export type InitialStateFromChatType = typeof initialState

export type ChatActionsTypes = InferActionsType<typeof actionsChat>
//ac
export const actionsChat = {
    getMessages: () => {
        return {type: WEBSOCKET.GET_MESSAGES as const};
    },
    setMessages: (messages: WebSocketMessageType[]) => {
        return {type: WEBSOCKET.SET_MESSAGES as const, payload: {messages}};
    },
    postMessage: (message: WebSocketMessageType) => {
        return {type: WEBSOCKET.POST_MESSAGE as const, payload: {message}};
    },
};


//state
const initialState = {
    messages: [] as WebSocketMessageType[],
};
//reducer
const chatReducer = (state = initialState, action: ChatActionsTypes): InitialStateFromChatType => {
    switch (action.type) {
        case WEBSOCKET.SET_MESSAGES:
            return {...state,  ...action.payload };
        default:
            return state;
    }
};
//export default
export default chatReducer;
