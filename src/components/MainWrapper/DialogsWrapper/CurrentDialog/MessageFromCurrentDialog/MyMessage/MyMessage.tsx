import s from "./MyMessage.module.css";
import React from "react";

type MyMessagePropsType ={
    id: number
    item: string
    self: boolean
    avatarURL: string
    name:string |null
}

export function MyMessage(props: MyMessagePropsType) {
    return (
        <div className={s.message} key={props.id}>
            <div className={s.avatar}><img className={s.avatarChild} src={props.avatarURL}/></div>
            <div className={s.messageFrame}>
                <div className={s.textFrame}>
                    <div className={s.name}>{props.name||'unknown'}</div>
                    <div className={s.textMessage}>{props.item}</div>
                    <div className={s.time}>02.21.22</div>
                </div>
                <div className={s.cornet}></div>
            </div>
        </div>
    )

}