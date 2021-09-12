import {call, put, takeLatest} from 'redux-saga/effects';
import {UsersAPI} from "../api/usersAPI";
import {actionsUsers} from "../Redux/usersReducer";
import {USERS} from "../Redux/consts";
import {ActionsTypes} from "../Redux/reduxStore";

//workers

//getusers
function* getUsersSagaWorker({type, payload}: {
    type: ActionsTypes,
    payload: { pageSize: number, currentPage: number }
}) {

    yield put ( actionsUsers.changeIsFetchingActionCreator ( true ) )
    yield put ( actionsUsers.setCurrentPage ( payload.currentPage ) )
    try {
        const response = yield call ( UsersAPI.getUsers, payload.pageSize, payload.currentPage );
        yield put ( actionsUsers.changeTotalCountActionCreator ( response.data.totalCount ) );
        yield put ( actionsUsers.addMoreUsersActionCreator ( response.data.items ) );
    } catch (e) {
        throw new Error ( e );
    } finally {
        yield put ( actionsUsers.changeIsFetchingActionCreator ( false ) )
    }
}



//follow
export function* followSagaWorker({type, payload}: { type: ActionsTypes, payload: { userId: number } }) {
    yield put ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( payload.userId, true ) )
    const response = yield call ( UsersAPI.followUser, payload.userId )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsUsers.followActionCreator ( payload.userId ) )
            yield put ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( payload.userId, false ) )
        }
    } catch (e) {
        //throw new Error(e)
        console.warn ( e )
    }

}
//unfollow
export function* unfollowWorker({type, payload}: { type: ActionsTypes, payload: { userId: number } }) {

    yield put ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( payload.userId, true ) )
    const response = yield call ( UsersAPI.unFollowUser, payload.userId )
    try {
        if (response.data.resultCode === 0) {
            yield put ( actionsUsers.unFollowActionCreator ( payload.userId ) )
            yield put ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( payload.userId, false ) )
        }
    } catch (e) {
        //throw new Error(e)
        console.warn ( e )
    }

}



//watchers
export function* getUsersSagaWatcher() {
    yield takeLatest ( USERS.GET_USERS_SAGA, getUsersSagaWorker );
}
export function* followSagaWatcher() {
    yield takeLatest ( USERS.FOLLOW_SAGA, followSagaWorker );
}
export function* unfollowSagaWatcher() {
    yield takeLatest ( USERS.UNFOLLOW_SAGA, unfollowWorker );
}


