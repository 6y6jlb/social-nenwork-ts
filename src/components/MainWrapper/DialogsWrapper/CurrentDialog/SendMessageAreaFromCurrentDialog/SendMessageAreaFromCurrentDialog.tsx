import React, {ChangeEvent} from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'


type SendMessageAreaFromCurrentDialogPropsType = {
    onAddPost: (self:boolean) => void
    onPostChanger: (item: string) => void
    currentInputMessageString: string
    /*dispatch: (action: ActionsTypes) => void*/
}

export function SendMessageAreaFromCurrentDialog(props: SendMessageAreaFromCurrentDialogPropsType) {


    const addPost = (self:boolean) => {
        if (props.currentInputMessageString.trim ()) {
            props.onAddPost (self);
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
                              addPost (true)
                          }}}
                      value={ props.currentInputMessageString }/>

            <button onClick={()=> addPost(true) }>send message</button>

        </div>
    )
}