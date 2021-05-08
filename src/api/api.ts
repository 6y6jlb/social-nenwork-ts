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


const instanceSamuraiAPI = axios.create ( {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5dd18682-d8ca-4034-bcc6-76fd868cb4ec"
    }
} )


export const UsersAPI = {
    getUsers: (pageSize: number, currentPage: number) => {
        return instanceSamuraiAPI.get<UsersResponseType> ( `users/?count=${ pageSize }&page=${ currentPage }`,
        )
    },
    unFollowUser: (userId: number) => {
        return instanceSamuraiAPI.delete<FollowUserResponseType> ( `follow/${ userId }`,
        )
    },
    followUser: (userId: number) => {
        return instanceSamuraiAPI.post<FollowUserResponseType> ( `follow/${ userId }`,
        )
    }
}
export const ProfileAPI = {
    setUserProfile: (userIdForURL: number) => {
        return instanceSamuraiAPI.get<UserFromProfileResponseType> ( `profile/${ userIdForURL }` )
    },
    getStatus: (userID: number) => {
        return instanceSamuraiAPI.get ( `profile/status/${ userID }` )
    },
    sendStatus: (status: string) => {
        return instanceSamuraiAPI.put ( `profile/status`, {status: status} )
    }
}
export const AuthAPI = {
    setUserFromHeader() {
        return instanceSamuraiAPI.get<ResponseHeaderContainerType> ( `auth/me`, {} )
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        const model = {
            email, password, rememberMe
        }
        return instanceSamuraiAPI.post ( '/auth/login', model )
    },
    logout(){
        return instanceSamuraiAPI.delete('/auth/login')
    },
}