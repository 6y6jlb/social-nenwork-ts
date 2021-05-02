import style from './EditableSpan.module.css';
import {Component} from "react";

type EditableSpanPropsType = {
    item: string | null
}

class EditableSpan extends Component<EditableSpanPropsType> {
    state = {
        editMode: false,
        value: this.props.item
    };

    changeEditMode = (editMode: boolean) => {
        this.setState ( {
            editMode: editMode
        } )
    };

    render() {
        return (
            <div className={ style.editableSpan }>
                { !this.state.editMode
                    ? <span onClick={ () => this.changeEditMode ( true ) }>{ this.state.value || '' }</span>
                    : <input value={this.state.value||''} autoFocus={ true } onBlur={ () => this.changeEditMode ( false ) } type="text"/> }

            </div>
        )
    };
}

export default EditableSpan;