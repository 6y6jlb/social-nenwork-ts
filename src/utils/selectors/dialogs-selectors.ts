import {AppStateType} from "../../Redux/reduxStore";
import {createSelector} from "reselect";

export const getMessages = (state: AppStateType) => state.dialogsReducer.messages

export const getFullName = (state: AppStateType) => state.profileReducer.profile.fullName
export const difficultGetMessagesSelector = createSelector ( getMessages, (messages) => messages.filter ( m => m ) )
