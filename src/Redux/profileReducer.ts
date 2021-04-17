import selfPhoto from "../images/face.png";
import {ActionsTypes} from "./reduxStore";

export enum PROFILE_CONST {
    ADD_POST = 'ADD-POST',
    CHANGE_POST_INPUT_TEXT = 'CHANGE-POST-INPUT-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    CHANGE_IS_FETCHING_FROM_PROFILE='CHANGE_IS_FETCHING_FROM_PROFILE'
}



export type MyPostArrayFromProfileType = {
    profileSelfPhotoImgUrl: string
    id: number
    message: string
}
export type InitialStateProfileType = typeof initialState

type ChangePostInputActionCreatorType = {
    type: typeof PROFILE_CONST.CHANGE_POST_INPUT_TEXT
    payload: { item: string }
}
type AddPostActionCreationType = {
    type: typeof PROFILE_CONST.ADD_POST
}
export type UserFromProfileResponseType = {
    userId: number| null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: { small: string | null, large: string | null }
}
type setUserProfileActionCreationType = {
    type: typeof PROFILE_CONST.SET_USER_PROFILE,
    payload: { user: UserFromProfileResponseType }
}
type ChangeIsFetchingFromProfileActionCreationType = {
    type: typeof PROFILE_CONST.CHANGE_IS_FETCHING_FROM_PROFILE,
    payload: { isFetching: boolean}
}

export const addPostActionCreator = (): AddPostActionCreationType => {
    return {type: PROFILE_CONST.ADD_POST,} as const
}
export const changePostInputActionCreator = (item: string): ChangePostInputActionCreatorType => {
    return {type: PROFILE_CONST.CHANGE_POST_INPUT_TEXT, payload: {item}} as const
}
export const setUserProfileActionCreator = (user: UserFromProfileResponseType): setUserProfileActionCreationType => {
    return {type: PROFILE_CONST.SET_USER_PROFILE, payload: {user}} as const
}
export const changeIsFetchingFromProfileActionCreator = ( isFetching: boolean): ChangeIsFetchingFromProfileActionCreationType => {
    return {type: PROFILE_CONST.CHANGE_IS_FETCHING_FROM_PROFILE, payload: {isFetching} } as const
}


const initialState = {
    currentInputPost: '',
    profile: {
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: { small:  null, large: null }
    } as UserFromProfileResponseType,
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
    ] as Array<MyPostArrayFromProfileType>,
    isFetching:false as boolean
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case PROFILE_CONST.ADD_POST:
            const newPost = {
                profileSelfPhotoImgUrl: selfPhoto,
                id: state.myPostArray.length++,
                message: state.currentInputPost
            }
            state.myPostArray.unshift ( newPost )
            return {...state}
        case PROFILE_CONST.CHANGE_POST_INPUT_TEXT:
            return {...state, currentInputPost: action.payload.item}
        case PROFILE_CONST.SET_USER_PROFILE:
            return {...state, profile: action.payload.user}
        case PROFILE_CONST.CHANGE_IS_FETCHING_FROM_PROFILE:
            return {...state,isFetching: action.payload.isFetching}
        default:
            return state
    }
}
export default profileReducer;
