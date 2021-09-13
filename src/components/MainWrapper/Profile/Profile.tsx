import React from "react";
import style from './Profile.module.css';
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {InitialStateProfileType, UserFromProfileResponseType} from "../../../Redux/profileReducer";
import {ProfileHeaderContainer} from "./ProfileHeader/ProfileHeaderContainer";


type PropsType = {
    onAddPost: (value: string) => void
    openSet: (isOpenMenu: boolean) => void
    isOpenMenu: boolean
    savePhoto: (file: any) => void
    saveNewProfile: (model: UserFromProfileResponseType, userId: number | null) => void
    profile: InitialStateProfileType
    isOwner: boolean
    setFriendlyStatus: (isFriend: boolean | null, userId: number | null) => void
    friendlyCheck: (userId: number | any) => void


}

export const Profile: React.FC<PropsType> = React.memo ( (props) => {
    const {
        onAddPost,
        isOwner,
        profile,
        saveNewProfile,
        openSet,
        savePhoto,
        isOpenMenu,
        setFriendlyStatus,
        friendlyCheck,
    } = props;

    return (
        <div className={ style.profileContent }>
            <ProfileHeaderContainer isOpenMenu={ isOpenMenu }
                                    openSet={ openSet }
                                    setFriendlyStatus={ setFriendlyStatus }
                                    saveNewProfile={ saveNewProfile }
                                    savePhotoTC={ savePhoto }
                                    isFriend={ profile.isFriend }
                                    isOwner={ isOwner }
                                    friendlyCheck={ friendlyCheck }
                                    profileWrapperObj={ profile }/>
            <SendMessageAreaFromProfile onAddPost={ onAddPost }/>
            <Posts myPostArray={ profile.myPostArray }/>
        </div>
    );
} );

