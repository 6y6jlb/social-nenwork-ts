import photo from "../images/face.png";
import dialogsReducer from "./dialogsReducer";

test('dialog reducer and action test', (() => {
    const state = {
        currentInputMessageString: 'test',
        messages: [
            {id: 1, item: 'myMessage', self: true, avatarURL: photo},
            {id: 2, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 3, item: 'myMessage', self: true, avatarURL: photo},
            {id: 4, item: 'myMessage', self: true, avatarURL: photo},
            {id: 5, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 6, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 7, item: 'myMessage', self: true, avatarURL: photo},
            {id: 8, item: 'myMessage', self: true, avatarURL: photo},
            {id: 9, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 10, item: 'myMessage', self: true, avatarURL: photo},
            {id: 11, item: 'notMyMessage', self: false, avatarURL: photo},
        ]
    }
    const actionAddMessage={
        type: 'ADD-DIALOGS-MESSAGE',
        self:true

    }

    const actionChangeMessage={
        type: 'CHANGE-DIALOGS-INPUT-TEXT',
        item: 'stringTest'

    }

    const testDialogsReducerAdd = dialogsReducer(state,actionAddMessage)
    const testDialogsReducerChange = dialogsReducer(state,actionChangeMessage)


    expect(testDialogsReducerAdd.messages.length).toBe(12)
    expect(testDialogsReducerAdd.messages[11]).toStrictEqual( {id: 12, item: 'test', self: true, avatarURL: photo})
    expect(testDialogsReducerAdd.messages[12]).toBe( undefined)
    expect(testDialogsReducerAdd.currentInputMessageString).toStrictEqual('test')


    expect(testDialogsReducerChange.currentInputMessageString).toStrictEqual('stringTest')
    expect(testDialogsReducerChange.currentInputMessageString.length).toBe(10)



}))
