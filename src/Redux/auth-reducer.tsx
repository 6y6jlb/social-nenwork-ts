import {ActionsTypes, AppStateType, AppThunk} from "./reduxStore";
import {Dispatch,ActionCreator} from "redux";
import {AuthAPI, ProfileAPI} from "../api/api";
import React from "react";
import {setUserProfile} from "./profileReducer";


export enum AUTH_CONST {
    SET_USER_DATA = 'ADD_SET_USER_DATA',
}


export type UserDataFromAuthAuthType = {
    id: number | null
    login: string | null
    email: string | null
}
export type InitialStateFromAuthType = {
    isAuth: boolean
    data: UserDataFromAuthAuthType
}


export type SetUserDataType = {
    type: AUTH_CONST.SET_USER_DATA
    isAuth:boolean
    data: UserDataFromAuthAuthType
}

export const setUserData = (isAuth: boolean,data: UserDataFromAuthAuthType): SetUserDataType => {
    return {type: AUTH_CONST.SET_USER_DATA,isAuth, data}
}

export const setUserTC = (isAuth:boolean): AppThunk => (dispatch,getState:()=>AppStateType) => {
    AuthAPI.setUserFromHeader ()
        .then ( response => {
                if (response.data.resultCode === 0) {
                    dispatch ( setUserData ( isAuth,{...response.data.data} ) )
                }
            }
        ).catch ( err => {
            console.warn ( err )
        }
    ).then(response=>{
        const userId = getState().auth.data.id
        if (userId){
            ProfileAPI.setUserProfile (userId)
                .then ( response => {
                        dispatch(setUserProfile ( response.data ))
                    }
                ).catch ( err => {
                console.error ( err )
            } )
        }
    })
}
export const loginTC = (email:string, password:string, rememberMe:boolean): AppThunk=>(dispatch) =>{
    AuthAPI.login(email, password,rememberMe)
        .then((response)=>{
            if (response.data.resultCode === 0) {
                dispatch(setUserTC(true))}
        })
}
export const logoutTC = ()=>(dispatch: Dispatch):void =>{
    AuthAPI.logout()
        .then((response)=>{
            if (response.data.resultCode === 0) {
            dispatch(setUserData(false,{email:null, login:null, id:null}))}
        })
}

const initialState: InitialStateFromAuthType = {
    isAuth: false,
    data: {
        id: null,
        email: null,
        login: null
    }


}


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

export default authReducer;
