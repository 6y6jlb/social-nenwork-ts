import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../formsContols/FormControls";
import {maxInputLength, requiredField} from "../../../../utils/validators";
import {connect} from "react-redux";


export type EditableSpanInputFormType = {
    input: string

}
//generic types for createField
export type CurrentFieldsTypes = Extract<keyof EditableSpanInputFormType, string>

type PropsType = {
}

//function inside component
const isMaxLengthMore20 = maxInputLength ( 20 )

const EditableSpanInputForm: React.FC<InjectedFormProps<EditableSpanInputFormType>> & PropsType = React.memo ( (props) => {
    return (
        <form onBlur={ props.handleSubmit }>
            { createField<CurrentFieldsTypes> ( 'input', 'input', [requiredField, isMaxLengthMore20], Input ) }
        </form>
    )
} )



export default reduxForm<EditableSpanInputFormType> ( {form: 'editableSpanInput',enableReinitialize : true} ) ( EditableSpanInputForm );