import {applyMiddleware,combineReducers, createStore,compose} from 'redux'
import profileReducer, {
    addPostActionCreator,
    changeIsFetchingFromProfileActionCreator,
    changePostInputActionCreator,
    setUserProfileActionCreator
} from "./profileReducer";
import dialogsReducer, {addDialogsMessageActionCreator, changeDialogsInputActionCreator} from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer, {addMoreUsersActionCreator, changeCurrentPageActionCreator,
    changeIsFetchingActionCreator, changeTotalCountActionCreator,
    followActionCreator, sendRequestFromFollowUnFollowActionCreator, unFollowActionCreator} from "./usersReducer";
import authReducer, {setUserDataActionCreator} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addDialogsMessageActionCreator>
    | ReturnType<typeof changePostInputActionCreator>
    | ReturnType<typeof changeDialogsInputActionCreator>
    | ReturnType<typeof followActionCreator>
    | ReturnType<typeof unFollowActionCreator>
    | ReturnType<typeof addMoreUsersActionCreator>
    | ReturnType<typeof changeCurrentPageActionCreator>
    | ReturnType<typeof changeTotalCountActionCreator>
    | ReturnType<typeof changeIsFetchingActionCreator>
    | ReturnType<typeof setUserProfileActionCreator>
    | ReturnType<typeof setUserDataActionCreator>
    | ReturnType<typeof sendRequestFromFollowUnFollowActionCreator>
    | ReturnType<typeof changeIsFetchingFromProfileActionCreator>


const rootReducer = combineReducers ( {
    profileReducer,
    dialogsReducer,
    navBarReducer,
    usersReducer,
    auth:authReducer

} );


export type RootReducersType = typeof rootReducer
export type AppStateType = ReturnType<RootReducersType>

let store = createStore ( rootReducer,applyMiddleware(thunkMiddleware));
//(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(), need to fix

export default store;
