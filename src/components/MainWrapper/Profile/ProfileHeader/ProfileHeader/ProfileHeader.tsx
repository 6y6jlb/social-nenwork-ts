import {UserFromProfileResponseType} from "../../../../../Redux/profileReducer";
import React, {useState} from "react";
import style from "../ProfileHeader.module.css";
import emptyPhoto from "../../../../../images/emptyUser.png";
import {FormattedMessage} from "../../../../common/FormattedMessage/FormattedMessage";
import CropperPhoto from "../ProfileHeaderForm/CropperPhoto/CroperPhoto";

interface HatProfileHeaderParams {
    profile: UserFromProfileResponseType;
    activeAvatarInput: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    owner: boolean;
    onPhotoSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCropPhoto: (image: React.ChangeEvent<HTMLInputElement> | string) => void;
}

export const ProfileHeader = (props: HatProfileHeaderParams) => {
    const [isCrop, setCrop] = useState ( false )
    const saveCroppedPhotoCallback = (image: React.ChangeEvent<HTMLInputElement> | string)=> {
        props.onCropPhoto(image)
        setCrop(true)
    }

    return <div className={ style.profileHeader }>
        <div className={ style.fullName }>{ props.profile.fullName }</div>
        <div className={ `${ style.selfPhotoFromProfile } ${ props.activeAvatarInput && style.active }` }
             onMouseEnter={ props.onMouseEnter }
             onMouseLeave={ props.onMouseLeave }>
            { props.owner && props.activeAvatarInput && <>
                {/*<div onClick={ ()=>setCrop(true) } className={ style.cropAvatar }>
                    <FormattedMessage _id={ 'profile.crop.avatar' }/>
                </div>*/}
                <label htmlFor="file-upload" className={ style.changeAvatarInput }>
                    <FormattedMessage _id={ 'profile.change.avatar' }/>
                </label>
                <input onChange={ props.onPhotoSelect } id="file-upload" type="file"/>
            </> }
            <img src={ props.profile.photos.large || emptyPhoto }
                 alt={ props.profile.userId?.toString () }
            />

         {/* //need to add cropper in some tile
          { isCrop && props.profile.photos.large
                ? <CropperPhoto  src={ props.profile.photos.large }/>
                : <img src={ props.profile.photos.large || emptyPhoto }
                     alt={ props.profile.userId?.toString () }
                />
            }*/}
        </div>
    </div>;
}
