import {connect} from "react-redux";
import EditableSpan from "../../../../common/editableSpan/EditableSpan";
import {getStatusTC, updateStatusTC} from "../../../../../Redux/profileReducer";
import {AppStateType} from "../../../../../Redux/reduxStore";
import {compose} from "redux";
import React from "react";


type MapStateToPropsType={
    item:string
    userID:number|null
}

const EditableSpanWithAPI = (props:any)=>{
    props.getStatus(props.userID)
    const onChange=(item:string)=>{
        props.updateStatus(item)
    }
    return <EditableSpan item={props.item} onChange={onChange}/>
}

function mapStateToProps(state: AppStateType):MapStateToPropsType {
    return {
        item: state.profileReducer.status,
        userID:state.profileReducer.profile.userId
    };
}

export default compose<React.ComponentType>(
    connect ( mapStateToProps, {getStatus:getStatusTC,updateStatus:updateStatusTC} )
)(EditableSpanWithAPI)