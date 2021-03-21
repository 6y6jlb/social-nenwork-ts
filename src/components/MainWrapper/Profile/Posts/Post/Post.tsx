import s from "./Post.module.css";
import React from "react";
import {MyPostArrayFromProfileType} from "../../../../../Redux/profileReducer";




export function Post(props: MyPostArrayFromProfileType) {
    return (
        <div className={s.profilePost} key={props.id}>
            <div className={s.avatarAndLikes}>
                <img src={props.profileSelfPhotoImgUrl}/>
                <div>likes</div>
            </div>
            <div className={s.message}>
                {props.message}
            </div>

        </div>
    )
}