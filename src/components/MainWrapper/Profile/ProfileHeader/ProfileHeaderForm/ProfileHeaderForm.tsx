import React from "react";
import {createField, Input, Textarea} from "../../../../common/formsContols/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import Button from "../../../../common/Button/Button";
import style from './ProfileHeaderForm.module.css'
import {UserFromProfileResponseType} from "../../../../../Redux/profileReducer";
import {requiredField} from "../../../../../utils/validators";

type PropsType = {
    profile: UserFromProfileResponseType

}
type HeaderFormType = {
    aboutMe: string | null
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }

}


export type CurrentFieldsTypes = Extract<keyof HeaderFormType, string>

const ProfileHeaderForm: React.FC<InjectedFormProps<HeaderFormType, PropsType> & PropsType> = (props) => {

    const initialContacts = props.profile.contacts
    const keys = Object.keys ( initialContacts )
    const contactForms = keys.map ( (el, i) => {
        if (props.error) {
            const error = props.error.split ( ">" )[1].toString ().slice ( 0, -1 ).toLowerCase () === el.toLowerCase ()
            return <div className={ `${ style.contactItem } ${ error && style.error }` } key={ i }>
                <span>{ el } : </span> { createField<any> ( el, 'contacts.' + el, [], Input, {type: 'text'} ) }
            </div>
        } else {
            return <div className={ `${ style.contactItem }` } key={ i }>
                <span>{ el } : </span> { createField<any> ( el, 'contacts.' + el, [], Input, {type: 'text'} ) }
            </div>
        }
    } )

    return (
        <form className={ style.formFrame } onSubmit={ props.handleSubmit }>
            { props.error && props.error }
            <b>main</b>
            <div>{ createField<CurrentFieldsTypes> ( 'full name', 'fullName', [requiredField], Input, {type: 'text'} ) }</div>
            <div>{ createField<CurrentFieldsTypes> ( 'aboutMe', 'aboutMe', [requiredField], Textarea, {type: 'text'} ) }</div>
            <div
                className={ style.checkbox }>{ createField<CurrentFieldsTypes> ( undefined, 'lookingForAJob', [], Input, {type: 'checkbox'}, 'do you have a job?' ) }</div>
            <div>{ createField<CurrentFieldsTypes> ( 'lookingForAJobDescription', 'lookingForAJobDescription', [requiredField], Textarea, {type: 'text'} ) }</div>
            <strong>contacts</strong>
            { contactForms }

            <Button text={ 'save' } small/>
        </form>
    )

}


export default reduxForm<HeaderFormType, PropsType> ( {form: 'headerForm'} ) ( ProfileHeaderForm );
