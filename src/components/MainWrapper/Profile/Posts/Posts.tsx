import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {ProfileWrapperObjType} from "../../../../Redux/State";



export function Posts(props: ProfileWrapperObjType) {
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