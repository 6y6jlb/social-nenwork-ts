import s from "./SendMessageAreaFromProfile.module.css";
import React from "react";

export function SendMessageAreaFromProfile() {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        console.log(newPostElement.current?.value)
    }
    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea ref={newPostElement} />
            <button onClick={addPost}>send message</button>
        </div>
    )
}