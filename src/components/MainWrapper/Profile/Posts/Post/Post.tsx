import s from "./Post.module.css";
import React from "react";



type PostPropsType ={
    id:number | string
    profileSelfPhotoImgUrl?: string
    message: string
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.profilePost} key={props.id}>
            <div className={s.avatarAndLikes}>
                <img src={props.profileSelfPhotoImgUrl} alt={props.id.toString()}/>
                <div>likes</div>
            </div>
            <div className={s.message}>
                {props.message}
            </div>

        </div>
    )
}