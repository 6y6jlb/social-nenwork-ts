import React,{ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonPropsType & {
    text:string
    small?:boolean
}


const Button:React.FC<PropsType> =({text,small=false,...restProps}) => {
    return (
        <div className={`${style.mainButton} ${small && style.small}`}>
            <button  {...restProps}>{text}</button>
        </div>
    );
};



export default Button;