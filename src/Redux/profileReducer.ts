import selfPhoto from "../images/face.png";
import {ProfileAPI} from "../api/api";
import {Dispatch} from "redux";

//types
export type UserFromProfileResponseType = {
    userId: number | null
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

export type MyPostArrayFromProfileType = {
    profileSelfPhotoImgUrl: string
    id: number
    message: string
}
export type InitialStateProfileType = typeof initialState
type AddPostActionCreationType = {
    type: PROFILE_CONST.ADD_POST
    payload:{value:string}}
type setUserProfileActionCreationType = {
    type: PROFILE_CONST.SET_USER_PROFILE
    payload: {user:UserFromProfileResponseType}}
type ChangeStatusACType = {
    type: PROFILE_CONST.CHANGE_STATUS,
    payload: {status:string} }
type ChangeIsFetchingFromProfileActionCreationType = {
    type: PROFILE_CONST.CHANGE_IS_FETCHING_FROM_PROFILE
    payload: {isFetching:boolean}}

export type ProfileActionsTypes =
    | AddPostActionCreationType
    | setUserProfileActionCreationType
    | ChangeStatusACType
    | ChangeIsFetchingFromProfileActionCreationType



export enum PROFILE_CONST {
    ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    CHANGE_IS_FETCHING_FROM_PROFILE = 'CHANGE_IS_FETCHING_FROM_PROFILE',
    CHANGE_STATUS = 'CHANGE_STATUS'
}

//ac
export const addPost = (value: string):AddPostActionCreationType => {
    return {type: PROFILE_CONST.ADD_POST as const, payload: {value}} as const
};
export const setUserProfile = (user: UserFromProfileResponseType):setUserProfileActionCreationType => {
    return {type: PROFILE_CONST.SET_USER_PROFILE as const, payload: {user}} as const
};
export const changeIsFetchingFromProfile = (isFetching: boolean):ChangeIsFetchingFromProfileActionCreationType => {
    return {type: PROFILE_CONST.CHANGE_IS_FETCHING_FROM_PROFILE as const, payload: {isFetching}} as const
};
export const setStatusAC = (status: string):ChangeStatusACType => {
    return {
        type: PROFILE_CONST.CHANGE_STATUS,
        payload: {status} as const
    }
};
//tc
export const getStatusTC = (userID: number) => (dispatch: Dispatch) => {
    if (userID) {
        ProfileAPI.getStatus ( userID )
            .then ( (response) => {
                dispatch ( setStatusAC ( response.data ) )
            } ).catch ( err => {
            console.warn ( err )
        } )
    }

};
export const updateStatusTC = (item: string) => (dispatch: Dispatch) => {
    ProfileAPI.sendStatus ( item )
        .then ( (response) => {
            if (response.data.resultCode === 0) {
                dispatch ( setStatusAC ( item ) )
            }
        } ).catch ( err => {
        console.warn ( err )
    } )
}
export const getProfileTC = (userIdForURL: number) => (dispatch: Dispatch) => {
    if (userIdForURL) {
        dispatch ( changeIsFetchingFromProfile ( true ) )
        ProfileAPI.setUserProfile ( userIdForURL )
            .then ( response => {
                    dispatch ( changeIsFetchingFromProfile ( false ) )
                    dispatch ( setUserProfile ( response.data ) )
                }
            ).catch ( err => {
            console.warn ( err )
        } )
    }
}

//state
const initialState = {
    status: '',
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
        photos: {small: null, large: null}
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
    isFetching: false as boolean
}
//reducer
const profileReducer = (state = initialState, action: ProfileActionsTypes): InitialStateProfileType => {
    switch (action.type) {
        case PROFILE_CONST.ADD_POST:
            const newPost = {
                profileSelfPhotoImgUrl: selfPhoto,
                id: state.myPostArray.length++,
                message: action.payload.value
            }
            state.myPostArray.unshift ( newPost )
            return {...state}
        case PROFILE_CONST.SET_USER_PROFILE:
            return {...state, profile: action.payload.user}
        case PROFILE_CONST.CHANGE_IS_FETCHING_FROM_PROFILE:
            return {...state, isFetching: action.payload.isFetching}
        case PROFILE_CONST.CHANGE_STATUS: {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }
}
export default profileReducer;


