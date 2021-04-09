import selfPhoto from "../images/face.png";
import {ActionsTypes} from "./reduxStore";

export enum PROFILE_CONST {
    ADD_POST = 'ADD-POST',
    CHANGE_POST_INPUT_TEXT = 'CHANGE-POST-INPUT-TEXT'
}



export type ProfileInfoTextFromProfileType = {
    id:number
    postMessage:string
}
export type MyPostArrayFromProfileType = {
    profileSelfPhotoImgUrl:string
    id:number
    message:string
}
export type InitialStateProfileType = typeof initialState

type ChangePostInputActionCreatorType = {
    type: typeof PROFILE_CONST.CHANGE_POST_INPUT_TEXT
    item: string
}
type AddPostActionCreationType = {
    type: typeof PROFILE_CONST.ADD_POST
}

export const addPostActionCreator = ():AddPostActionCreationType => {
    return {type: PROFILE_CONST.ADD_POST,} as const
}
export const changePostInputActionCreator = (item: string):ChangePostInputActionCreatorType => {
    return {type: PROFILE_CONST.CHANGE_POST_INPUT_TEXT, item} as const
}

const initialState = {
    currentInputPost: '',
    profileSelfPhotoImgUrl: selfPhoto,
    profileInfoText: [
        {id: 1, postMessage: 'Человек умелый'},
        {id: 2, postMessage: 'человек разумный'},
        {id: 3, postMessage: '46 хромосом. 32 зуба.'},
        {id: 4, postMessage: '183 сантиметра роста'},
        {id: 5, postMessage: 'Где-то под полтора килограмма мозга'},
        {id: 6, postMessage: 'Улыбка до ушей, в теле 36.6'},
        {id: 7, postMessage: 'Здоров от пяток до шеи, почти совершенен'},
    ] as Array<ProfileInfoTextFromProfileType>,
    myPostArray: [
        {
            profileSelfPhotoImgUrl: selfPhoto,
            id: 1,
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, ',
        }, {
            profileSelfPhotoImgUrl: selfPhoto,
            id: 2, message: ' ultricies nec, pellentesque eu, ',
        }, {
            profileSelfPhotoImgUrl: selfPhoto,
            id: 3,
            message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu ',
        }, {
            profileSelfPhotoImgUrl: selfPhoto,
            id: 4,
            message: 'Lorem ipssa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridics, ultricies nec, pellentesque eu, ',
        }, {
            profileSelfPhotoImgUrl: selfPhoto,
            id: 5, message: 'eu, ',
        },
    ] as Array<MyPostArrayFromProfileType>
}

const profileReducer = (state = initialState, action: ActionsTypes):InitialStateProfileType => {
    switch (action.type) {
        case PROFILE_CONST.ADD_POST:
            const newPost = {
                profileSelfPhotoImgUrl: selfPhoto,
                id: state.myPostArray.length++,
                message: state.currentInputPost
            }
            state.myPostArray.unshift(newPost)
            return {...state}
        case PROFILE_CONST.CHANGE_POST_INPUT_TEXT:
            state.currentInputPost = action.item
            return {...state}
        default:
            return state
    }
}
export default profileReducer;
