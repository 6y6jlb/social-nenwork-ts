import photo from "../../../../images/face.png";
import {MessagesArrayFromCurrentDialogType} from "../CurrentDialog/MessageFromCurrentDialog/MessagesFromCurrentDialog";

let initialState:Array<MessagesArrayFromCurrentDialogType>
beforeEach(()=>{
    initialState = [
            {id: 1, item: 'myMessage', enemy: true, avatarURL: photo},
            {id: 2, item: 'notMyMessage', enemy: false, avatarURL:  photo},
            {id: 3, item: 'myMessage', enemy: true, avatarURL:  photo},
            {id: 4, item: 'myMessage', enemy: true, avatarURL:  photo},
            {id: 5, item: 'notMyMessage', enemy: false, avatarURL:  photo},
            {id: 6, item: 'notMyMessage', enemy: false, avatarURL:  photo},
            {id: 7, item: 'myMessage', enemy: true, avatarURL:  photo},
            {id: 8, item: 'myMessage', enemy: true, avatarURL:  photo},
            {id: 9, item: 'notMyMessage', enemy: false, avatarURL:  photo},
            {id: 10, item: 'myMessage', enemy: true, avatarURL:  photo},
            {id: 11, item: 'notMyMessage', enemy: false, avatarURL:  photo},

        ]

})

test('test the messagesArray', ()=>{
const newState = initialState
    expect(newState.length).toBe(11)
    expect(newState[1].id).toBe(2)
})