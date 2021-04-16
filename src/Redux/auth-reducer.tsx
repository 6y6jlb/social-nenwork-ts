import {ActionsTypes} from "./reduxStore";


export enum AUTH_CONST {
    SET_USER_DATA = 'ADD-SET_USER_DATA',
}


export type UserDataFromAuthAuthType = {
    id: null | number
    email:null |string
    login:null |string

}
export type InitialStateFromAuthType = {
    isAuth:boolean
    data: UserDataFromAuthAuthType
}


export type SetUserDataType = {
    type: AUTH_CONST.SET_USER_DATA,
    data:UserDataFromAuthAuthType
}

export const setUserDataActionCreator = (data:UserDataFromAuthAuthType):SetUserDataType => {
    return {type: AUTH_CONST.SET_USER_DATA,data} as const
}

const initialState:InitialStateFromAuthType = {
    isAuth:false,
    data : {
        id: null,
        email:null ,
        login:null
    }


}


const authReducer = (state = initialState, action: ActionsTypes): InitialStateFromAuthType => {
    switch (action.type) {
        case AUTH_CONST.SET_USER_DATA:
            return {
                ...state, data: {...action.data},
                isAuth:true

        }
        default:
            return state
    }
}

export default authReducer;
