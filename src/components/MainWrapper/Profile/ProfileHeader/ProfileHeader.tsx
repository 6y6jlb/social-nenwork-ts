import React, {ChangeEvent, useState} from "react";
import {InitialStateProfileType} from "../../../../Redux/profileReducer";
import noJob from '../../../../images/noJob.jpg'
import job from '../../../../images/112.jpg'
import emptyPhoto from '../../../../images/emptyUser.png'
import EditableSpan from "./editableSpanContainer/EditableSpanContainer";
import style from './ProfileHeader.module.css'
import Contact from "./Contacts/Contact";
import Button from "../../../common/Button/Button";



type ProfileHeaderPropsType = {
    profileWrapperObj: InitialStateProfileType
    isOwner: boolean
    savePhotoTC: (file:any) => void

}

export const ProfileHeader: React.FC<ProfileHeaderPropsType> = React.memo(({profileWrapperObj,isOwner,savePhotoTC}) => {
    const profile = profileWrapperObj.profile

    const keys = Object.keys(profile.contacts)
    const [activeAvatarInput, setActiveAvatarInput] = useState(false)
    const contacts = keys.map((key,i)=>{
        // @ts-ignore
        return key && <Contact key={i} contactTitle={key} contactValue={profile.contacts[key]}/>
    })
    const photoSelect =(e: ChangeEvent<HTMLInputElement>)=>{
        if (e.currentTarget.files) {
            savePhotoTC(e.currentTarget.files[0])
        }
    }

    return <>
        <div className={style.profileHeader}>
            <div className={style.fullName}>{profile.fullName}</div>
            <div className={`${style.selfPhotoFromProfile} ${activeAvatarInput&&style.active}`}
                 onMouseEnter={() => setActiveAvatarInput(true)}
                 onMouseLeave={() => setActiveAvatarInput(false)}>
                {isOwner && activeAvatarInput &&<>
                    <label htmlFor="file-upload" className={style.changeAvatarInput}>
                        change avatar
                    </label>
                    <input onChange={photoSelect} id="file-upload" type="file"/></>}
                <img src={profile.photos.large || emptyPhoto}
                     alt={profile.userId?.toString()}
                     />
            </div>
        </div>
        <div className={style.profileInfo}>
            <div className={style.selfText}>
                <EditableSpan/>

                <ul>
                    {contacts}
                </ul>
                <div className={style.image}>
                    <img src={profile.lookingForAJob ? job : noJob} alt=""/>
                    <br/>
                    {profile.lookingForAJobDescription}
                </div>
                {isOwner && <Button small text={'to change'}/>}
            </div>
        </div>
    </>
})

