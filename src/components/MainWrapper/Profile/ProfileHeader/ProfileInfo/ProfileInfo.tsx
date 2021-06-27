import React from "react";
import style from "../ProfileHeader.module.css";
import EditableSpan from "../editableSpanContainer/EditableSpanContainer";
import noJob from "../../../../../images/noJob.jpg";
import job from "../../../../../images/112.jpg";
import Button from "../../../../common/Button/Button";
import ProfileHeaderForm from "../ProfileHeaderForm/ProfileHeaderForm";
import {UserFromProfileResponseType} from "../../../../../Redux/profileReducer";


type PropsType = {
    isOwner:boolean
    isFormOpen:boolean
    profile:UserFromProfileResponseType
    openFormMode:()=>void
    closeFormMode:(formData:any)=>void

}


const ProfileInfo:React.FC<PropsType>=({isOwner,closeFormMode,openFormMode,profile,isFormOpen,children})=>{
    return (
        <div className={ style.profileInfo }>
            <div className={ style.selfText }>
                <EditableSpan/>
                { !isFormOpen ? <div className={ style.infoBlock }>
                        <div className={ style.selfOpinion }><b>self opinion : </b>{ profile.aboutMe }</div>
                        <div className={ style.contacts }><b>contacts : </b>
                            <ul>
                                { children }
                            </ul>
                        </div>
                        <div className={ style.lfj }>
                            <img src={ profile.lookingForAJob ? noJob : job } alt=""/>
                            <span>{ profile.lookingForAJobDescription }</span>
                        </div>
                        { isOwner && <Button onClick={ openFormMode } small text={ 'to change' }/> }</div>
                    : <ProfileHeaderForm profile={profile} initialValues={profile} onSubmit={ closeFormMode }/>
                }

            </div>
        </div>
    )
}

export default ProfileInfo;