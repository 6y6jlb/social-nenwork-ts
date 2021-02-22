import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {MyPostArrayType, ProfileInfoTextType, ProfileSelfPhotoImgUrlType} from "../../../Redux/State";

export type ProfileWrapperPropsType = {
    profileSelfPhotoImgUrl: ProfileSelfPhotoImgUrlType
    profileInfoText: Array<ProfileInfoTextType>
    myPostArray: Array<MyPostArrayType>
    addPostFromProfile: (message: string) => void
}

export function ProfileWrapper({
                                   profileSelfPhotoImgUrl,
                                   profileInfoText,
                                   myPostArray,
                                   addPostFromProfile
                               }: ProfileWrapperPropsType) {


    return (
        <div className={s.profileContent}>
            <div className={s.profileHeader}>
                <div className={s.selfPhotoFromProfile}>
                    <img src={profileSelfPhotoImgUrl}/>
                </div>
            </div>
            <div className={s.profileInfo}>

                <div></div>
                <div className={s.selfText}>
                    {profileInfoText.map(p => {
                        return (
                            <div key={p.id}>
                                -<em>{p.postMessage}</em>
                            </div>
                        )
                    })}
                </div>
            </div>
            <SendMessageAreaFromProfile addPostFromProfile={addPostFromProfile}/>
            <Posts profileInfoText={profileInfoText} profileSelfPhotoImgUrl={profileSelfPhotoImgUrl}
                   myPostArray={myPostArray}/>
        </div>
    )
}

