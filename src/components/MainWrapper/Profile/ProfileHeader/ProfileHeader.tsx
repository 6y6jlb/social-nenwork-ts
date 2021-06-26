import React, {ChangeEvent, useState} from "react";
import {InitialStateProfileType} from "../../../../Redux/profileReducer";
import noJob from '../../../../images/noJob.jpg'
import job from '../../../../images/112.jpg'
import emptyPhoto from '../../../../images/emptyUser.png'
import EditableSpan from "./editableSpanContainer/EditableSpanContainer";
import style from './ProfileHeader.module.css'


type ProfileHeaderPropsType = {
    profileWrapperObj: InitialStateProfileType
    isOwner: boolean
    savePhotoTC: (file:any) => void

}

export const ProfileHeader: React.FC<ProfileHeaderPropsType> = React.memo((props) => {
    const [activeAvatarInput, setActiveAvatarInput] = useState(false)
    const arrContacts = Object.values(props.profileWrapperObj.profile.contacts)
    const photoSelect =(e: ChangeEvent<HTMLInputElement>)=>{
        if (e.currentTarget.files) {
            props.savePhotoTC(e.currentTarget.files[0])
        }
    }

    return <>
        <div className={style.profileHeader}>
            <div className={style.fullName}>{props.profileWrapperObj.profile.fullName}</div>
            <div className={`${style.selfPhotoFromProfile} ${activeAvatarInput&&style.active}`}
                 onMouseEnter={() => setActiveAvatarInput(true)}
                 onMouseLeave={() => setActiveAvatarInput(false)}>
                {props.isOwner && activeAvatarInput &&<>
                    <label htmlFor="file-upload" className={style.changeAvatarInput}>
                        change avatar
                    </label>
                    <input onChange={photoSelect} id="file-upload" type="file"/></>}
                <img src={props.profileWrapperObj.profile.photos.large || emptyPhoto}
                     alt={props.profileWrapperObj.profile.userId?.toString()}
                     />
            </div>
        </div>
        <div className={style.profileInfo}>
            <div className={style.selfText}>
                <EditableSpan/>
                <ul>
                    {arrContacts.map((c, i) => c && <li key={i}>{c}</li>)}
                </ul>
                <div className={style.image}>
                    <img src={props.profileWrapperObj.profile.lookingForAJob ? job : noJob} alt=""/>
                    <br/>
                    {props.profileWrapperObj.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    </>
})