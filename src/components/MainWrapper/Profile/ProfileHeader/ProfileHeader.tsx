import React, {ChangeEvent, useState} from "react";
import {InitialStateProfileType, UserFromProfileResponseType} from "../../../../Redux/profileReducer";
import emptyPhoto from '../../../../images/emptyUser.png'
import style from './ProfileHeader.module.css'
import Contact from "./Contacts/Contact";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfileHeaderPropsType = {
    profileWrapperObj: InitialStateProfileType
    isOwner: boolean
    savePhotoTC: (file: any) => void
    saveNewProfileTC: (model: UserFromProfileResponseType) => void

}

export const ProfileHeader: React.FC<ProfileHeaderPropsType> = ({
                                                                    profileWrapperObj,
                                                                    isOwner,
                                                                    savePhotoTC,
                                                                    saveNewProfileTC
                                                                }) => {
    const profile = profileWrapperObj.profile

    const keys = Object.keys ( profile.contacts )
    const [activeAvatarInput, setActiveAvatarInput] = useState ( false )
    const [isFormOpen, setIsFormOpen] = useState ( false )
    const contacts = keys.map ( (key, i) => {
        // @ts-ignore
        return key && <Contact key={ i } contactTitle={ key } contactValue={ profile.contacts[key] }/>
    } )
    const photoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            savePhotoTC ( e.currentTarget.files[0] )
        }
    }
    const openFormMode = () => {
        setIsFormOpen ( true )
    }
    const closeFormMode = (formData: any) => {
        //@ts-ignore
        saveNewProfileTC ( formData )/*.then(()=>setIsFormOpen ( false ))*/

    }

    return <>
        <div className={ style.profileHeader }>
            <div className={ style.fullName }>{ profile.fullName }</div>
            <div className={ `${ style.selfPhotoFromProfile } ${ activeAvatarInput && style.active }` }
                 onMouseEnter={ () => setActiveAvatarInput ( true ) }
                 onMouseLeave={ () => setActiveAvatarInput ( false ) }>
                { isOwner && activeAvatarInput && <>
                    <label htmlFor="file-upload" className={ style.changeAvatarInput }>
                        change avatar
                    </label>
                    <input onChange={ photoSelect } id="file-upload" type="file"/></> }
                <img src={ profile.photos.large || emptyPhoto }
                     alt={ profile.userId?.toString () }
                />
            </div>
        </div>
        <ProfileInfo isOwner={ isOwner } isFormOpen={ isFormOpen } profile={ profile } openFormMode={ openFormMode }
                     closeFormMode={ closeFormMode }>
            { contacts }
        </ProfileInfo>
    </>
}

