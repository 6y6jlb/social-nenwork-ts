import s from "./Post.module.css";
import React from "react";

export type PostType={
    message: string
}

export function Post(props:PostType) {
    return (
        <div className={s.profilePost}>
            <div>
                <img src={'./images/face.png'}/>
                <div>likes</div>
            </div>
            <div>
                {props.message}
            </div>

        </div>
    )
}