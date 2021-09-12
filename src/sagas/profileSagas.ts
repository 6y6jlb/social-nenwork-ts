import {ActionsTypes} from "../Redux/reduxStore";
import {call, put, takeLatest} from "redux-saga/effects";
import {PROFILE} from "../Redux/consts";
import {ProfileAPI} from "../api/profileAPI";
import {actionsProfile, UserFromProfileResponseType} from "../Redux/profileReducer";
import {stopSubmit} from "redux-form";
import {actionsUsers} from "../Redux/usersReducer";
import {UsersAPI} from "../api/usersAPI";

//workers
function* getStatusSagaWorker({type, payload}: { type: ActionsTypes, payload: { userID: number } }) {
    if (payload.userID) {
        try {
            const response = yield call ( ProfileAPI.getStatus, payload.userID )
            yield put ( actionsProfile.setStatusAC ( response.data ) )
        } catch (e) {
            throw new Error ( e )
        }
    }
}

function* updateStatusFromProfileSagaWorker({type, payload}: { type: ActionsTypes, payload: { item: string } }) {
    const response = yield call ( ProfileAPI.sendStatus, payload.item )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsProfile.setStatusAC ( payload.item ) )
        }
    } catch (e) {
        throw new Error ( e )
    }
}

function* savePhotoFromProfileSagaWorker({type, payload}: { type: ActionsTypes, payload: { file: any } }) {
    const response = yield call ( ProfileAPI.savePhoto, payload.file )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsProfile.savePhotosSuccess ( response.data.data.photos ) )

        }
    } catch (e) {
        throw new Error ( e )
    }
}

function* saveNewProfileSagaWorker({type, payload}
                                       : {
    type: ActionsTypes, payload: {
        model: UserFromProfileResponseType, userId: number
    }
}) {
    const response = yield call ( ProfileAPI.setNewProfile, payload.model )
    try {
        if (response.data.resultCode === 0) {

            if (payload.userId) {
                yield  put ( actionsProfile.getProfileSaga ( payload.userId ) )
                yield put ( actionsProfile.openSet ( false ) )

            }
        } else {
            yield put ( stopSubmit ( 'headerForm', {_error: response.data.messages} ) )
            yield Promise.reject ( response.data.messages )
        }
    } catch (e) {
        throw new Error ( e )
    }
}

function* getProfileSagaWorker({
                                   type,
                                   payload
                               }: { type: ActionsTypes, payload: { userIdForURL: number } }) {
    if (payload.userIdForURL) {
        yield put ( actionsProfile.changeIsFetchingFromProfile ( true ) )
        const response = yield call ( ProfileAPI.setUserProfile, payload.userIdForURL )
        try {
            yield put ( actionsProfile.changeIsFetchingFromProfile ( false ) )
            yield put ( actionsProfile.setUserProfile ( response.data ) )
        } catch (e) {
            throw new Error ( e )
        }
    }
}

//check
export function* friendCheckWorker({type, payload}: { type: ActionsTypes, payload: { userId: number } }) {
    yield put ( actionsProfile.friendCheckSaga ( payload.userId ) )
    const response = yield call ( UsersAPI.friendCheck, payload.userId )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsProfile.setIsFriend ( response.data) )

        }
    } catch (e) {
        //throw new Error(e)
        console.warn ( e )
    }
}

//check
export function* setFriendlyStatus({type, payload}: { type: ActionsTypes, payload: { userId: number,isFriend:boolean } }) {
    const {isFriend,userId} = payload
    let response;
    if (isFriend) {
        debugger
       response = yield call ( UsersAPI.unFollowUser, payload.userId );
        try {
            if (response.data.resultCode === 0) {
                debugger
                yield put ( actionsProfile.setIsFriend ( response.data) )
            }
        } catch (e) {
            //throw new Error(e)
            console.warn ( e )
        }
    } else {
        response = yield call ( UsersAPI.followUser, payload.userId );
        try {
            if (response.data.resultCode === 0) {
                debugger
                yield put ( actionsProfile.setIsFriend ( response.data) )
            }
        } catch (e) {
            //throw new Error(e)
            console.warn ( e )
        }
    }

}

//watchers
export function* getStatusSagaWatcher() {
    yield takeLatest ( PROFILE.GET_STATUS_FROM_PROFILE_SAGA, getStatusSagaWorker )
}
export function* setFriendlySagaWatcher() {
    yield takeLatest ( PROFILE.SET_FRIENDLY_FROM_PROFILE_SAGA, setFriendlyStatus )
}
export function* friendCheckSagaWatcher() {
    yield takeLatest ( PROFILE.IS_FRIEND_PROFILE, friendCheckWorker )
}

export function* updateStatusFromProfileSagaWatcher() {
    yield takeLatest ( PROFILE.UPDATE_STATUS_FROM_PROFILE_SAGA, updateStatusFromProfileSagaWorker )
}

export function* savePhotoFromProfileSagaWatcher() {
    yield takeLatest ( PROFILE.SAVE_PHOTO_FROM_PROFILE_SAGA, savePhotoFromProfileSagaWorker )
}

export function* saveNewProfileSagaWatcher() {
    yield takeLatest ( PROFILE.SAVE_NEW_PROFILE_SAGA, saveNewProfileSagaWorker )
}

export function* getProfileSagaWatcher() {
    yield takeLatest ( PROFILE.GET_PROFILE_SAGA, getProfileSagaWorker )
}
