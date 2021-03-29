import React from "react";
import {connect} from "react-redux";
import FriendList from "./FriendListr";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";


function mapStateToProps(state:AppStateType) {
    return
}

function mapDispatchToProps(dispatch:Dispatch) {
    return
}

const FriendListContainer = connect(mapStateToProps,mapDispatchToProps)(FriendList)
export default FriendListContainer;