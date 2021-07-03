import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxInputLength, requiredField} from "../../../../utils/validators";


export type EditableSpanInputFormType = {
    input: string

}
//generic types for createField
export type CurrentFieldsTypes = Extract<keyof EditableSpanInputFormType, string>

type PropsType = {}

//function inside component
const isMaxLengthMore20 = maxInputLength ( 20 )

const EditableSpanInputForm: React.FC<InjectedFormProps<EditableSpanInputFormType>> & PropsType = React.memo ( (props) => {

    return (
        <form onBlur={ props.handleSubmit }>
            <div>
                <label htmlFor="input">
                    <Field autoFocus name="input" component="input" validate={ [] }
                           type="text"/></label>
            </div>

            {/* { createField<CurrentFieldsTypes> ( 'input', 'input', [requiredField, isMaxLengthMore20], Input ) }*/ }
        </form>
    )
} )


export default reduxForm<EditableSpanInputFormType> ( {
    form: 'editableSpanInput',
    enableReinitialize: true
} ) ( EditableSpanInputForm );