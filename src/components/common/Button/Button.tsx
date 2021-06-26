import React from 'react';

import style from './Button.module.css'


type PropsType = {
    text:string
    small?:boolean
}


const Button:React.FC<PropsType> =({text,small=false}) => {
    return (
        <div className={`${style.mainButton} ${small && style.small}`}>
            <button>{text}</button>
        </div>
    );
};



export default Button;