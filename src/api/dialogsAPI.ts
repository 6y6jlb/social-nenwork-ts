import {instanceSamuraiAPI} from "./instance";


export interface IMessage {
    addedAt: Date;
    body: string;
    deletedByRecipient: boolean;
    deletedBySender: boolean;
    distributionId: any;
    id: string;
    isSpam: boolean;
    recipientId: number;
    recipientName: string;
    senderId: number;
    senderName: string;
    translatedBody: any;
    viewed: boolean;
}

export interface IPostMessage {
    fieldsError: Array<any>;
    items: Array<IMessage>;
    messages: Array<any>;
    resultCode: number;
}

export interface IMessages {
    error: boolean;
    data: { message: IMessage };
    totalCount: number;
}

export interface IDialogs {
    hasNewMessages: boolean;
    id: number;
    lastDialogActivityDate: Date;
    lastUserActivityDate: Date;
    newMessagesCount: number;
    photos: { small: null | string, large: null | string };
    userName: string;
}

export const DialogsAPI = {
    startDialog: (id: number) => {
        return instanceSamuraiAPI.put<any> ( `dialogs/${ id }/` );
    },
    getDialogs: () => {
        return instanceSamuraiAPI.get<Array<IDialogs>> ( `dialogs/` );
    },
    getMessages: (id: number) => {
        return instanceSamuraiAPI.get<IMessages> ( `dialogs/${ id }/messages` );
    },
    sendMessage: (id: number, message: string) => {
        return instanceSamuraiAPI.post<IPostMessage> ( `dialogs/${ id }/messages`, {body: message} );
    },
    deleteMessage: (messageId: number) => {
        return instanceSamuraiAPI.delete<IPostMessage> ( `dialogs/messages/${ messageId }` );
    },

};