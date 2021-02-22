import s from "./SendMessageAreaFromProfile.module.css";
import React from "react";

type SendMessageAreaFromProfilePropsType = {

    addPostFromProfile: (message: string) => void
}

export function SendMessageAreaFromProfile({addPostFromProfile}:SendMessageAreaFromProfilePropsType) {


    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        addPostFromProfile(newPostElement.current? newPostElement.current.value:' ')
    }
    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea ref={newPostElement}/>
            <button onClick={addPost}>send message</button>
        </div>
    )
}