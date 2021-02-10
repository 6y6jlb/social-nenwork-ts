import React from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'

export function SendMessageAreaFromCurrentDialog() {
    return (
        <div className={s.sendMessageAreaFromCurrentDialog}>
            <textarea className={s.textArea}/>

            <button>send message</button>

        </div>
    )
}