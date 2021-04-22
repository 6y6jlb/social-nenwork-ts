import React, {ChangeEvent} from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'


type SendMessageAreaFromCurrentDialogPropsType = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
    currentInputMessageString: string
    /*dispatch: (action: ActionsTypes) => void*/
}

export function SendMessageAreaFromCurrentDialog(props: SendMessageAreaFromCurrentDialogPropsType) {


    const addPost = () => {
        if (props.currentInputMessageString.trim ()) {
            props.onAddPost ();
            props.onPostChanger ( '' )
        }
    } // adding trimmed post with clearing input
    const inputChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        props.onPostChanger ( text );
    } //flax changer element

    return (
        <div className={ s.sendMessageAreaFromCurrentDialog }>
            <textarea className={ s.textArea }
                      onChange={ inputChanger }
                      onKeyPress={ (event) => {
                          if (event.ctrlKey) {
                              addPost ()
                          }}}
                      value={ props.currentInputMessageString }/>

            <button onClick={ addPost }>send message</button>

        </div>
    )
}