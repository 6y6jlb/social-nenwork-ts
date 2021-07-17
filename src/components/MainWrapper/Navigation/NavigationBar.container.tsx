import React, {PureComponent} from 'react';
import {NavigationBar} from "./NavigationBar";
import {connect} from "react-redux";
import {FriendIconsFromNAvBArType, NavLinkBarFromNAvBArType} from "../../../Redux/navBarReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import {Dispatch} from "redux";
import selectors from '../../../utils/selectors';



type MapStateToPropsType = {
    friendsIcons:Array<FriendIconsFromNAvBArType>
    navLinkBar: Array<NavLinkBarFromNAvBArType>
    profileName:string|null
}
type MapDispatchToProps = {}
type NavigationBarAPIContainerPropsType = MapStateToPropsType&MapDispatchToProps




class NavigationBarAPIContainer extends PureComponent<NavigationBarAPIContainerPropsType> {
    render() {
        return <NavigationBar navLinkBar={this.props.navLinkBar} friendsIcons={this.props.friendsIcons} profileName={this.props.profileName}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        navLinkBar: selectors.navSelectors.getNavLinkBar(state),
        friendsIcons: selectors.navSelectors.getFriendsIcons(state),
        profileName:selectors.authSelectors.getProfileName(state)
    }
}


const NavigationBarContainer = connect ( mapStateToProps, {} ) ( NavigationBarAPIContainer )
export default NavigationBarContainer;
