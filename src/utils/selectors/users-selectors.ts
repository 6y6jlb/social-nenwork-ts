import {AppStateType} from "../../Redux/reduxStore";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType) => state.usersReducer.users
export const getTotalCount = (state: AppStateType) => state.usersReducer.totalCount
export const getPageSize = (state: AppStateType) => state.usersReducer.pageSize
export const getPortionNumber = (state: AppStateType) => state.usersReducer.portionNumber
export const getCurrentPage = (state: AppStateType) => state.usersReducer.currentPage
export const getIsFetching = (state: AppStateType) => state.usersReducer.isFetching
export const getIsRequestSendUserId = (state: AppStateType) => state.usersReducer.isRequestSendUsersId

export const getUsersDifficult = createSelector ( getUsers, (users) => {
    return users.map ( u => {
        const status = u.status && u.status ;
        const statusText = u.followed ? status && 'and' + ' it is your friend'
            : status
                ? status && 'and' + ' he is not a your friend'
                : u.status ;
        return {
            ...u,
            status: statusText
        }
    } )
} )

