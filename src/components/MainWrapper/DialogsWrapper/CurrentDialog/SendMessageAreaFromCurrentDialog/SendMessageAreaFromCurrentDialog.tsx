import React from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'

type SendMessageAreaFromCurrentDialogPropsType = {
    addMessageFromDialogs: (message:string, enemy:boolean)=>void
}

export function SendMessageAreaFromCurrentDialog(props:SendMessageAreaFromCurrentDialogPropsType) {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        props.addMessageFromDialogs(newMessageElement.current? newMessageElement.current.value:' '
            ,true)
    }
    return (
        <div className={s.sendMessageAreaFromCurrentDialog}>
            <textarea className={s.textArea} ref={newMessageElement}/>

            <button onClick={addMessage}>send message</button>

        </div>
    )
}