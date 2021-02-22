import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavigationBar.module.css'
import {SmallInfo} from "./SmallInfo/SmallInfo";
import {NavBarObjType} from "../../../Redux/State";




export function NavigationBar({navLinkBar, friendsIcons}:NavBarObjType) {

const navLinkBlock = navLinkBar.map(i=>{
    return <div key={i.id}>
        <NavLink to={i.item}>{i.item}</NavLink>
    </div>
})
    const friendsIconsBlock = friendsIcons.map(f=>{
        return <div key={f.id} className={s.iconBlock}>
            <div className={s.backGroundBlock}> <img src={f.photoUrl}/></div>

            <span>{f.name}</span>
        </div>
    })

    return (
        <div className={s.navigationBar}>
            <SmallInfo/>
            <div className={s.NavElements}>
                {navLinkBlock}
            </div>
            <div className={s.activeFriends}>
                {friendsIconsBlock}
            </div>
        </div>
    )
}
