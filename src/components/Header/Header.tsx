import React from "react";
import s from './Header.module.css'
import imageLogo from '../../images/5a3a185132ceb1.89894673151375675320812609.png'

export function Header() {
    return (
        <header className={s.appHeader}>
            <div className={s.circle}><img src={imageLogo}/></div>
            <div className={s.headerString}>Header</div>

        </header>
    )
}
