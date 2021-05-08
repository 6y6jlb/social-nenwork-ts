import React, {ChangeEvent} from "react";
import s from './SendMessageAreaFromCurrentDialog.module.css'
import TextArea, {AddMessageProfileFormType} from "../../../../common/componentsForForm/textArea";


type SendMessageAreaFromCurrentDialogPropsType = {
    onAddPost: (self: boolean,item:string) => void
    onPostChanger: (item: string) => void
    currentInputMessageString: string

}

export function SendMessageAreaFromCurrentDialog(props: SendMessageAreaFromCurrentDialogPropsType) {


   /* const addPost = (self:boolean) => {
        if (props.currentInputMessageString.trim ()) {
            props.onAddPost (self);
            props.onPostChanger ( '' )
        }
    } // adding trimmed post with clearing input
    const inputChanger = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        props.onPostChanger ( text );
    }*/
    const onSubmit = (formData:AddMessageProfileFormType)=>{
        const message = formData.newMessageBody.trim();
        if (message) {
            props.onAddPost (true,message)
        }
    }


    return (
        <div className={ s.sendMessageAreaFromCurrentDialog }>
            <TextArea onSubmit={onSubmit}/>
            {/*<textarea className={ s.textArea }
                      onChange={ inputChanger }
                      onKeyPress={ (event) => {
                          if (event.key === 'Enter' && event.shiftKey) {
                              addPost (true)
                          }}}
                      value={ props.currentInputMessageString }/>

            <button onClick={()=> addPost(true) }>send message</button>*/}

        </div>
    )
}