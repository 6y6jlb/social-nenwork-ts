import {ActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";


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
    type: AUTH_CONST.SET_USER_DATA,
    data: UserDataFromAuthAuthType
}

export const setUserData = (data: UserDataFromAuthAuthType): SetUserDataType => {
    return {type: AUTH_CONST.SET_USER_DATA, data}
}

export const setUserTC = () => (dispatch: Dispatch) => {
    AuthAPI.setUserFromHeader ()
        .then ( response => {
                if (response.data.resultCode === 0) {
                    dispatch ( setUserData ( {...response.data.data} ) )
                }
            }
        ).catch ( err => {
            console.warn ( err )
        }
    )
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
                isAuth: true
            }
        default:
            return state
    }
}

export default authReducer;
