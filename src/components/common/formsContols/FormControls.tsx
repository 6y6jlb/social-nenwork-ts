import {Field, Validator, WrappedFieldProps} from "redux-form";
import React, {ReactElement} from "react";
import style from './FormControls.module.css'


const FormControl: React.FC<WrappedFieldProps> = React.memo((props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div>
            <div className={ `${ style.textArea } ${ hasError && style.error }` }>
                { props.children }
            </div>
        </div>
    )
})

const FormControlWithoutTouched: React.FC<WrappedFieldProps> = React.memo((props) => {
    return (
        <div>
            <div className={ `${ style.textArea }` }>
                { props.children }
            </div>
        </div>
    )
})

export const Textarea: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl  { ...props }>
            <textarea { ...input } { ...restProps }/>
        </FormControl>
    )
})

export const Input: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl  { ...props }>
            <input { ...input } { ...restProps }/>
        </FormControl>
    )
})

export const TextareaWithoutTouched: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControlWithoutTouched  { ...props }>
            <textarea { ...input } { ...restProps }/>
        </FormControlWithoutTouched>
    )
})

export const InputWithoutTouched: React.FC<WrappedFieldProps> = React.memo((props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControlWithoutTouched  { ...props }>
            <input { ...input } { ...restProps }/>
        </FormControlWithoutTouched>
    )
})


export function createField<FormsKeysType extends string>(placeholder: string | undefined,
                                           name: FormsKeysType,
                                           validators: Validator[],
                                           component: React.FC<WrappedFieldProps>,
                                           props = {}, text = '') {
    return (
        <>
            <Field placeholder={ placeholder }
                   name={ name }
                   validate={ validators }
                   component={ component }
                   { ...props } />
            <span className={ style.span }>{ text }</span>
        </>
    )
}