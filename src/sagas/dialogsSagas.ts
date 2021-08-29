import {call, put, select, takeLatest} from "redux-saga/effects";
import {DIALOGS} from "../Redux/consts";
import {ActionsTypes} from "../Redux/reduxStore";
import {DialogsAPI} from "../api/dialogsAPI";
import {actionsDialogs} from "../Redux/dialogsReducer";
import {messagesPageSelector, messagesPageSizeSelector} from "../utils/selectors/dialogs-selectors";


//workers
export function* startDialogSagaWorker({type, payload}: { type: ActionsTypes, payload: { id: number } }) {
    yield put(actionsDialogs.setIsFetching(true))
    //yield put(actionsDialogs.toDialogSaga(payload.id))
    try {
        const response = yield call ( DialogsAPI.startDialog, payload.id );
    } catch (e) {
        console.log ( e );
    } finally {
        yield put(actionsDialogs.setIsFetching(false))
    }
};

export function* getDialogsSagaWorker({type, payload}: { type: ActionsTypes, payload: {} }) {
    yield put(actionsDialogs.setIsFetching(true))
    try {
        const response = yield call ( DialogsAPI.getDialogs );
        const {data} = response;
        yield put ( actionsDialogs.setDialogs ( data ) );
    } catch (e) {
        console.warn ( e );
    } finally {
        yield put(actionsDialogs.setIsFetching(false))
    }
};

export function* getMessagesSagaWorker({
                                           type,
                                           payload,
                                       }: { type: ActionsTypes, payload: { id: number } }) {
    yield put(actionsDialogs.setIsFetching(true))
    const count = yield select ( messagesPageSizeSelector );
    const page = yield select ( messagesPageSelector );

    try {
        const response = yield call ( DialogsAPI.getMessages, payload.id, count, page );
        const {items,totalCount} = response.data;
        yield put ( actionsDialogs.setMessages ( items,totalCount ) );
    } catch (e) {
        console.warn ( e );
    } finally {
        yield put(actionsDialogs.setIsFetching(false))
    }
};

export function* postMessageSagaWorker({
                                           type,
                                           payload,
                                       }: { type: ActionsTypes, payload: { id: number, message: string } }) {
    yield put(actionsDialogs.setIsFetching(true))
    try {
        const response = yield call ( DialogsAPI.sendMessage, payload.id, payload.message );
        yield put ( actionsDialogs.getMessages ( payload.id ) );
    } catch (e) {
        console.warn ( e );
    } finally {
        yield put(actionsDialogs.setIsFetching(false))
    }
};

export function* deleteMessageSagaWorker({
                                             type,
                                             payload,
                                         }: { type: ActionsTypes, payload: { id: number, messageId: number } }) {
    yield put(actionsDialogs.setIsFetching(true))
    try {
        const response = yield call ( DialogsAPI.deleteMessage, payload.messageId );
        debugger
        yield put ( actionsDialogs.getMessages ( payload.id ) );
    } catch (e) {
        console.warn ( e );
    } finally {
        yield put(actionsDialogs.setIsFetching(false))
    }
};

export function* toSpamMessageSagaWorker({
                                             type,
                                             payload,
                                         }: { type: ActionsTypes, payload: { id: number, messageId: number } }) {
    yield put(actionsDialogs.setIsFetching(true))
    try {
        const response = yield call ( DialogsAPI.toSpamMessage, payload.messageId );
        debugger
        yield put ( actionsDialogs.getMessages ( payload.id ) );
    } catch (e) {
        console.warn ( e );
    } finally {
        yield put(actionsDialogs.setIsFetching(false))
    }
};

export function* toViewedMessageSagaWorker({
                                               type,
                                               payload,
                                           }: { type: ActionsTypes, payload: { id: number, messageId: number } }) {
    try {
        const response = yield call ( DialogsAPI.toViewedMessage, payload.messageId );
        if (response.data) {
            yield put ( actionsDialogs.getMessages ( payload.id ) );
        } else {
            return;
        }
    } catch (e) {
        console.warn ( e );
    } finally {
    }
};

//watchers

export function* deleteMessageSagaWatcher() {
    yield takeLatest ( DIALOGS.DELETE_MESSAGE_SAGA, deleteMessageSagaWorker );
};

export function* toViewedSagaWatcher() {
    yield takeLatest ( DIALOGS.IS_MESSAGE_VIEWED_SAGA, toViewedMessageSagaWorker );
};

export function* toSpamMessageSagaWatcher() {
    yield takeLatest ( DIALOGS.TO_SPAM_MESSAGE_SAGA, toSpamMessageSagaWorker );
};

export function* postMessageSagaWatcher() {
    yield takeLatest ( DIALOGS.POST_MESSAGE_SAGA, postMessageSagaWorker );
};

export function* startDialogSagaWatcher() {
    yield takeLatest ( DIALOGS.START_DIALOG_SAGA, startDialogSagaWorker );
};

export function* getMessagesSagaWatcher() {
    yield takeLatest ( DIALOGS.GET_MESSAGES_SAGA, getMessagesSagaWorker );
};

export function* getDialogsSagaWatcher() {
    yield takeLatest ( DIALOGS.GET_DIALOGS_SAGA, getDialogsSagaWorker );
};
