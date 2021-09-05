import axios from "axios";
import {AuthActionsTypes} from "../Redux/authReducer";

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
         "API-KEY": "521c0ab2-488b-4f3f-8d48-08737fb6ffd0"
        //"API-KEY": "ed2395d2-9040-4756-acf3-cad057e773d8"
    }
} )



