import {ActionsTypes} from "./reduxStore";
import {UserResponseType} from "../components/MainWrapper/UserPage/UserPage.container";
import {UsersAPI} from "../api/api";
import {Dispatch} from "redux";

export enum USERS_CONST {
    FOLLOW = 'FOLLOW',
    UN_FOLLOW = 'UN_FOLLOW',
    ADD_MORE_USERS = 'ADD_MORE_USERS',
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    CHANGE_TOTAL_COUNT = 'CHANGE_TOTAL_COUNT',
    CHANGE_IS_FETCHING_FROM_USERS = 'CHANGE_IS_FETCHING_FROM_USERS',
    SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW = 'SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW'

}

export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean


}
export type InitialStateUsersType = UserType[] | UserResponseType[] | []
//export type InitialStateUsersType = typeof initialState

type followActionCreationType = {
    type: typeof USERS_CONST.FOLLOW
    id: number
}
type unFollowActionCreatorType = {
    type: typeof USERS_CONST.UN_FOLLOW
    id: number
}
type addMoreUsersActionCreatorType = {
    type: typeof USERS_CONST.ADD_MORE_USERS
    users: UserType[] | []
}
type changeCurrentPageActionCreatorType = {
    type: typeof USERS_CONST.CHANGE_CURRENT_PAGE
    currentPage: number
}
type changeTotalCountActionCreatorType = {
    type: typeof USERS_CONST.CHANGE_TOTAL_COUNT
    totalCount: number
}
type changeIsFetchingActionCreatorType = {
    type: typeof USERS_CONST.CHANGE_IS_FETCHING_FROM_USERS
    isFetching: boolean
}
type sendingRequestFromFollowUnFollowTypeActionCreatorType = {
    type: typeof USERS_CONST.SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW,
    userId: number
    isFetching: boolean
}


export const followActionCreator = (id: number): followActionCreationType => {
    return {type: USERS_CONST.FOLLOW, id} as const
}
export const unFollowActionCreator = (id: number): unFollowActionCreatorType => {
    return {type: USERS_CONST.UN_FOLLOW, id} as const
}
export const addMoreUsersActionCreator = (users: UserType[] | UserResponseType[]): addMoreUsersActionCreatorType => {
    return {type: USERS_CONST.ADD_MORE_USERS, users} as const
}
export const changeCurrentPageActionCreator = (currentPage: number): changeCurrentPageActionCreatorType => {
    return {type: USERS_CONST.CHANGE_CURRENT_PAGE, currentPage} as const
}
export const changeTotalCountActionCreator = (totalCount: number): changeTotalCountActionCreatorType => {
    return {type: USERS_CONST.CHANGE_TOTAL_COUNT, totalCount} as const
}
export const changeIsFetchingActionCreator = (isFetching: boolean): changeIsFetchingActionCreatorType => {
    return {type: USERS_CONST.CHANGE_IS_FETCHING_FROM_USERS, isFetching} as const
}
export const sendRequestFromFollowUnFollowActionCreator = (userId: number, isFetching: boolean): sendingRequestFromFollowUnFollowTypeActionCreatorType => {
    return {type: USERS_CONST.SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW, userId, isFetching} as const
}
export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch ( changeIsFetchingActionCreator ( true ) )
    UsersAPI.getUsers ( pageSize, currentPage ).then ( response => {
            dispatch ( changeTotalCountActionCreator ( response.data.totalCount > 20 ? 20 : response.data.totalCount ) )
            dispatch ( addMoreUsersActionCreator ( response.data.items ) )
            dispatch ( changeIsFetchingActionCreator ( false ) )
        }
    ).catch(err=>{
        console.warn(err)
        }
    )
}
export const followUserTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch ( sendRequestFromFollowUnFollowActionCreator ( userId, true ) )
    UsersAPI.unFollowUser ( userId )
        .then ( response => {
            if (response.data.resultCode === 0) {
                dispatch ( followActionCreator ( userId ) )
                dispatch ( sendRequestFromFollowUnFollowActionCreator ( userId, false ) )
            }
        } ).catch(err=>{
            console.warn(err)
        }
    )
}
export const unFollowUserTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch ( sendRequestFromFollowUnFollowActionCreator ( userId, true ) )
    UsersAPI.followUser ( userId )
        .then ( response => {
            if (response.data.resultCode === 0) {
                dispatch ( unFollowActionCreator ( userId ) )
                dispatch ( sendRequestFromFollowUnFollowActionCreator ( userId, false ) )
            }
        } ).catch(err=>{
            console.warn(err)
        }
    )
}

const initialState = {
    users: [] as UserType[],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isRequestSendUsersId: [] as number[]
}
export type UsersStateType = typeof initialState

const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
    switch (action.type) {
        case USERS_CONST.FOLLOW:

            return {
                ...state, users: [...state.users.map ( user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    } else {
                        return user
                    }
                } )]
            };

        case USERS_CONST.UN_FOLLOW:
            return {
                ...state, users: state.users.map ( user => {
                        if (user.id === action.id) {
                            return {...user, followed: true}
                        } else {
                            return user
                        }
                    }
                )
            };
        case USERS_CONST.ADD_MORE_USERS:
            if (action.users) {
                return {
                    ...state, users: [...action.users]
                }
            } else {
                return {
                    ...state, users: []
                }
            }
        case USERS_CONST.CHANGE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case USERS_CONST.CHANGE_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.totalCount
            }
        }
        case USERS_CONST.CHANGE_IS_FETCHING_FROM_USERS: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case USERS_CONST.SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW: {
            return {
                ...state, isRequestSendUsersId: action.isFetching ? [
                        ...state.isRequestSendUsersId, action.userId]
                    : state.isRequestSendUsersId.filter ( id => id !== action.userId )
            }
        }
        default:
            return state
    }
}
export default usersReducer;
