import {ActionsTypes, AppStateType, AppThunk, InferActionsType} from "./reduxStore";
import React from "react";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {ProfileAPI} from "../api/profileAPI";
import {AuthAPI} from "../api/authAPI";
import {actionsProfile} from "./profileReducer";


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
export type AuthActionsTypes = InferActionsType<typeof actionsAuth>
//ac
export const actionsAuth = {
    setUserData :(isAuth: boolean, data: UserDataFromAuthAuthType) => {
        return {type: 'SET_USER_DATA', isAuth, data} as const
    }
}
//tc
export const setUserTC = (isAuth: boolean): AppThunk => async (dispatch, getState: () => AppStateType) => {
    const response = await AuthAPI.setUserFromHeader ()
        try {
                if (response.data.resultCode === 0) {
                    dispatch ( actionsAuth.setUserData ( isAuth, {...response.data.data} ) )
                }
            } catch(e){
        throw new Error(e)
        }
        const userId = getState ().auth.data.id
        if (userId) {
            const response = await ProfileAPI.setUserProfile ( userId )
                try {
                        dispatch ( actionsProfile.setUserProfile ( response.data ) )
                    }catch (e) {
                    throw new Error(e)
                }
        }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionsTypes | FormAction> => async dispatch => {
const response = await AuthAPI.login ( email, password, rememberMe )
        try {
            if (response.data.resultCode === 0) {
                dispatch ( setUserTC ( true ) )
            } else {
                dispatch ( stopSubmit ( 'login', {_error: 'shit shit shit'} ) )
            }
        } catch (e) {
            throw new Error(e)
        }
}
export const logoutTC = ():AppThunk => async dispatch=> {
    const response = await AuthAPI.logout ()
       try {
            if (response.data.resultCode === 0) {
                dispatch ( actionsAuth.setUserData ( false, {email: null, login: null, id: null} ) )
            }
        } catch (e) {
           throw new Error(e)
       }
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
const authReducer = (state = initialState, action: AuthActionsTypes): InitialStateFromAuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':

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
