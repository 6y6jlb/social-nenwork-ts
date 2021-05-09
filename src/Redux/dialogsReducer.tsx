import selfPhoto from "../images/face.png";
import photo from "../images/face.png";
import {ActionsTypes} from "./reduxStore";


export enum DIALOGS_CONST {
    ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE',
}
//ac
export const addDialogsMessage = (self: boolean,item:string): AddDialogsMessageType => {
    return {type: DIALOGS_CONST.ADD_DIALOGS_MESSAGE, payload:{self,item}} as const
}
//state
const initialState = {
    messages: [
        {id: 1, item: 'myMessage', self: true, avatarURL: photo},
        {id: 2, item: 'notMyMessage', self: false, avatarURL: photo},
        {id: 3, item: 'myMessage', self: true, avatarURL: photo},
        {id: 4, item: 'myMessage', self: true, avatarURL: photo},
        {id: 5, item: 'notMyMessage', self: false, avatarURL: photo},
        {id: 6, item: 'notMyMessage', self: false, avatarURL: photo},
        {id: 7, item: 'myMessage', self: true, avatarURL: photo},
        {id: 8, item: 'myMessage', self: true, avatarURL: photo},
        {id: 9, item: 'notMyMessage', self: false, avatarURL: photo},
        {id: 10, item: 'myMessage', self: true, avatarURL: photo},
        {id: 11, item: 'notMyMessage', self: false, avatarURL: photo},
    ] as Array<MessagesFromDialogsType>
}
//reducer
const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateDialogsType => {
    switch (action.type) {
        case DIALOGS_CONST.ADD_DIALOGS_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                item: action.payload.item,
                self: action.payload.self,
                avatarURL: selfPhoto
            }
            return {...state,messages: [...state.messages,newMessage]};
        default:
            return state
    }
}
export default dialogsReducer;
//types
export type MessagesFromDialogsType = {
    id: number
    item: string
    self: boolean
    avatarURL: string
}
export type InitialStateDialogsType = typeof initialState
type AddDialogsMessageType = {
    type: typeof DIALOGS_CONST.ADD_DIALOGS_MESSAGE
    payload:{self:boolean,item:string}

}
