import {UserFromProfileResponseType} from "../../../../Redux/profileReducer";
import React, {useCallback, useState} from "react";
import style from "./ProfileHeader.module.css";
import emptyPhoto from "../../../../images/emptyUser.png";
import {FormattedMessage} from "../../../common/FormattedMessage/FormattedMessage";


interface IHatProfileHeaderParams {
    profile: UserFromProfileResponseType;
    activeAvatarInput: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    isOwner: boolean;
    onPhotoSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCropPhoto: (image: React.ChangeEvent<HTMLInputElement> | string) => void;
    isFriend: boolean | null;
    setFriendlyStatus: (isFriend: boolean | null,userId:number | null) => void;
}

export const ProfileHeader: React.FC<IHatProfileHeaderParams> = (props) => {
    const {
        profile,
        isOwner,
        activeAvatarInput,
        onCropPhoto,
        onPhotoSelect,
        onMouseEnter,
        onMouseLeave,
        isFriend,
        setFriendlyStatus,
    } = props;

    const [isCrop, setCrop] = useState ( false );
    const saveCroppedPhotoCallback = (image: React.ChangeEvent<HTMLInputElement> | string) => {
        props.onCropPhoto ( image );
        setCrop ( true );
    };


    const setIsFriendCallBack = useCallback(()=>setFriendlyStatus(isFriend,profile.userId),[isFriend,profile])


    return <div className={ style.profileHeader }>
        <div className={ style.followNameBlock }>
            <div className={ style.fullName }>{ profile.fullName }</div>
            { !isOwner &&
                <div className={style.isFriend} onClick={setIsFriendCallBack}>
                    <FormattedMessage _id={ `${ !isFriend ? 'users.dialogs.follow' : 'users.dialogs.unfollow' }` }/>
                </div>
            }
        </div>
        <div className={ `${ style.selfPhotoFromProfile } ${ activeAvatarInput && style.active }` }
             onMouseEnter={ onMouseEnter }
             onMouseLeave={ onMouseLeave }>
            { isOwner && activeAvatarInput && <>
                {/*<div onClick={ ()=>setCrop(true) } className={ style.cropAvatar }>
                    <FormattedMessage _id={ 'profile.crop.avatar' }/>
                </div>*/ }
                <label htmlFor="file-upload" className={ style.changeAvatarInput }>
                    <FormattedMessage _id={ 'profile.change.avatar' }/>
                </label>
                <input onChange={ onPhotoSelect } id="file-upload" type="file"/>
            </> }
            <img src={ profile.photos.large || emptyPhoto }
                 alt={ profile.userId?.toString () }
            />

            {/* //need to add cropper in some tile
          { isCrop && props.profile.photos.large
                ? <CropperPhoto  src={ props.profile.photos.large }/>
                : <img src={ props.profile.photos.large || emptyPhoto }
                     alt={ props.profile.userId?.toString () }
                />
            }*/ }
        </div>
    </div>;
};
