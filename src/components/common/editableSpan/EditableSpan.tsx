import style from './EditableSpan.module.css';
import {ChangeEvent, Component} from "react";

type EditableSpanPropsType = {
    item: string | null
    onChange: (item: string) => void
}

class EditableSpan extends Component<EditableSpanPropsType> {
    state = {
        editMode: false,
        value: this.props.item
    };

    componentDidMount() {

    }

    componentDidUpdate(prevProps: Readonly<EditableSpanPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log ( this.state.value + ' state')
        console.log ( this.props.item + ' props')
    }

    changeEditMode = (editMode: boolean) => {

        this.setState ( {
            editMode: editMode
        } )
        if (!editMode){
            this.props.onChange ( this.state.value || '' )
        }

    };
    changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState ( {
            value: e.currentTarget.value
        } )

    }

    render() {
        return (
            <div className={ style.editableSpan }>
                { !this.state.editMode
                    ? <span onClick={ () => this.changeEditMode ( true ) }>{ this.props.item || '☺☺☺☺☺' }</span>
                    : <input onChange={ this.changeValue } value={ this.state.value || '' } autoFocus={ true }
                             onBlur={ () => this.changeEditMode ( false ) } type="text"/> }

            </div>
        )
    };
}

export default EditableSpan;