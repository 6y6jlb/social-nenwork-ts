import {WebSocketMessageType} from "../../../../../Redux/chatReducer";
import style from "../../Chat.module.css";
import * as React from "react";
import {PATH} from "../../../../common/routes/Routes";
import { NavLink } from "react-router-dom";


interface IProps {
    message: WebSocketMessageType
}

export const WebSocketMessage:React.FC<IProps> = ( { message }) => {
    return (
        <div className={ style.messageFrame }>
            <NavLink to={ `${ PATH.PROFILE + message.userId }` }>
            <div className={ style.description }>
                <img src={ message.photo } alt={ message.userId.toString () }/>
                <span>{ message.userName }</span>
            </div>
            </NavLink>
            <span className={ style.body }>{ message.message }</span>
        </div>
    );
};