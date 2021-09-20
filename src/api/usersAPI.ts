import {UsersResponseType} from "../components/MainWrapper/Users/UserPage.container";
import {FollowUserResponseType, instanceSamuraiAPI} from "./instance";

export const UsersAPI = {
    getUsers: (pageSize: number, currentPage: number,userName='') => {
        return instanceSamuraiAPI.get<UsersResponseType> ( `users/?count=${ pageSize }&page=${ currentPage }&term=${userName}`,
        )
    },
    friendCheck:(userId: number)=>{
        return instanceSamuraiAPI.get<FollowUserResponseType> ( `follow/${ userId }`)
    },
    unFollowUser: (userId: number) => {
        return instanceSamuraiAPI.delete<FollowUserResponseType> ( `follow/${ userId }`,
        )
    },
    followUser: (userId: number) => {
        return instanceSamuraiAPI.post<FollowUserResponseType> ( `follow/${ userId }`)

    }
}