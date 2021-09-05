import React from "react";
import {AUTH} from "./consts";


//types
export type UserDataFromAuthAuthType = {
    id: number | null
    login: string | null
    email: string | null
}
export type InitialStateFromAuthType = {
    error:string | null
    isAuth: boolean
    data: UserDataFromAuthAuthType
    captchaURL: string | null
}
//export type AuthActionsTypes = InferActionsType<typeof actionsAuth>
export type AuthActionsTypes = any
//ac
export const actionsAuth = {
    setError: (message:string|null) => {
        return {type: AUTH.SET_AUTH_NETWORK_ERROR,payload:{message}} as const
    },
    getCaptchaSaga: () => {
        return {type: AUTH.GET_CAPTCHA_SAGA} as const
    },
    logoutSaga: () => {
        return {type: AUTH.LOGOUT_SAGA}
    },
    loginSaga: (email: string, password: string, rememberMe: boolean, captcha?: string) => {
        return {type: AUTH.LOGIN_SAGA, payload: {email, password, rememberMe, captcha}} as const
    },
    setUserFromAuthSaga: (isAuth: boolean) => {
        return {type: AUTH.SET_USER_FROM_AUTH_SAGA, payload: {isAuth}} as const
    },
    setUserData: (isAuth: boolean, data: UserDataFromAuthAuthType) => {
        return {type: AUTH.SET_USER_DATA, payload: {isAuth, data} as const} as const
    },
    getCaptchaUrlSuccess: (captchaURL: string) => {
        return {type: AUTH.GET_CAPTCHA_URL_SUCCESS, payload: {captchaURL} as const} as const
    }
}

//tc
/*export const getCaptchaURL = (): AppThunk => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl ()
    try {
        dispatch ( actionsAuth.getCaptchaUrlSuccess ( response.data.url ) )
    } catch (e) {
        throw new Error ( e )
    }
}
export const setUserTC = (isAuth: boolean): AppThunk => async (dispatch, getState: () => AppStateType) => {
    const response = await AuthAPI.me ()
    try {
        if (response.data.resultCode === 0) {
            dispatch ( actionsAuth.setUserData ( isAuth, {...response.data.data} ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
    const userId = getState ().auth.data.id
    if (userId) {
        const response = await ProfileAPI.setUserProfile ( userId )
        try {
            dispatch ( actionsProfile.setUserProfile ( response.data ) )
        } catch (e) {
            throw new Error ( e )
        }
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkAction<void, AppStateType, unknown, ActionsTypes | FormAction> => async dispatch => {
    const response = await AuthAPI.login ( email, password, rememberMe, captcha )
    try {
        if (response.data.resultCode === 0) {
            dispatch ( setUserTC ( true ) )
        } else {
            if (response.data.resultCode === 10) {
                dispatch ( getCaptchaURL () )
            }
            dispatch ( stopSubmit ( 'login', {_error: 'shit shit shit'} ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
}*/
/*
export const logoutTC = (): AppThunk => async dispatch => {
    const response = await AuthAPI.logout()
    try {
        if (response.data.resultCode === 0) {
            dispatch(actionsAuth.setUserData(false, {email: null, login: null, id: null}))
        }
    } catch (e) {
        throw new Error(e)
    }
}
*/
//state
const initialState: InitialStateFromAuthType = {
    error:null,
    isAuth: false,
    captchaURL: null,
    data: {
        id: null,
        email: null,
        login: null
    }
}
//reducer
const authReducer = (state = initialState, action: AuthActionsTypes): InitialStateFromAuthType => {
    switch (action.type) {
        case AUTH.SET_USER_DATA:
        case AUTH.GET_CAPTCHA_URL_SUCCESS:
        case AUTH.SET_AUTH_NETWORK_ERROR:
            return {
                ...state, ...action.payload
            }

        default:
            return state
    }
}
//export default
export default authReducer;
