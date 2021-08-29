import {InferActionsType} from "./reduxStore";
import {UserResponseType} from "../components/MainWrapper/Users/UserPage.container";
import {USERS} from "./consts";

//types
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean


}
export type InitialStateUsersType = UserType[] | UserResponseType[] | []
export type UsersActionsTypes = InferActionsType<typeof actionsUsers>
export type UsersStateType = typeof initialState
//AC
export const actionsUsers = {
    followSaga: (userId: number) => {
        return {type: USERS.FOLLOW_SAGA, payload:{userId}} as const
    },
    unfollowSaga: (userId: number) => {
        return {type: USERS.UNFOLLOW_SAGA,payload:{userId}} as const
    },
    followActionCreator: (id: number) => {
        return {type: USERS.FOLLOW, id} as const
    },
    unFollowActionCreator: (id: number) => {
        return {type: USERS.UN_FOLLOW, id} as const
    },
    addMoreUsersActionCreator: (users: UserType[] | UserResponseType[]) => {
        return {type: USERS.ADD_MORE_USERS, users} as const
    },
    changeCurrentPageActionCreator: (currentPage: number) => {
        return {type: USERS.CHANGE_CURRENT_PAGE, currentPage} as const
    },
    changeTotalCountActionCreator: (totalCount: number) => {
        return {type: USERS.CHANGE_TOTAL_COUNT, totalCount} as const
    },
    changeIsFetchingActionCreator: (isFetching: boolean) => {
        return {type: USERS.CHANGE_IS_FETCHING_FROM_USERS, isFetching} as const
    },
    sendRequestFromFollowUnFollowActionCreator: (userId: number, isFetching: boolean) => {
        return {type: USERS.SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW, userId, isFetching} as const
    },
    setCurrentPage: (page: number) => {
        return {type: USERS.SET_CURRENT_PAGE_FROM_USERS, page} as const
    },
    setPortionNumber: (portion: number) => {
        debugger
        return {type: USERS.SET_PORTION_PAGE_FROM_USERS, portion} as const
    },
    getUsersSaga: (pageSize:number,currentPage:number)=>{
        return {type: USERS.GET_USERS_SAGA, payload: {pageSize, currentPage}
        }as const
    }
}
//thunks
/*export const getUsersTC = (pageSize: number, currentPage: number): AppThunk => async dispatch => {
    dispatch ( actionsUsers.changeIsFetchingActionCreator ( true ) )
    dispatch ( actionsUsers.setCurrentPage(currentPage)  )
    const response = await UsersAPI.getUsers ( pageSize, currentPage )
    try {
        dispatch ( actionsUsers.changeTotalCountActionCreator ( response.data.totalCount ) )
        dispatch ( actionsUsers.addMoreUsersActionCreator ( response.data.items ) )

    } catch (e) {
        throw new Error ( e )
    } finally {
        dispatch ( actionsUsers.changeIsFetchingActionCreator ( false ) )
    }
}*/

/*export const followUserTC = (userId: number): AppThunk => dispatch => {
    // dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, true ) )
    // const response = await UsersAPI.followUser ( userId )
    //     try{
    //         if (response.data.resultCode === 0) {
    //             dispatch ( actionsUsers.followActionCreator ( userId ) )
    //             dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, false ) )
    //         }
    //     }catch (e) {
    //         //throw new Error(e)
    //         console.log (e)
    //     }
    followUnfollowFlow ( dispatch, userId, actionsUsers.followActionCreator, UsersAPI.followUser )
}
export const unFollowUserTC = (userId: number): AppThunk => async dispatch => {
    // dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, true ) )
    // const response = await UsersAPI.unFollowUser ( userId )
    // console.log (11)
    //     try {
    //         if (response.data.resultCode === 0) {
    //             dispatch ( actionsUsers.unFollowActionCreator ( userId ) )
    //             dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, false ) )
    //         }
    //     } catch (e) {
    //         throw new Error(e)
    //     }
    followUnfollowFlow ( dispatch, userId, actionsUsers.unFollowActionCreator, UsersAPI.unFollowUser )
}*/
//state
const initialState = {
    users: [] as UserType[],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isRequestSendUsersId: [] as number[],
    portionNumber:1
}

//reducer
const usersReducer = (state: UsersStateType = initialState, action: UsersActionsTypes): UsersStateType => {
    switch (action.type) {
        case USERS.FOLLOW:
            return {
                ...state, users: [...state.users.map ( user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    } else {
                        return user}})]};
        case USERS.UN_FOLLOW:
            return {
                ...state, users: state.users.map ( user => {
                        if (user.id === action.id) {
                            return {...user, followed: false}
                        } else {
                            return user}})};
        case USERS.ADD_MORE_USERS:
            if (action.users) {
                return {
                    ...state, users: [...action.users]}
            } else {
                return {
                    ...state, users: []}}
        case USERS.CHANGE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case USERS.CHANGE_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.totalCount}}
        case USERS.CHANGE_IS_FETCHING_FROM_USERS: {
            return {
                ...state, isFetching: action.isFetching}}
        case USERS.SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW: {
            return {
                ...state, isRequestSendUsersId: action.isFetching ? [
                        ...state.isRequestSendUsersId, action.userId]
                    : state.isRequestSendUsersId.filter ( id => id !== action.userId )}}
        case USERS.SET_CURRENT_PAGE_FROM_USERS:
            return {...state,currentPage: action.page}
        case USERS.SET_PORTION_PAGE_FROM_USERS: {
            return {...state,portionNumber: action.portion}}
        default:
            return state
    }
}
export default usersReducer;
