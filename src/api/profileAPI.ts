import {UserFromProfileResponseType} from "../Redux/profileReducer";
import {instanceSamuraiAPI} from "./instance";

export const ProfileAPI = {
    setUserProfile: (userIdForURL: number) => {
        return instanceSamuraiAPI.get<UserFromProfileResponseType>(`profile/${userIdForURL}`)
    },
    getStatus: (userID: number) => {
        return instanceSamuraiAPI.get(`profile/status/${userID}`)
    },
    sendStatus: (status: string) => {
        return instanceSamuraiAPI.put(`profile/status`, {status: status})
    },
    savePhoto: (photoFile: any) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instanceSamuraiAPI.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    setNewProfile:(model:UserFromProfileResponseType)=>{
        return instanceSamuraiAPI.put('profile',model)
    }
}