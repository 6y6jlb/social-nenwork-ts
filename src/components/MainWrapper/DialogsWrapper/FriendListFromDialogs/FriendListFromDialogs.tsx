import React from "react";
import { NavLink } from "react-router-dom";
import s from './FriendListFromDialogs.module.css'

export function FriendListFromDialogs() {
const activeItem = s.item + ' ' +s.active
    return (
        <div className={s.friendListFromDialogs}>
            <NavLink to='/dialog/1' className={activeItem}>Dmitriy Vitcli-Putcli</NavLink>
            <NavLink to='/dialog/2' className={s.item}>Ivan Vitcli-Putcli</NavLink>
            <NavLink to='/dialog/3' className={s.item}>Fekla Vitcli-Putcli</NavLink>
            <NavLink to='/dialog/4' className={s.item}>Antoniy Vitcli-Putcli</NavLink>
            <NavLink to='/dialog/5' className={s.item}>Vasiliy Vitcli</NavLink>
            <NavLink to='/dialog/6' className={s.item}>etc.</NavLink>
        </div>
    )
}