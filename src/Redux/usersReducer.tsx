import selfPhoto from "../images/face.png";
import {ActionsTypes} from "./reduxStore";

export const FOLLOW = 'FOLLOW'
type followActionCreationType = {
    type: typeof FOLLOW
    id: number
}
export const followActionCreator = (id: number): followActionCreationType => {
    return {type: FOLLOW, id} as const
}

export const UN_FOLLOW = 'UN_FOLLOW'
type unFollowActionCreatorType = {
    type: typeof UN_FOLLOW
    id: number
}
export const unFollowActionCreator = (id: number): unFollowActionCreatorType => {
    return {type: UN_FOLLOW, id} as const
}

export const ADD_MORE_USERS = 'ADD_MORE_USERS'
type addMoreUsersActionCreatorType = {
    type: typeof ADD_MORE_USERS
    users: UserType[]
}
export const addMoreUsersActionCreator = (users: UserType[]): addMoreUsersActionCreatorType => {
    return {type: ADD_MORE_USERS, users} as const
}


export type LocationType = {
    country: string
    city: string
}

export type UserType = {
    id: number
    followed: boolean
    photoImgUrl: string
    status: string
    location: LocationType


}

export type InitialStateUsersType = UserType[]
//export type InitialStateUsersType = typeof initialState

const initialState = [
    {
        photoImgUrl: selfPhoto,
        id: 1,
        status: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, ',
        location: {
            country: 'Russia',
            city: 'Kukuevo'
        } as LocationType
    } as UserType, {
        photoImgUrl: selfPhoto,
        followed: true,
        id: 2, status: ' ultricies nec, pellentesque eu, ',
        location: {
            country: 'Russia',
            city: 'Kukuevo'
        } as LocationType
    } as UserType, {
        photoImgUrl: selfPhoto,
        id: 3,
        followed: false,
        status: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu ',
        location: {
            country: 'Russia',
            city: 'Kukuevo'
        } as LocationType
    } as UserType, {
        photoImgUrl: selfPhoto,
        id: 4,
        followed: true,
        status: 'Lorem ipssa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridics, ultricies nec, pellentesque eu, ',
        location: {
            country: 'Russia',
            city: 'Kukuevo'
        } as LocationType
    } as UserType, {
        photoImgUrl: selfPhoto,
        id: 5,
        followed: true, status: 'eu, ',
        location: {
            country: 'Russia',
            city: 'Kukuevo'
        } as LocationType
    } as UserType,
] as UserType[]


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateUsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state.map(user => {
                        if (user.id === action.id) {
                            return {...user, followed: true}
                        } else {
                            return user
                        }
                    }
                )
            };
        case UN_FOLLOW:
            return {
                ...state.map(user => {
                        if (user.id === action.id) {
                            return {...user, followed: false}
                        } else {
                            return user
                        }
                    }
                )
            };
        case ADD_MORE_USERS:
            return {...state, ...action.users}
        default:
            return state
    }
}
export default usersReducer;
