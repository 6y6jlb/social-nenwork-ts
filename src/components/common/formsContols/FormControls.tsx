import {Field, WrappedFieldProps} from "redux-form";
import React from "react";
import style  from './FormControls.module.css'


const FormControl: React.FC<WrappedFieldProps> = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div>
            <div className={`${ style.textArea } ${ hasError && style.error }`}>
                { props.children }
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl  { ...props }>
            <textarea { ...input } { ...restProps }/>
        </FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl  { ...props }>
            <input { ...input } { ...restProps }/>
        </FormControl>
    )
}
export const createField = (placeholder: string | undefined,
                            name: string,
                            validators: Array<Function>,
                            component: React.FC<WrappedFieldProps>,
                            props = {}, text = '') => {
    return (
        <div>
            <Field placeholder={ placeholder } name={ name } validate={ validators }
                   component={ component } { ...props } />
            <span className={style.span}>{ text }</span>
        </div>
    )
}