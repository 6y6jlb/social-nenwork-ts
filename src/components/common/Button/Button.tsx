import React,{ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

import style from './Button.module.css'
import {FormattedMessage} from "../FormattedMessage/FormattedMessage";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonPropsType & {
    text?:string
    small?:boolean
}


const Button:React.FC<PropsType> =({text,small,children=false,...restProps}) => {
    return (
        <div className={`${style.mainButton} ${small && style.small}`}>
            <button  {...restProps}>{text || children || <FormattedMessage _id='button.empty'/>}</button>
        </div>
    );
};



export default Button;