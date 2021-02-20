import s from "./Post.module.css";
import React from "react";
import {MyPostArrayType} from "../../../../../index";


export function Post(props: MyPostArrayType) {
    return (
        <div className={s.profilePost} key={props.id}>
            <div>
                <img src={props.profileSelfPhotoImgUrl}/>
                <div>likes</div>
            </div>
            <div>
                {props.message}
            </div>

        </div>
    )
}