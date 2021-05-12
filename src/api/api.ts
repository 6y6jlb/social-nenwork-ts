import axios from "axios";
import {AuthActionsTypes} from "../Redux/auth-reducer";

export type FollowUserResponseType = {
    resultCode: number
    messages: string[]
    data: Object
}

export interface ResponseHeaderContainerType extends AuthActionsTypes {
    fieldsErrors: any
    messages: string
    resultCode: number
}


export const instanceSamuraiAPI = axios.create ( {
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5dd18682-d8ca-4034-bcc6-76fd868cb4ec"
    }
} )


