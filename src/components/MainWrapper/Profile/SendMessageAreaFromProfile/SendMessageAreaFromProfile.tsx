import s from "./SendMessageAreaFromProfile.module.css";
import React, {ChangeEvent} from "react";

type SendMessageAreaFromProfilePropsType = {
    currentInputPost: string
    onAddPost: () => void
    onPostChanger: (text: string) => void

}


export function SendMessageAreaFromProfile(props: SendMessageAreaFromProfilePropsType) {


    const onAddPost = () => {
        props.onAddPost()
        props.onPostChanger('')

    } // adding trimmed post with clearing input   //old logic with dispatch inside


    const onPostChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
        props.onPostChanger(text)


        /*props.dispatch(changePostInputActionCreator(event.currentTarget.value))*/
    } //flax changer element //old logic with dispatch inside

    return (
        <div className={s.sendMessageAreaFromProfile}>
            <textarea value={props.currentInputPost} onChange={onPostChanger}/>
            <button onClick={onAddPost}>send message</button>
        </div>
    )
}