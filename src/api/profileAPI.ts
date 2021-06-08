import {UserFromProfileResponseType} from "../Redux/profileReducer";
import {instanceSamuraiAPI} from "./instance";

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