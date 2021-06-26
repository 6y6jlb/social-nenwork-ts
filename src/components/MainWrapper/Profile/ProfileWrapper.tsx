import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {InitialStateProfileType} from "../../../Redux/profileReducer";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";



type ProfileWrapperPropsType = {
    onAddPost: (value:string) => void
    savePhotoTC: (file:any) => void
    profileWrapperObj: InitialStateProfileType
    isOwner:boolean


}

export const  ProfileWrapper:React.FC<ProfileWrapperPropsType> = React.memo((props) => {
    return <div className={s.profileContent}>
        <ProfileHeader savePhotoTC={props.savePhotoTC} isOwner={props.isOwner} profileWrapperObj={props.profileWrapperObj}/>
        <SendMessageAreaFromProfile  onAddPost={props.onAddPost}/>
        <Posts myPostArray={props.profileWrapperObj.myPostArray}/>
    </div>

})

