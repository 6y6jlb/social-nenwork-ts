import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";


export function ProfileWrapper() {
    let profileWrapperObj = {
        profileHeaderImgUrl: './images/logo193.png',
        profileSelfPhotoImgUrl: 'images/face.png',
        profileInfoText: 'modo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim '
    }
    return (
        <div className={s.profileContent}>
            <div className={s.profileHeader}>
                <img src={profileWrapperObj.profileHeaderImgUrl}/>

            </div>
            <div className={s.profileInfo}>

                <div className={s.selfPhotoFromProfile}>
                    <img src={profileWrapperObj.profileSelfPhotoImgUrl}/>
                </div>
                <div className={s.selfText}>
                    {profileWrapperObj.profileInfoText}
                </div>
            </div>
            <SendMessageAreaFromProfile/>
            <Posts/>
        </div>
    )
}

