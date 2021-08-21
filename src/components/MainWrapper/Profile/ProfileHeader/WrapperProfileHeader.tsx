import React, {ChangeEvent, useState} from "react";
import {InitialStateProfileType, UserFromProfileResponseType} from "../../../../Redux/profileReducer";
import Contact from "./Contacts/Contact";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfileHeaderPropsType = {
    profileWrapperObj: InitialStateProfileType
    isOwner: boolean
    openSet: (isOpenMenu: boolean) => void
    isOpenMenu: boolean
    savePhotoTC: (file: any) => void
    saveNewProfile: (model: UserFromProfileResponseType, userId: number | null) => void

}


export const WrapperProfileHeader: React.FC<ProfileHeaderPropsType> = ({
                                                                    profileWrapperObj,
                                                                    isOwner,
                                                                    savePhotoTC,
                                                                    saveNewProfile,
                                                                    openSet,
                                                                    isOpenMenu
                                                                }) => {
    const profile = profileWrapperObj.profile
    const userId = profileWrapperObj.profile.userId

    const keys = Object.keys ( profile.contacts )
    const [activeAvatarInput, setActiveAvatarInput] = useState ( false )
    const contacts = keys.map ( (key, i) => {
        // @ts-ignore
        return key && <Contact key={ i } contactTitle={ key } contactValue={ profile.contacts[key] }/>
    } )
    const photoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            savePhotoTC ( e.currentTarget.files[0] )
        }
    }
    const saveCroppedPhoto = (image: ChangeEvent<HTMLInputElement> | string) => {
        if (image) {
            savePhotoTC (image)
        }
    }
    const openFormMode = () => {
        openSet ( true )
    }
    const formSucceed = async (formData: any) => {
        await saveNewProfile ( formData, userId )


    }
    const formReset = () => {
        openSet ( false )
    }

    return <>
        <ProfileHeader onCropPhoto={saveCroppedPhoto} profile={ profile } activeAvatarInput={ activeAvatarInput }
                       onMouseEnter={ () => setActiveAvatarInput ( true ) }
                       onMouseLeave={ () => setActiveAvatarInput ( false ) } owner={ isOwner }
                       onPhotoSelect={ photoSelect }/>
        <ProfileInfo formReset={ formReset } isOwner={ isOwner } isFormOpen={ isOpenMenu } profile={ profile }
                     openFormMode={ openFormMode }
                     formSucceed={ formSucceed }>
            { contacts }
        </ProfileInfo>
    </>
}

