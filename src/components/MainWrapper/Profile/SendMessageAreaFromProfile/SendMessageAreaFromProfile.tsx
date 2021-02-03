import s from "./SendMessageAreaFromProfile.module.css";
import React from "react";

export function SendMessageAreaFromProfile() {
    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea/>
            <button>send message</button>
        </div>
    )
}