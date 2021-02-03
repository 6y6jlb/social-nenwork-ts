import React from "react";
import s from './ProfileWrapper.module.css'
import {Post} from "./Post/Post";
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";

export function ProfileWrapper() {
    return (
        <div className={s.profileContent}>
            <div className={s.profileHeader}>
                <img src={'./images/logo193.png'}/>
            </div>
            <div className={s.profileInfo}>

                <div className={s.selfPhotoFromProfile}>
                    <img src={'./images/face.png'}/>
                </div>
                <div className={s.selfText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic
                </div>
            </div>
            <SendMessageAreaFromProfile />
            <div className={s.profilePosts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    )
}

