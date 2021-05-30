import s from "./NotMyMessage.module.css";
import React from "react";

type NotMyMessagePropsType = {
    id: number
    item: string
    self: boolean
    avatarURL: string
    name: string | null
}

export const NotMyMessage = React.memo((props: NotMyMessagePropsType) => (
    <div className={ s.message }>
        <div className={ s.avatar }><img className={ s.avatarChild } src={ props.avatarURL }/></div>
        <div className={ s.messageFrame }>
            <div className={ s.cornet }></div>
            <div className={ s.textFrame }>
                <div className={ s.name }>{ props.name || 'unknown' }</div>
                <div className={ s.textMessage }>{ props.item }</div>
                <div className={ s.time }>02.21.22</div>
            </div>

        </div>
    </div>
));