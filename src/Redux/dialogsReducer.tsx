import {InferActionsType} from "./reduxStore";
import {
    ADD_DIALOGS_MESSAGE,
    GET_DIALOGS_SAGA,
    GET_MESSAGES_SAGA,
    POST_MESSAGE_SAGA,
    SET_DIALOGS,
    SET_MESSAGES,
    START_DIALOG_SAGA,
} from "./consts";
import {IDialogs, IMessage} from "../api/dialogsAPI";

//ac
export const actionsDialogs = {
    addDialogsMessage: (self: boolean, item: string) => {
        return {type: ADD_DIALOGS_MESSAGE, payload: {self, item}} as const;
    },
    toDialogSaga: (id: number) => {
        return {type: START_DIALOG_SAGA, payload: {id}} as const;
    },
    getDialogs: () => {
        return {type: GET_DIALOGS_SAGA, payload: {}} as const;
    },
    getMessages: (id: number) => {
        return {type: GET_MESSAGES_SAGA, payload: {id}} as const;
    },
    postMessage: (id: number, message: string) => {
        return {type: POST_MESSAGE_SAGA, payload: {id, message}} as const;
    },
    setMessages: (messages:Array<IMessage>) => {
        return {type: SET_MESSAGES, payload: {messages}} as const;
    },
    setDialogs: (dialogs:Array<IDialogs>) => {
        return {type: SET_DIALOGS, payload: {dialogs}} as const;
    },

};
//state
const initialState = {
    dialogs: [] as Array<IDialogs>,
    messages:[] as  Array<IMessage>,
};
//reducer
const dialogsReducer = (state = initialState, action: DialogsActionsTypes): InitialStateDialogsType => {
    switch (action.type) {
        case SET_DIALOGS:{
            debugger
            return {...state,...action.payload}
        }
        case SET_MESSAGES:
            return {...state,...action.payload}

        default:
            return state;
    }
};
export default dialogsReducer;
//types
export type MessagesFromDialogsType = {
    id: number
    item: string
    self: boolean
    avatarURL: string
}
export type InitialStateDialogsType = typeof initialState
export type DialogsActionsTypes = InferActionsType<typeof actionsDialogs>
