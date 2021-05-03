import axios from "axios";
import {UsersResponseType} from "../components/MainWrapper/Users/UserPage.container";
import {UserFromProfileResponseType} from "../Redux/profileReducer";
import {SetUserDataType} from "../Redux/auth-reducer";

type FollowUserResponseType = {
    resultCode: number
    messages: string[]
    data: Object
}

interface ResponseHeaderContainerType extends SetUserDataType {
    fieldsErrors: any
    messages: string
    resultCode: number
}


const instanceForGetUsersSamuraiAPI = axios.create ( {
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

} )
const instanceForUnFollowUserAndFollowUserSamuraiAPI = axios.create ( {
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": '5dd18682-d8ca-4034-bcc6-76fd868cb4ec'
    }

} )
const instanceForProfileSamuraiAPI = axios.create ( {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5dd18682-d8ca-4034-bcc6-76fd868cb4ec"
    }
} )
const instanceForAuthSamuraiAPI = axios.create ( {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5dd18682-d8ca-4034-bcc6-76fd868cb4ec"
    }
} )


export const UsersAPI = {
    getUsers: (pageSize: number, currentPage: number) => {
        return instanceForGetUsersSamuraiAPI.get<UsersResponseType> ( `users/?count=${ pageSize }&page=${ currentPage }`,
        )
    },
    unFollowUser: (userId: number) => {
        return instanceForUnFollowUserAndFollowUserSamuraiAPI.delete<FollowUserResponseType> ( `follow/${ userId }`,
        )
    },
    followUser: (userId: number) => {
        return instanceForUnFollowUserAndFollowUserSamuraiAPI.post<FollowUserResponseType> ( `follow/${ userId }`,
        )
    }
}
export const ProfileAPI = {
    setUserProfile: (userIdForURL: number) => {
        return instanceForProfileSamuraiAPI.get<UserFromProfileResponseType> ( `profile/${ userIdForURL }` )
    },
    getStatus: (userID: number) => {
        return instanceForProfileSamuraiAPI.get ( `profile/status/${ userID }` )
    },
    sendStatus: (status: string) => {
        return instanceForProfileSamuraiAPI.put ( `profile/status`, {status: status} )
    }
}
export const AuthAPI = {
    setUserFromHeader() {
        return instanceForAuthSamuraiAPI.get<ResponseHeaderContainerType> ( `auth/me`, {} )
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        const model = {
            email, password, rememberMe
        }
        return instanceForAuthSamuraiAPI.post ( '/auth/login', model )
    }
}