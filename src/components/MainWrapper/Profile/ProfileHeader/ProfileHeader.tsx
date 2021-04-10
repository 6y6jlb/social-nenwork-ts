import React from "react";
import s from "../ProfileWrapper.module.css";
import {InitialStateProfileType} from "../../../../Redux/profileReducer";
import noJob from '../../../../images/noJob.jpg'
import job from '../../../../images/112.jpg'


type ProfileHeaderPropsType = {
    profileWrapperObj: InitialStateProfileType


}

export const ProfileHeader: React.FC<ProfileHeaderPropsType> = (props) => {
    return <>
        <div className={ s.profileHeader }>
            <div>{ props.profileWrapperObj.profile.fullName }</div>
            <div className={ s.selfPhotoFromProfile }>
                <img src={ props.profileWrapperObj.profile.photos.large || '' }
                     alt={ props.profileWrapperObj.profile.userId?.toString () }/>
            </div>
        </div>
        <div className={ s.profileInfo }>
            <div className={ s.selfText }>
                <ul>
                    { props.profileWrapperObj.profile.contacts.vk
                    && <li>{ props.profileWrapperObj.profile.contacts.vk }</li> }
                    { props.profileWrapperObj.profile.contacts.github
                    && <li>{ props.profileWrapperObj.profile.contacts.github }</li> }
                    { props.profileWrapperObj.profile.contacts.facebook
                    &&
                    <li>{ props.profileWrapperObj.profile.contacts.facebook }</li> }
                    { props.profileWrapperObj.profile.contacts.instagram
                    &&
                    <li>{ props.profileWrapperObj.profile.contacts.instagram }</li> }
                    { props.profileWrapperObj.profile.contacts.twitter
                    &&
                    <li>{ props.profileWrapperObj.profile.contacts.twitter }</li> }
                    { props.profileWrapperObj.profile.contacts.mainLink
                    &&
                    <li>{ props.profileWrapperObj.profile.contacts.mainLink }</li> }
                    { props.profileWrapperObj.profile.contacts.website
                    &&
                    <li>{ props.profileWrapperObj.profile.contacts.website }</li> }
                    { props.profileWrapperObj.profile.contacts.youtube
                    &&
                    <li>{ props.profileWrapperObj.profile.contacts.youtube }</li> }
                </ul>
                <div className={s.image}>
                    <img src={!props.profileWrapperObj.profile.lookingForAJob?job:noJob} alt=""/>
                    <br/>
                    { props.profileWrapperObj.profile.lookingForAJobDescription }
                </div>
            </div>
        </div>
    </>
}