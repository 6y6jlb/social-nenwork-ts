import {call, put, select, takeLatest} from "redux-saga/effects";
import {
    DELETE_MESSAGE_SAGA,
    GET_DIALOGS_SAGA,
    GET_MESSAGES_SAGA,
    POST_MESSAGE_SAGA,
    START_DIALOG_SAGA,
} from "../Redux/consts";
import {ActionsTypes} from "../Redux/reduxStore";
import {DialogsAPI, IMessage} from "../api/dialogsAPI";
import {actionsDialogs} from "../Redux/dialogsReducer";
import {getMyLoginId} from "../utils/selectors/auth-selectors";


//workers
export function* startDialogSagaWorker({type, payload}: { type: ActionsTypes, payload: { id: number } }) {
    //yield put(actionsDialogs.toDialogSaga(payload.id))
    try {
        const response = yield call ( DialogsAPI.startDialog, payload.id );
    } catch (e) {
        console.log ( e );
    } finally {
    }
};

export function* getDialogsSagaWorker({type, payload}: { type: ActionsTypes, payload: {} }) {
    try {
        const response = yield call ( DialogsAPI.getDialogs );
        const {data} = response;
        yield put ( actionsDialogs.setDialogs ( data ) );
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};

export function* getMessagesSagaWorker({type, payload}: { type: ActionsTypes, payload: { id: number } }) {
    try {
        const response = yield call ( DialogsAPI.getMessages, payload.id );

        const mes:IMessage = {
            id:'123',
            body:'sdfsfd',
            addedAt:"2021-08-26T19:05:47.5",
            deletedByRecipient:false,
            deletedBySender:false,
            distributionId:'asd121',
            isSpam:false,recipientId:123123,
            recipientName:"asdasd",
            senderName:"asdasd",
            senderId:1233,
            translatedBody:false,
            viewed:false

        }
        const {items} = response.data;
        yield put ( actionsDialogs.setMessages (items.concat(mes) ) );
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};

export function* postMessageSagaWorker({
                                           type,
                                           payload,
                                       }: { type: ActionsTypes, payload: { id: number, message: string } }) {

    try {
        const response = yield call ( DialogsAPI.sendMessage, payload.id, payload.message );
        yield put ( actionsDialogs.getMessages ( payload.id ) );
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};

export function* deleteMessageSagaWorker({
                                             type,
                                             payload,
                                         }: { type: ActionsTypes, payload: {id:number, messageId: number } }) {


    try {
        const response = yield call ( DialogsAPI.deleteMessage, payload.messageId );
        yield put ( actionsDialogs.getMessages ( payload.id ) );
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};

//watchers

export function* deleteMessageSagaWatcher() {
    yield takeLatest ( DELETE_MESSAGE_SAGA, deleteMessageSagaWorker );
};

export function* postMessageSagaWatcher() {
    yield takeLatest ( POST_MESSAGE_SAGA, postMessageSagaWorker );
};

export function* startDialogSagaWatcher() {
    yield takeLatest ( START_DIALOG_SAGA, startDialogSagaWorker );
};

export function* getMessagesSagaWatcher() {
    yield takeLatest ( GET_MESSAGES_SAGA, getMessagesSagaWorker );
};

export function* getDialogsSagaWatcher() {
    yield takeLatest ( GET_DIALOGS_SAGA, getDialogsSagaWorker );
};
