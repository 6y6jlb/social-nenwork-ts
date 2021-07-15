import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {UsersAPI} from "../api/usersAPI";
import {actionsUsers} from "../Redux/usersReducer";
import {GET_USERS_SAGA} from "../Redux/consts";
import {ActionsTypes} from "../Redux/reduxStore";



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


function* getUsersSagaWatcher() {

    yield takeEvery ( GET_USERS_SAGA, getUsersSagaWorker );
}


export default getUsersSagaWatcher;