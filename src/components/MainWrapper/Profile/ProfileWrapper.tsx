import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {InitialStateProfileType} from "../../../Redux/profileReducer";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";



type ProfileWrapperPropsType = {
    onAddPost: (value:string) => void
    onPostChanger: (text: string) => void
    profileWrapperObj: InitialStateProfileType


}

export const  ProfileWrapper:React.FC<ProfileWrapperPropsType> = (props) => {
    return <div className={s.profileContent}>
        <ProfileHeader profileWrapperObj={props.profileWrapperObj}/>
        <SendMessageAreaFromProfile onAddPost={props.onAddPost} onPostChanger={props.onPostChanger}
                                    currentInputPost={props.profileWrapperObj.currentInputPost}/>
        <Posts myPostArray={props.profileWrapperObj.myPostArray}/>
    </div>

}

