import s from "./NotMyMessage.module.css";
import React from "react";
import {IMessage} from "../../../../../../api/dialogsAPI";


interface IProps {
    message: IMessage;

}

export const NotMyMessage: React.FC<IProps> = React.memo ( ({message}) => (
    <div className={ s.message }>
        <div className={ s.avatar }><img className={ s.avatarChild } src={ '' }/></div>
        <div className={ s.messageFrame }>
            <div className={ s.cornet }></div>
            <div className={ s.textFrame }>
                <div className={ s.name }>{ message.senderName }</div>
                <div className={ s.textMessage }>{ message.body }</div>
                <div className={ s.time }>02.21.22</div>
            </div>

        </div>
    </div>
) );