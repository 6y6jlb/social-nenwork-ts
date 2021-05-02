import {applyMiddleware,combineReducers, createStore,compose} from 'redux'
import profileReducer, {
    addPost,
    changeIsFetchingFromProfile,
    changePostInput,
    setUserProfile
} from "./profileReducer";
import dialogsReducer, {addDialogsMessage, changeDialogsInput} from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import usersReducer, {addMoreUsersActionCreator, changeCurrentPageActionCreator,
    changeIsFetchingActionCreator, changeTotalCountActionCreator,
    followActionCreator, sendRequestFromFollowUnFollowActionCreator, unFollowActionCreator} from "./usersReducer";
import authReducer, {setUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof addDialogsMessage>
    | ReturnType<typeof changePostInput>
    | ReturnType<typeof changeDialogsInput>
    | ReturnType<typeof followActionCreator>
    | ReturnType<typeof unFollowActionCreator>
    | ReturnType<typeof addMoreUsersActionCreator>
    | ReturnType<typeof changeCurrentPageActionCreator>
    | ReturnType<typeof changeTotalCountActionCreator>
    | ReturnType<typeof changeIsFetchingActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof sendRequestFromFollowUnFollowActionCreator>
    | ReturnType<typeof changeIsFetchingFromProfile>


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
