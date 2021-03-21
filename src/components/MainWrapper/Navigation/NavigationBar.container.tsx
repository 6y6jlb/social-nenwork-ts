import React from 'react';
import {NavigationBar} from "./NavigationBar";
import {connect} from "react-redux";
import {InitialStateNavBarType} from "../../../Redux/navBarReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";


/*export function NavigationBarContainer() {
return (
    <StoreContext.Consumer>
        {store=>
            {
                const state = store.getState()
                return <NavigationBar navLinkBar={state.navLinkBar}
                                      friendsIcons={state.friendsIcons}/>
            }
        }
    </StoreContext.Consumer>
)
}*/

type MapStateToPropsType = InitialStateNavBarType
type MapDispatchToProps = {}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        navLinkBar: state.navBarReducer.navLinkBar,
        friendsIcons: state.navBarReducer.friendsIcons
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {}
}

const NavigationBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
export default NavigationBarContainer;
