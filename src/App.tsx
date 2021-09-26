import React from 'react';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {actionsApp} from "./Redux/appReducer";
import {AppStateType} from "./Redux/reduxStore";
import Preloader from "./components/common/preloader/Preloader";


type AppPropsType = {
    initialize: () => void
    userId:number | null
    isInitialized:boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
            this.props.initialize ()
            document.title = "make love not war"
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        else {
        return (
                <div className="App">
                    <HeaderContainer/>
                    <MainWrapper/>
                    <Footer/>
                </div>
        );
    }
}}
type MapStateToPropsType = {
    isInitialized:boolean
    userId:number |null
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return {
        isInitialized:state.app.isInitialized,
        userId:state.profileReducer.profile.userId
    }
}

export default compose<React.ComponentType> (
    withRouter,
    connect ( mapStateToProps, {initialize:actionsApp.initializeSaga} ) ) ( App );

