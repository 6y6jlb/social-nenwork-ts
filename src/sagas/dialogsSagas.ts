import {call, put, takeLatest} from "redux-saga/effects";
import {
    DELETE_MESSAGE_SAGA,
    GET_DIALOGS_SAGA,
    GET_MESSAGES_SAGA,
    IS_MESSAGE_VIEWED_SAGA,
    POST_MESSAGE_SAGA,
    START_DIALOG_SAGA,
    TO_SPAM_MESSAGE_SAGA,
} from "../Redux/consts";
import {ActionsTypes} from "../Redux/reduxStore";
import {DialogsAPI} from "../api/dialogsAPI";
import {actionsDialogs} from "../Redux/dialogsReducer";


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

export function* getMessagesSagaWorker({type, payload}: { type: ActionsTypes, payload: { id: number ,count:number} }) {
    try {
        const response = yield call ( DialogsAPI.getMessages, payload.id ,payload.count);
        const {items} = response.data;
        yield put ( actionsDialogs.setMessages (items) );
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
        debugger
        yield put ( actionsDialogs.getMessages ( payload.id ) );
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};
export function* toSpamMessageSagaWorker({
                                             type,
                                             payload,
                                         }: { type: ActionsTypes, payload: {id:number, messageId: number } }) {


    try {
        const response = yield call ( DialogsAPI.toSpamMessage, payload.messageId );
        debugger
        yield put ( actionsDialogs.getMessages ( payload.id ) );
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};
export function* toViewedMessageSagaWorker({
                                             type,
                                             payload,
                                         }: { type: ActionsTypes, payload: {id:number, messageId: number } }) {


    try {
        const response = yield call ( DialogsAPI.toViewedMessage, payload.messageId );
        if (response.data) {
            yield put ( actionsDialogs.getMessages ( payload.id ) );
        }
        else {
            return;
        }
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};

//watchers

export function* deleteMessageSagaWatcher() {
    yield takeLatest ( DELETE_MESSAGE_SAGA, deleteMessageSagaWorker );
};
export function* toViewedSagaWatcher() {
    yield takeLatest ( IS_MESSAGE_VIEWED_SAGA, toViewedMessageSagaWorker );
};

export function* toSpamMessageSagaWatcher() {
    yield takeLatest ( TO_SPAM_MESSAGE_SAGA, toSpamMessageSagaWorker );
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
