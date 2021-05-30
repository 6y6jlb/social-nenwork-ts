import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";


//какаято хуйня, хз как пропсы пробросить
type PropsType = {
    item:string
}
export type EditableSpanFormType = {
    input: string
}
export type CurrentFieldEditableSpanTypes = Extract<keyof EditableSpanFormType, string>
type AllEditableSpanFormTypes=  PropsType & InjectedFormProps<EditableSpanFormType & PropsType>

const EditableSpanForm:React.FC<AllEditableSpanFormTypes>  = (props ) => {
   const item= props.item
    return (

        <form>
            <Field name="firstName" component="input" type="text" onBlur={()=>console.log('tesst')}/>
       {/* { createField<CurrentFieldEditableSpanTypes> ( 'text here plz', 'input', [], Input, {}, ) }*/}
    </form>
    )
}
//@ts-ignore
export default reduxForm<EditableSpanFormType> ( {form: 'editableSpan'}) (EditableSpanForm);