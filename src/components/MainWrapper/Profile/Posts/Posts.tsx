import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {
    MyPostArrayType,
    ProfileInfoTextType,
    ProfileSelfPhotoImgUrlType,
    ProfileWrapperObjType
} from "../../../../Redux/State";

type PostsPropsType = {
    profileSelfPhotoImgUrl: ProfileSelfPhotoImgUrlType
    profileInfoText: Array<ProfileInfoTextType>
    myPostArray: Array<MyPostArrayType>
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