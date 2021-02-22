import React from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'

export function SendMessageAreaFromCurrentDialog() {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        console.log(newMessageElement.current?.value)
    }
    return (
        <div className={s.sendMessageAreaFromCurrentDialog}>
            <textarea className={s.textArea} ref={newMessageElement}/>

            <button onClick={addMessage}>send message</button>

        </div>
    )
}