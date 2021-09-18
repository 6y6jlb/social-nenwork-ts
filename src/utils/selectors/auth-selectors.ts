import {AppStateType} from "../../Redux/reduxStore";
import {createSelector} from "reselect";
import {getProfileId} from "./profile-selectors";


export const getIsAuth = (state: AppStateType) => state.auth.isAuth
export const getProfileName = (state:AppStateType)=>state.auth.data.login
export const getMyLoginId = (state:AppStateType)=>state.auth.data.id
export const getAuthError = (state:AppStateType)=>state.auth.error
export const getOwnerId = (state:AppStateType)=>state.auth.data.id

export const isOwnerSelector = createSelector ( [getOwnerId,getProfileId], (
    ownerId,profileId
) => {
    return {isOwner:ownerId === profileId
}
})