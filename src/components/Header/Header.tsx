import React from "react";
import s from './Header.module.css'
import imageLogo from '../../images/5a3a185132ceb1.89894673151375675320812609.png'
import {Redirect} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = React.memo((props: HeaderPropsType) => {
    return <>
        <header className={ s.wrapperHeader }>
            <div className={ s.circle }><img src={ imageLogo }/></div>
            <div className={ s.headerString }>Header</div>
            <div className={ s.loginBlock }>
                { !props.login
                    ? <Redirect to={ '/login' }/>
                    : <>
                        <span className={s.loginSpan} onClick={ () => {
                            props.logout ()
                        } }>logout
                        </span>
                       {/* <Redirect to={ '/profile' }/>*/}
                    </>
                }
            </div>

        </header>
    </>

})
