import {AppStateType} from "../Redux/reduxStore";

export const getNavLinkBar = (state:AppStateType)=>{
    return state.navBarReducer.navLinkBar
}

export const getFriendsIcons = (state:AppStateType)=>{
    return state.navBarReducer.friendsIcons
}
export const getProfileName = (state:AppStateType)=>{
    return state.auth.data.login
}
