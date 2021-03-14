import selfPhoto from "../images/face.png";
import {ActionsTypes, ProfileWrapperObjType} from "./State";

export const ADD_POST = 'ADD-POST'
export const CHANGE_POST_INPUT_TEXT = 'CHANGE-POST-INPUT-TEXT'

export const addPostActionCreator = () => {
    return {type: ADD_POST,} as const
}
export const changePostInputActionCreator = (item: string) => {
    return {type: CHANGE_POST_INPUT_TEXT, item} as const
}


const profileReducer = (state: ProfileWrapperObjType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                profileSelfPhotoImgUrl: selfPhoto,
                id: state.myPostArray.length++,
                message: state.currentInputPost
            }
            state.myPostArray.unshift(newPost)
            return {...state}
        case CHANGE_POST_INPUT_TEXT:
            state.currentInputPost = action.item
            return {...state}
        default:
            return state
    }
}
export default profileReducer;
