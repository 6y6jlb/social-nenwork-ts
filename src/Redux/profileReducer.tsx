import selfPhoto from "../images/face.png";
import {ActionsTypes} from "./reduxStore";

export const ADD_POST = 'ADD-POST'
type AddPostActionCreationType = {
    type: typeof ADD_POST
}
export const addPostActionCreator = ():AddPostActionCreationType => {
    return {type: ADD_POST,} as const
}

export const CHANGE_POST_INPUT_TEXT = 'CHANGE-POST-INPUT-TEXT'
type ChangePostInputActionCreatorType = {
    type: typeof CHANGE_POST_INPUT_TEXT
    item: string
}
export const changePostInputActionCreator = (item: string):ChangePostInputActionCreatorType => {
    return {type: CHANGE_POST_INPUT_TEXT, item} as const
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
