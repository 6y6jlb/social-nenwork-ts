import {AppStateType} from "../Redux/reduxStore";
import {createSelector} from "reselect";

export const getMessages = (state:AppStateType)=>{
    return state.dialogsReducer.messages
}
export const difficultGetMessagestSelector = createSelector(getMessages,(messages)=>{
    return messages.filter(m=>m) //filter can be here
})
export const getIsAuth = (state:AppStateType)=>{
    return state.auth.isAuth
}
export const getFullName = (state:AppStateType)=>{
    return state.profileReducer.profile.fullName
}
