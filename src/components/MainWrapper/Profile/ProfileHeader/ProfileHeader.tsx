import React from "react";
import s from "../ProfileWrapper.module.css";
import {InitialStateProfileType} from "../../../../Redux/profileReducer";
import noJob from '../../../../images/noJob.jpg'
import job from '../../../../images/112.jpg'
import emptyPhoto from '../../../../images/emptyUser.png'
import EditableSpan from "../../../common/editableSpan/EditableSpan";


type ProfileHeaderPropsType = {
    profileWrapperObj: InitialStateProfileType

}

export const ProfileHeader: React.FC<ProfileHeaderPropsType> = (props) => {
    let arrContacts = Object.values ( props.profileWrapperObj.profile.contacts )

    return <>
        <div className={ s.profileHeader }>
            <div className={s.fullName}>{ props.profileWrapperObj.profile.fullName }</div>
            <div className={ s.selfPhotoFromProfile }>
                <img src={ props.profileWrapperObj.profile.photos.large || emptyPhoto }
                     alt={ props.profileWrapperObj.profile.userId?.toString () }/>
            </div>
        </div>
        <div className={ s.profileInfo }>

            <div className={ s.selfText }>
                <EditableSpan item={'ты втираешь мне какую-то дичь'}/>
                <ul>
                    { arrContacts.map ( (c, i) => c && <li key={ i }>{ c }</li> ) }
                </ul>
                <div className={ s.image }>
                    <img src={ props.profileWrapperObj.profile.lookingForAJob ? job : noJob } alt=""/>
                    <br/>
                    { props.profileWrapperObj.profile.lookingForAJobDescription }
                </div>
            </div>
        </div>
    </>
}