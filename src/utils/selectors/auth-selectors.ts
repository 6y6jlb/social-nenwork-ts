import {AppStateType} from "../../Redux/reduxStore";


export const getIsAuth = (state: AppStateType) => state.auth.isAuth
export const getProfileName = (state:AppStateType)=>state.auth.data.login
export const getMyLoginId = (state:AppStateType)=>state.auth.data.id
export const getAuthError = (state:AppStateType)=>state.auth.error