import Login from "./Login";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/reduxStore";
import {loginTC, setUserTC} from "../../../Redux/auth-reducer";
import {compose} from "redux";
import React from "react";

type MapStateToPropsType ={

}

const mapStateToProps = (state:AppStateType)=> {
    return {

    }
}


export default compose <React.ComponentType> (
    connect(mapStateToProps,{loginTC})
)(Login);