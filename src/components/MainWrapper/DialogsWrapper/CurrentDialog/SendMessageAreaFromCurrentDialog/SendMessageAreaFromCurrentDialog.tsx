import React, {ChangeEvent} from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'

type SendMessageAreaFromCurrentDialogPropsType = {
    currentInputMessageString: string
    addMessageFromDialogs: (value: string, self: boolean) => void
    textAreaFromDialogsChanger: (item: string) => void
}

export function SendMessageAreaFromCurrentDialog(props: SendMessageAreaFromCurrentDialogPropsType) {

    const addPost = () => {
        const trimmedMessage = props.currentInputMessageString.trim()
        debugger
        if (trimmedMessage) {
            props.addMessageFromDialogs(trimmedMessage, true)
            props.textAreaFromDialogsChanger('')
        } else {
            props.textAreaFromDialogsChanger('')
        }
    } // adding trimmed post with clearing input
    const inputChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.textAreaFromDialogsChanger(event.currentTarget.value)
    } //flax changer element

    return (
        <div className={s.sendMessageAreaFromCurrentDialog}>
            <textarea className={s.textArea} onChange={inputChanger}
                      value={props.currentInputMessageString}/>

            <button onClick={addPost}>send message</button>

        </div>
    )
}