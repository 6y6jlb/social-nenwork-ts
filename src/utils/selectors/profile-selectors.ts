import {AppStateType} from "../../Redux/reduxStore";


export const getProfile = (state: AppStateType) => state.profileReducer
export const getIsFetchingProfile = (state:AppStateType)=>state.profileReducer.isFetching
export const getIsOpenMenuProfile = (state:AppStateType)=>state.profileReducer.isOpenMenu
export const getPhotosProfile = (state:AppStateType)=>state.profileReducer.profile.photos
export const getProfileId = (state:AppStateType)=>state.profileReducer.profile.userId