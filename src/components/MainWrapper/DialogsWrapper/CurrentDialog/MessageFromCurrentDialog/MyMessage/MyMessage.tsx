import s from "./MyMessage.module.css";
import React from "react";
import {MessagesFromDialogsType} from "../../../../../../Redux/dialogsReducer";



export function MyMessage(props: MessagesFromDialogsType) {
    return (
        <div className={s.message} key={props.id}>
            <div className={s.avatar}><img className={s.avatarChild} src={props.avatarURL}/></div>
            <div className={s.messageFrame}>
                <div className={s.textFrame}>
                    <div className={s.name}>Random Name</div>
                    <div className={s.textMessage}>{props.item}</div>
                    <div className={s.time}>02.21.22</div>
                </div>
                <div className={s.cornet}></div>
            </div>
        </div>
    )

}