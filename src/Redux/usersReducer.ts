import {ActionsTypes, AppThunk, InferActionsType} from "./reduxStore";
import {UserResponseType} from "../components/MainWrapper/Users/UserPage.container";
import {Dispatch} from "redux";
import {UsersAPI} from "../api/usersAPI";

export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean


}
export type InitialStateUsersType = UserType[] | UserResponseType[] | []

export type UsersActionsTypes = InferActionsType<typeof actionsUsers>
//AC
export const actionsUsers = {
    followActionCreator:(id: number) => {
        return {type: 'FOLLOW', id} as const
    },
    unFollowActionCreator:(id: number) => {
        return {type: 'UN_FOLLOW', id} as const
    },
    addMoreUsersActionCreator:(users: UserType[] | UserResponseType[]) => {
        return {type: 'ADD_MORE_USERS', users} as const
    },
    changeCurrentPageActionCreator:(currentPage: number) => {
        return {type: 'CHANGE_CURRENT_PAGE', currentPage} as const
    },
    changeTotalCountActionCreator:(totalCount: number) => {
        return {type: 'CHANGE_TOTAL_COUNT', totalCount} as const
    },
    changeIsFetchingActionCreator:(isFetching: boolean) => {
        return {type: 'CHANGE_IS_FETCHING_FROM_USERS', isFetching} as const
    },
    sendRequestFromFollowUnFollowActionCreator:(userId: number, isFetching: boolean) => {
        return {type: 'SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW', userId, isFetching} as const
    }
}

export const getUsersTC = (pageSize: number, currentPage: number):AppThunk => async dispatch => {
    dispatch ( actionsUsers.changeIsFetchingActionCreator ( true ) )
    const response = await UsersAPI.getUsers ( pageSize, currentPage )
        try {
            dispatch ( actionsUsers.changeTotalCountActionCreator ( response.data.totalCount > 20 ? 20 : response.data.totalCount ) )
            dispatch ( actionsUsers.addMoreUsersActionCreator ( response.data.items ) )
            dispatch ( actionsUsers.changeIsFetchingActionCreator ( false ) )
        }catch (e) {
            throw new Error(e)
        }
}
export const followUserTC = (userId: number):AppThunk => async dispatch => {
    dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, true ) )
    const response = await UsersAPI.unFollowUser ( userId )
        try {
            if (response.data.resultCode === 0) {
                dispatch ( actionsUsers.followActionCreator ( userId ) )
                dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, false ) )
            }
        }catch (e) {
            throw new Error(e)
        }
}
export const unFollowUserTC = (userId: number):AppThunk => async dispatch => {
    dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, true ) )
    const response = await UsersAPI.followUser ( userId )
        try {
            if (response.data.resultCode === 0) {
                dispatch ( actionsUsers.unFollowActionCreator ( userId ) )
                dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, false ) )
            }
        } catch (e) {
            throw new Error(e)
        }
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

const usersReducer = (state: UsersStateType = initialState, action: UsersActionsTypes): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':

            return {
                ...state, users: [...state.users.map ( user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    } else {
                        return user
                    }
                } )]
            };

        case 'UN_FOLLOW':
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
        case 'ADD_MORE_USERS':
            if (action.users) {
                return {
                    ...state, users: [...action.users]
                }
            } else {
                return {
                    ...state, users: []
                }
            }
        case 'CHANGE_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'CHANGE_TOTAL_COUNT': {
            return {
                ...state, totalCount: action.totalCount
            }
        }
        case 'CHANGE_IS_FETCHING_FROM_USERS': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case 'SENDING_REQUEST_FROM_FOLLOW_UNFOLLOW': {
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
