import React, {ChangeEvent} from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'


type SendMessageAreaFromCurrentDialogPropsType = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
    currentInputMessageString: string
    /*dispatch: (action: ActionsTypes) => void*/
}

export function SendMessageAreaFromCurrentDialog(props: SendMessageAreaFromCurrentDialogPropsType) {


    const addPost = () => {
        props.onAddPost();
        /*const trimmedMessage = props.currentInputMessageString.trim()
        if (trimmedMessage) {
            props.dispatch(addDialogsMessageActionCreator(true))
            props.dispatch(changeDialogsInputActionCreator(''))
        } else {
            props.dispatch(changeDialogsInputActionCreator(''))
        }*/
    } // adding trimmed post with clearing input
    const inputChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        props.onPostChanger(text);
        /*props.dispatch(changeDialogsInputActionCreator(event.currentTarget.value))*/
    } //flax changer element

    return (
        <div className={s.sendMessageAreaFromCurrentDialog}>
            <textarea className={s.textArea} onChange={inputChanger}
                      value={props.currentInputMessageString}/>

            <button onClick={addPost}>send message</button>

        </div>
    )
}