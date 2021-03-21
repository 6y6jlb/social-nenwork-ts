import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {MyPostArrayFromProfileType, ProfileInfoTextFromProfileType} from "../../../../Redux/profileReducer";


type PostsPropsType = {
    profileSelfPhotoImgUrl: string
    profileInfoText: Array<ProfileInfoTextFromProfileType>
    myPostArray: Array<MyPostArrayFromProfileType>
}

export function Posts(props: PostsPropsType) {
    return (
        <div className={s.profilePosts}>
            {props.myPostArray.map(p => {
                return (
                    <Post profileSelfPhotoImgUrl={props.profileSelfPhotoImgUrl} id={p.id}
                          message={p.message} key={p.id}/>)

            })}
        </div>
    )
}