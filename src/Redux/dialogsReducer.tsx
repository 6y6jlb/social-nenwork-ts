import selfPhoto from "../images/face.png";
import photo from "../images/face.png";
import {ActionsTypes} from "./reduxStore";


export const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'
type AddDialogsMessageType = {
    type: typeof ADD_DIALOGS_MESSAGE
    self: boolean
}
export const addDialogsMessageActionCreator = (self: boolean): AddDialogsMessageType => {
    return {type: ADD_DIALOGS_MESSAGE, self} as const
}

export const CHANGE_DIALOGS_INPUT_TEXT = 'CHANGE-DIALOGS-INPUT-TEXT'
type ChangeDialogsInputTextType = {
    type: typeof CHANGE_DIALOGS_INPUT_TEXT
    item: string
}
export const changeDialogsInputActionCreator = (item: string): ChangeDialogsInputTextType => {
    return {type: CHANGE_DIALOGS_INPUT_TEXT, item} as const
}


export type MessagesFromDialogsType = {
    id: number
    item: string
    self: boolean
    avatarURL: string
}
export type InitialStateDialogsType = typeof initialState

const initialState = {
    currentInputMessageString: '',
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

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateDialogsType => {
    switch (action.type) {
        case ADD_DIALOGS_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                item: state.currentInputMessageString,
                self: action.self,
                avatarURL: selfPhoto
            }
            state.messages.push(newMessage)
            return {...state};
        case CHANGE_DIALOGS_INPUT_TEXT:
            state.currentInputMessageString = action.item;
            return {...state}
        default:
            return state
    }
}

export default dialogsReducer;
