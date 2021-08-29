import {InferActionsType} from "./reduxStore";
import {DIALOGS} from "./consts";
import {IDialogs, IMessage} from "../api/dialogsAPI";

//ac
export const actionsDialogs = {
    addDialogsMessage: (self: boolean, item: string) => {
        return {type: DIALOGS.ADD_DIALOGS_MESSAGE, payload: {self, item}} as const;
    },
    toDialogSaga: (id: number) => {
        return {type: DIALOGS.START_DIALOG_SAGA, payload: {id}} as const;
    },
    getDialogs: () => {
        return {type: DIALOGS.GET_DIALOGS_SAGA, payload: {}} as const;
    },
    getMessages: (id: number, page: number = 1) => {
        return {type: DIALOGS.GET_MESSAGES_SAGA, payload: {id, page}} as const;
    },
    postMessage: (id: number, message: string) => {
        return {type: DIALOGS.POST_MESSAGE_SAGA, payload: {id, message}} as const;
    },
    setMessages: (messages: Array<IMessage>, totalResults: number) => {
        return {type: DIALOGS.SET_MESSAGES, payload: {messages, totalResults}} as const;
    },
    setDialogs: (dialogs: Array<IDialogs>) => {
        return {type: DIALOGS.SET_DIALOGS, payload: {dialogs}} as const;
    },
    deleteMessage: (id: number, messageId: string) => {
        return {type: DIALOGS.DELETE_MESSAGE_SAGA, payload: {id, messageId}} as const;
    },
    toViewedMessage: (id: number, messageId: string) => {
        return {type: DIALOGS.IS_MESSAGE_VIEWED_SAGA, payload: {id, messageId}} as const;
    },
    toSpamMessage: (id: number, messageId: string) => {
        return {type: DIALOGS.TO_SPAM_MESSAGE_SAGA, payload: {id, messageId}} as const;
    },
    setIsFetching: (isFetching: boolean) => {
        return {type: DIALOGS.SET_IS_FETCHING, payload: {isFetching}} as const;
    },
    setPage: (page: number) => {
        return {type: DIALOGS.SET_PAGE, payload: {page}} as const;
    },
    setPageSize: (pageSize: number) => {
        return {type: DIALOGS.SET_PAGE_SIZE, payload: {pageSize}} as const;
    },
    setPortionNumber: (portionNumber: number) => {
        return {type: DIALOGS.SET_PORTION_NUMBER, payload: {portionNumber}} as const;
    },


};
//state
const initialState = {
    dialogs: [] as Array<IDialogs>,
    messages: [] as Array<IMessage>,
    totalResults: 0,
    isFetching: false,
    page: 1,
    pageSize: 7,
    portionNumber: 1,

};
//reducer
const dialogsReducer = (state = initialState, action: DialogsActionsTypes): InitialStateDialogsType => {
    switch (action.type) {
        case DIALOGS.SET_DIALOGS:
        case DIALOGS.SET_MESSAGES:
        case DIALOGS.SET_IS_FETCHING:
        case DIALOGS.SET_PAGE:
        case DIALOGS.SET_PAGE_SIZE:
        case DIALOGS.SET_PORTION_NUMBER:
            return {...state, ...action.payload};

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
