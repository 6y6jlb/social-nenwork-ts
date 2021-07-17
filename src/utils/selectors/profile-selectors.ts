import {AppStateType} from "../../Redux/reduxStore";
import {createSelector} from "reselect";


export const getProfileWrapperObj = (state: AppStateType) => state.profileReducer
export const getIsFetchingProfile = (state:AppStateType)=>state.profileReducer.isFetching
export const getIsOpenMenuProfile = (state:AppStateType)=>state.profileReducer.isOpenMenu