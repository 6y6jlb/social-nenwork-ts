import selfPhoto from "../images/face.png";
import {ProfileAPI} from "../api/profileAPI";
import {AppThunk, InferActionsType} from "./reduxStore";
import {stopSubmit} from "redux-form";
import {
    ADD_POST,
    CHANGE_IS_FETCHING_FROM_PROFILE,
    CHANGE_STATUS, GET_PROFILE_SAGA,
    GET_STATUS_FROM_PROFILE_SAGA, IS_OPEN_MENU_FROM_PROFILE, SAVE_NEW_PROFILE_SAGA,
    SAVE_PHOTO_FROM_PROFILE,
    SAVE_PHOTO_FROM_PROFILE_SAGA,
    SET_USER_PROFILE,
    UPDATE_STATUS_FROM_PROFILE_SAGA
} from "./consts";

//types
export type UserFromProfileResponseType = {
    isOpenMenu:boolean
    aboutMe: string | null
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
export type ProfileActionsTypes = InferActionsType<typeof actionsProfile>
//ac
export const actionsProfile = {
    addPost: (value: string) => {
        return {type: ADD_POST, payload: {value}} as const
    },openSet: (isOpen: boolean) => {
        return {type: IS_OPEN_MENU_FROM_PROFILE, payload: {isOpen}} as const
    }, setUserProfile: (user: UserFromProfileResponseType) => {
        return {type: SET_USER_PROFILE, payload: {user}} as const
    }, changeIsFetchingFromProfile: (isFetching: boolean) => {
        return {type: CHANGE_IS_FETCHING_FROM_PROFILE, payload: {isFetching}} as const
    }, setStatusAC: (status: string) => {
        return {
            type: CHANGE_STATUS,
            payload: {status}
        } as const
    }, savePhotosSuccess: (photos: { small: string, large: string }) => {
        return {type: SAVE_PHOTO_FROM_PROFILE, payload: {photos}} as const
    }, getStatusProfileSaga: (userID: number) => {
        return {type: GET_STATUS_FROM_PROFILE_SAGA, payload: {userID}} as const
    }, updateStatusProfileSaga: (item: string) => {
        return {type: UPDATE_STATUS_FROM_PROFILE_SAGA, payload: {item}} as const
    }, savePhotoProfileSaga: (file: any) => {
        return {type: SAVE_PHOTO_FROM_PROFILE_SAGA, payload: {file}} as const
    }, saveNewProfileSaga: (model: UserFromProfileResponseType,userId: number) => {
        return {type: SAVE_NEW_PROFILE_SAGA, payload: {model,userId}} as const
    }, getProfileSaga: (userIdForURL: number) => {
        return {type: GET_PROFILE_SAGA, payload: {userIdForURL}} as const
    },
}
//tc
/*export const getStatusTC = (userID: number): AppThunk => async dispatch => {
    if (userID) {
        const response = await ProfileAPI.getStatus ( userID )
        try {
            dispatch ( actionsProfile.setStatusAC ( response.data ) )
        } catch (e) {
            throw new Error ( e )
        }
    }
};*/
/*export const updateStatusTC = (item: string): AppThunk => async dispatch => {
    const response = await ProfileAPI.sendStatus ( item )
    try {
        if (response.data.resultCode === 0) {
            dispatch ( actionsProfile.setStatusAC ( item ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
}*/
/*export const savePhotoTC = (file: any): AppThunk => async dispatch => {
    const response = await ProfileAPI.savePhoto ( file )
    try {
        if (response.data.resultCode === 0) {
            dispatch ( actionsProfile.savePhotosSuccess ( response.data.data.photos ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
}*/
/*
export const saveNewProfile = (model: UserFromProfileResponseType): AppThunk => async (dispatch, getState) => {
    const response = await ProfileAPI.setNewProfile ( model )
    try {
        if (response.data.resultCode === 0) {
            const userId = getState ().profileReducer.profile.userId
            if (userId)
                return dispatch ( getProfile ( userId ) )

        } else {
            dispatch ( stopSubmit ( 'headerForm', {_error: response.data.messages} ) )
            return Promise.reject ( response.data.messages )
        }
    } catch (e) {
        //throw new Error ( e )
    }
}
*/
/*
export const getProfile = (userIdForURL: number): AppThunk => async dispatch => {
    if (userIdForURL) {
        dispatch ( actionsProfile.changeIsFetchingFromProfile ( true ) )
        const response = await ProfileAPI.setUserProfile ( userIdForURL )
        try {
            dispatch ( actionsProfile.changeIsFetchingFromProfile ( false ) )
            dispatch ( actionsProfile.setUserProfile ( response.data ) )
        } catch (e) {
            throw new Error ( e )
        }
    }
}*/

//state
const initialState = {
    isOpenMenu:false,
    status: '',
    profile: {
        aboutMe: null,
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
        case ADD_POST:
            const newPost = {
                profileSelfPhotoImgUrl: selfPhoto,
                id: state.myPostArray.length += 1,
                message: action.payload.value
            }
            state.myPostArray.unshift ( newPost )
            return {...state}
        case SET_USER_PROFILE:
            return {...state, profile: action.payload.user}
        case CHANGE_IS_FETCHING_FROM_PROFILE:
            return {...state, isFetching: action.payload.isFetching}
        case CHANGE_STATUS: {
            return {...state, status: action.payload.status}
        }
        case SAVE_PHOTO_FROM_PROFILE: {
            return {...state, profile: {...state.profile, photos: action.payload.photos}}
        }
        case IS_OPEN_MENU_FROM_PROFILE: {
            return {...state,isOpenMenu:action.payload.isOpen}
        }
        default:
            return state
    }
}
export default profileReducer;


