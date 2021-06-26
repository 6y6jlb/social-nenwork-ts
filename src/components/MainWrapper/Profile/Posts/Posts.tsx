import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {MyPostArrayFromProfileType} from "../../../../Redux/profileReducer";


type PostsPropsType = {
    myPostArray: Array<MyPostArrayFromProfileType>
}

export const Posts = (props: PostsPropsType) => (
    <div className={ s.profilePosts }>
        { props.myPostArray.map ( p => {
            return (
                <Post profileSelfPhotoImgUrl={ p.profileSelfPhotoImgUrl } id={ p.id }
                      message={ p.message } key={ p.id }/>)

        } ) }
    </div>
);