import {ActionsTypes, AppStateType, AppThunk} from "./reduxStore";
import {Dispatch} from "redux";
import {AuthAPI, ProfileAPI} from "../api/api";
import React from "react";
import {setUserProfile} from "./profileReducer";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";

//enum
export enum AUTH_CONST {
    SET_USER_DATA = 'ADD_SET_USER_DATA',
}

//types
export type UserDataFromAuthAuthType = {
    id: number | null
    login: string | null
    email: string | null
}
export type InitialStateFromAuthType = {
    isAuth: boolean
    data: UserDataFromAuthAuthType
}
export type SetUserDataType = ReturnType<typeof setUserData>
export type AuthActionsTypes = | SetUserDataType
//ac & tc
export const setUserData = (isAuth: boolean, data: UserDataFromAuthAuthType) => {
    return {type: AUTH_CONST.SET_USER_DATA, isAuth, data}
}
export const setUserTC = (isAuth: boolean): AppThunk => (dispatch, getState: () => AppStateType) => {
    AuthAPI.setUserFromHeader ()
        .then ( response => {
                if (response.data.resultCode === 0) {
                    dispatch ( setUserData ( isAuth, {...response.data.data} ) )
                }
            }
        ).catch ( err => {
            console.warn ( err )
        }
    ).then ( response => {
        const userId = getState ().auth.data.id
        if (userId) {
            ProfileAPI.setUserProfile ( userId )
                .then ( response => {
                        dispatch ( setUserProfile ( response.data ) )
                    }
                ).catch ( err => {
                console.error ( err )
            } )
        }
    } )
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionsTypes | FormAction> => (dispatch) => {

    AuthAPI.login ( email, password, rememberMe )
        .then ( (response) => {
            if (response.data.resultCode === 0) {
                dispatch ( setUserTC ( true ) )
            } else {
                dispatch ( stopSubmit ( 'login', {_error: 'shit shit shit'} ) )
            }
        } )
}
export const logoutTC = () => (dispatch: Dispatch): void => {
    AuthAPI.logout ()
        .then ( (response) => {
            if (response.data.resultCode === 0) {
                dispatch ( setUserData ( false, {email: null, login: null, id: null} ) )
            }
        } )
}
//state
const initialState: InitialStateFromAuthType = {
    isAuth: false,
    data: {
        id: null,
        email: null,
        login: null
    }


}

//reducer
const authReducer = (state = initialState, action: ActionsTypes): InitialStateFromAuthType => {
    switch (action.type) {
        case AUTH_CONST.SET_USER_DATA:

            return {
                ...state, data: {...action.data},
                isAuth: action.isAuth
            }
        default:
            return state
    }
}
//export default
export default authReducer;
