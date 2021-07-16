import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {InitialStateProfileType, UserFromProfileResponseType} from "../../../Redux/profileReducer";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";


type ProfileWrapperPropsType = {
    onAddPost: (value:string) => void
    openSet: (isOpenMenu:boolean) => void
    isOpenMenu:boolean
    savePhoto: (file:any) => void
    saveNewProfile: (model:UserFromProfileResponseType,userId:number|null) => void
    profileWrapperObj: InitialStateProfileType
    isOwner:boolean


}

export const  ProfileWrapper:React.FC<ProfileWrapperPropsType> = React.memo((props) => {
    return <div className={s.profileContent}>
        <ProfileHeader isOpenMenu={props.isOpenMenu} openSet={props.openSet} saveNewProfile={props.saveNewProfile} savePhotoTC={props.savePhoto} isOwner={props.isOwner} profileWrapperObj={props.profileWrapperObj}/>
        <SendMessageAreaFromProfile  onAddPost={props.onAddPost}/>
        <Posts myPostArray={props.profileWrapperObj.myPostArray}/>
    </div>

})

