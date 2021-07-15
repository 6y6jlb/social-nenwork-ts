//utils for followUnfollowThunk
import {Dispatch} from "redux";
import {call, put } from "redux-saga/effects";
import {actionsUsers} from "../Redux/usersReducer";

export const followUnfollowFlow = async (dispatch: Dispatch, userId: number, ActionCreator: Function, apiMethod: Function) => {
    dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, true ) )
    const response = await apiMethod ( userId )
    try {
        if (response.data.resultCode === 0) {
            dispatch ( ActionCreator ( userId ) )
            dispatch ( actionsUsers.sendRequestFromFollowUnFollowActionCreator ( userId, false ) )
        }
    } catch (e) {
        console.warn ( e )
    }
}



export const updateObjectInArray = <I extends Array<any>, P>(items: I, itemsProp: P, objPropName: string, newObjProps: object) => {
    items.map ( user => {
        if (user[objPropName] === itemsProp) {
            return {...user, ...newObjProps}
        } else {
            return user
        }
    } )
}