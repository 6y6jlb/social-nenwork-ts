import React, {ChangeEvent, useState} from "react";
import {InitialStateProfileType, UserFromProfileResponseType} from "../../../../Redux/profileReducer";
import Contact from "./Contacts/Contact";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import HatProfileHeader from "./HatProfileHeader/HatProfileHeader";


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
    const formSucceed = (formData: any) => {
        //@ts-ignore
        saveNewProfileTC ( formData )/*.then(()=>setIsFormOpen ( false ))*/

    }
    const formReset = ()=>{
        setIsFormOpen ( false )
    }

    return <>
        <HatProfileHeader profile={ profile } activeAvatarInput={ activeAvatarInput }
                          onMouseEnter={ () => setActiveAvatarInput ( true ) }
                          onMouseLeave={ () => setActiveAvatarInput ( false ) } owner={ isOwner }
                          onChange={ photoSelect }/>
        <ProfileInfo formReset={formReset} isOwner={ isOwner } isFormOpen={ isFormOpen } profile={ profile } openFormMode={ openFormMode }
                     formSucceed={ formSucceed }>
            { contacts }
        </ProfileInfo>
    </>
}

