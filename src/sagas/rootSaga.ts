import {all} from "redux-saga/effects";
import {initializeSagaWatcher} from "./appSagas";
import {followSagaWatcher, getUsersSagaWatcher, unfollowSagaWatcher} from "./usersSagas";
import {
    friendCheckSagaWatcher,
    getProfileSagaWatcher,
    getStatusSagaWatcher,
    saveNewProfileSagaWatcher,
    savePhotoFromProfileSagaWatcher,
    setFriendlySagaWatcher,
    updateStatusFromProfileSagaWatcher,
} from "./profileSagas";
import {getCaptchaSagaWatcher, loginSagaWatcher, logoutSagaWatcher, setUserFromAuthSagaWatcher} from "./authSagas";
import {getNewsSagaWatcher} from "./newsSagas";
import {
    deleteMessageSagaWatcher,
    getDialogsSagaWatcher,
    getMessagesSagaWatcher,
    postMessageSagaWatcher,
    startDialogSagaWatcher,
    toSpamMessageSagaWatcher,
    toViewedSagaWatcher,
} from "./dialogsSagas";


export default function* rootSaga() {
    yield all ( [
        getUsersSagaWatcher (),
        followSagaWatcher (),
        unfollowSagaWatcher (),
        initializeSagaWatcher (),
        getStatusSagaWatcher (),
        updateStatusFromProfileSagaWatcher (),
        savePhotoFromProfileSagaWatcher (),
        saveNewProfileSagaWatcher (),
        getProfileSagaWatcher (),
        getCaptchaSagaWatcher (),
        setUserFromAuthSagaWatcher (),
        loginSagaWatcher (),
        logoutSagaWatcher (),
        getNewsSagaWatcher (),
        startDialogSagaWatcher (),
        getDialogsSagaWatcher (),
        getMessagesSagaWatcher (),
        postMessageSagaWatcher (),
        deleteMessageSagaWatcher (),
        toViewedSagaWatcher (),
        toSpamMessageSagaWatcher (),
        setFriendlySagaWatcher (),
        friendCheckSagaWatcher (),
    ] );
}