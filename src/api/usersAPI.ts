import {UsersResponseType} from "../components/MainWrapper/Users/UserPage.container";
import {FollowUserResponseType, instanceSamuraiAPI} from "./api";

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