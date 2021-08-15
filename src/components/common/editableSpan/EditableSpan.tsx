import style from './EditableSpan.module.css';
import React, {ChangeEvent, PureComponent} from "react";
import EditableSpanInputForm, {EditableSpanInputFormType} from './EditableSpanInputForm/EditableSpanInputForm';
import {FormattedMessage} from "../FormattedMessage/FormattedMessage";

type EditableSpanPropsType = {
    item: string | null
    onChange: (item: string) => void
}

class EditableSpan extends PureComponent<EditableSpanPropsType> {
    state = {
        editMode: false,
        value: this.props.item
    };

    componentDidUpdate(prevProps: Readonly<EditableSpanPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.item !== this.props.item) {
            this.setState ( {
                value: this.props.item
            } )
        }
    }

    changeEditMode = (editMode: boolean) => {
        this.setState ( {
            editMode: editMode
        } )
        if (!editMode) {
            this.props.onChange ( this.state.value || '' )
        }
    };
    changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState ( {
            value: e.currentTarget.value
        } )
    }

    onSubmit = (data: EditableSpanInputFormType )=>{
        this.changeEditMode ( false )
        const {input} = data
        this.setState({
            value:input
        })
        this.props.onChange(input)



    }

    render() {
        return (
            <div className={ style.editableSpan }>
                { !this.state.editMode
                    ? <span onClick={ () => this.changeEditMode ( true ) }>{ this.props.item ||  <FormattedMessage _id={'editable.span.empty.tag'}/> }</span>
                    : <EditableSpanInputForm initialValues={{input:this.state.value || ''}}   onSubmit={this.onSubmit} />
                    /*<input onChange={ this.changeValue } value={ this.state.value || '' } autoFocus={ true }
                             onBlur={ () => this.changeEditMode ( false ) } type="text"/> */ //without redux form
                }
            </div>
        )
    };
}

export default EditableSpan;

