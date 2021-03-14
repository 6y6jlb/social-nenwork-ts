import selfPhoto from "../images/face.png";
import {ActionsTypes, DialogWrapperObjType} from "./State";

export const changeDialogsInputActionCreator = (item: string) => {
    return {type: CHANGE_DIALOGS_INPUT_TEXT, item} as const
}
export const addDialogsMessageActionCreator = (self: boolean) => {
    return {type: ADD_DIALOGS_MESSAGE, self} as const
}

export const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'
export const CHANGE_DIALOGS_INPUT_TEXT = 'CHANGE-DIALOGS-INPUT-TEXT'

const dialogsReducer = (state: DialogWrapperObjType, action: ActionsTypes) => {
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
