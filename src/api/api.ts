import axios from "axios";
import {UsersResponseType} from "../components/MainWrapper/UserPage/UserPage.container";

type FollowUserResponseType = {
    resultCode:number
    messages: string[]
    data:Object
}

const instanceForGetUsersSamuraiAPI = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/"

})
const instanceForUnFollowUserAndFollowUserSamuraiAPI = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":'3d2dd236-488d-443e-9eb7-ae8a6831eb76'
    }

})

export const UsersAPI = {
    getUsers:(pageSize:number,currentPage:number) =>{
        return instanceForGetUsersSamuraiAPI.get<UsersResponseType> ( `users/?count=${pageSize }&page=${currentPage }`,
        )
        //.then(response=>response.data) //пофиксить
    },
    unFollowUser:(userId:number) =>{
        return instanceForUnFollowUserAndFollowUserSamuraiAPI.delete<FollowUserResponseType> ( `follow/${userId}`,
        )
    },
    followUser:(userId:number) =>{
        return instanceForUnFollowUserAndFollowUserSamuraiAPI.post<FollowUserResponseType> ( `follow/${userId}`,
        )
    }
}