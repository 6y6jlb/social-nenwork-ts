import {AppStateType} from "../../Redux/reduxStore";
import {createSelector} from "reselect";


export const getUsers = (state: AppStateType) => state.usersReducer.users;
export const getTotalCount = (state: AppStateType) => state.usersReducer.totalCount;
export const getPageSize = (state: AppStateType) => state.usersReducer.pageSize;
export const getPortionNumber = (state: AppStateType) => state.usersReducer.portionNumber;
export const getCurrentPage = (state: AppStateType) => state.usersReducer.currentPage;
export const getIsFetching = (state: AppStateType) => state.usersReducer.isFetching;
export const getIsRequestSendUserId = (state: AppStateType) => state.usersReducer.isRequestSendUsersId;

export const getUsersDifficult = createSelector ( getUsers, (users) => {
    return users.map ( u => {
        const status = u.status && u.status;
        const statusText = status
            ? status
            : u.followed
                ? "users.status.empty.follow"
                : "users.status.empty.unfollow";
        return {
            ...u,
            status: statusText,
        };
    } );
} );


export const commonUsersSelector = createSelector ( [
        getUsersDifficult,
        getTotalCount,
        getPageSize,
        getPortionNumber,
        getCurrentPage,
        getIsFetching,
        getIsRequestSendUserId],
    (users,
     totalCount,
     pageSize,
     portionNumber,
     currentPage,
     isFetching,
     isRequestSendUsersId) => {
        return {
            users,
            totalCount,
            pageSize,
            portionNumber,
            currentPage,
            isFetching,
            isRequestSendUsersId,
        };
    } );

