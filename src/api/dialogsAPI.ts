import {instanceSamuraiAPI} from "./instance";


export interface IMessage {
    addedAt: string;
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

export interface IPhotos {
    small: null | string,
    large: null | string
};

export interface IDialogs {
    hasNewMessages: boolean;
    id: number;
    lastDialogActivityDate: Date;
    lastUserActivityDate: Date;
    newMessagesCount: number;
    photos: IPhotos;
    userName: string;
}

export const DialogsAPI = {
    startDialog: (id: number) => {
        return instanceSamuraiAPI.put<any> ( `dialogs/${ id }/` );
    },
    getDialogs: () => {
        return instanceSamuraiAPI.get<Array<IDialogs>> ( `dialogs/` );
    },
    getMessages: (id: number, count: number, page?: number) => {
        return instanceSamuraiAPI.get<IMessages> ( `dialogs/${ id }/messages?count=${ count }&page=${ page }` );
    },
    sendMessage: (id: number, message: string) => {
        return instanceSamuraiAPI.post<IPostMessage> ( `dialogs/${ id }/messages`, {body: message} );
    },
    deleteMessage: (messageId: number) => {
        return instanceSamuraiAPI.delete<IPostMessage> ( `dialogs/messages/${ messageId }` );
    },
    toSpamMessage: (messageId: number) => {
        return instanceSamuraiAPI.post<IPostMessage> ( `dialogs/messages/${ messageId }/spam` );
    },
    toViewedMessage: (messageId: number) => {
        return instanceSamuraiAPI.get<IPostMessage> ( `dialogs/messages/${ messageId }/viewed` );
    },

};