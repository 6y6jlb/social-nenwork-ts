import React from "react";
import {CurrentDialog} from "./CurrentDialog/CurrentDialog";
import {FriendListFromDialogs} from "./FriendListFromDialogs/FriendListFromDialogs";
import s from './DialogsWrapper.module.css'

export function DialogsWrapper() {
    return (
        <div className={s.dialogsWrapper}>
            <FriendListFromDialogs />
            <CurrentDialog />
        </div>
    )
}
