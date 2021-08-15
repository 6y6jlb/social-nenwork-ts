import {UserFromProfileResponseType} from "../../../../../Redux/profileReducer";
import React from "react";
import style from "../ProfileHeader.module.css";
import emptyPhoto from "../../../../../images/emptyUser.png";
import {FormattedMessage} from "../../../../common/FormattedMessage/FormattedMessage";

interface HatProfileHeaderParams {
    profile: UserFromProfileResponseType;
    activeAvatarInput: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    owner: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HatProfileHeader = (props: HatProfileHeaderParams) =>
    <div className={ style.profileHeader }>
        <div className={ style.fullName }>{ props.profile.fullName }</div>
        <div className={ `${ style.selfPhotoFromProfile } ${ props.activeAvatarInput && style.active }` }
             onMouseEnter={ props.onMouseEnter }
             onMouseLeave={ props.onMouseLeave }>
            { props.owner && props.activeAvatarInput && <>
                <label htmlFor="file-upload" className={ style.changeAvatarInput }>
                    <FormattedMessage _id={'profile.change.avatar.text'}/>
                </label>
                <input onChange={ props.onChange } id="file-upload" type="file"/></> }
            <img src={ props.profile.photos.large || emptyPhoto }
                 alt={ props.profile.userId?.toString () }
            />
        </div>
    </div>;

export default HatProfileHeader;