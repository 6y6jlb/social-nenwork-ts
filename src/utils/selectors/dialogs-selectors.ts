import {AppStateType} from "../../Redux/reduxStore";
import {createSelector} from "reselect";


export const messagesPortionNumberSelector = (state: AppStateType) => state.dialogsReducer.portionNumber
export const messagesPageSizeSelector = (state: AppStateType) => state.dialogsReducer.pageSize
export const messagesPageSelector = (state: AppStateType) => state.dialogsReducer.page
export const messagesIsFetchingSelector = (state: AppStateType) => state.dialogsReducer.isFetching
export const messagesTotalCountSelector = (state: AppStateType) => state.dialogsReducer.totalResults

export const getMessages = (state: AppStateType) => state.dialogsReducer.messages
export const getDialogs = (state: AppStateType) => state.dialogsReducer.dialogs
export const getFullName = (state: AppStateType) => state.profileReducer.profile.fullName
export const difficultGetMessagesSelector = createSelector ( getMessages, (messages) => messages.filter ( m => m ) )
