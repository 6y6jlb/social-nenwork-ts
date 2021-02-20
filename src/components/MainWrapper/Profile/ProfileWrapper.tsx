import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {ProfileWrapperObjType} from "../../../index";


export function ProfileWrapper(props: ProfileWrapperObjType) {

    const profileSelfPhotoImgUrl = props.profileSelfPhotoImgUrl
    const profileInfoText = props.profileInfoText
    const myPostArray = props.myPostArray

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
            <SendMessageAreaFromProfile/>
            <Posts profileInfoText={profileInfoText} profileSelfPhotoImgUrl={profileSelfPhotoImgUrl}
                   myPostArray={myPostArray}/>
        </div>
    )
}

