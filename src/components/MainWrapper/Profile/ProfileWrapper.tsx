import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {ProfileWrapperObjType} from "../../../Redux/State";


export type ProfileWrapperPropsType = {
    profileWrapperObj: ProfileWrapperObjType
    addPostFromProfile: (value:string) => void
    textAreaFromPostChanger: (item: string) => void

}

export function ProfileWrapper(props: ProfileWrapperPropsType) {


    return (
        <div className={s.profileContent}>
            <div className={s.profileHeader}>
                <div className={s.selfPhotoFromProfile}>
                    <img src={props.profileWrapperObj.profileSelfPhotoImgUrl}/>
                </div>
            </div>
            <div className={s.profileInfo}>

                <div></div>
                <div className={s.selfText}>
                    {props.profileWrapperObj.profileInfoText.map(p => {
                        return (
                            <div key={p.id}>
                                -<em>{p.postMessage}</em>
                            </div>
                        )
                    })}
                </div>
            </div>
            <SendMessageAreaFromProfile textAreaFromPostChanger={props.textAreaFromPostChanger}
                                        currentInputPostString={props.profileWrapperObj.currentInputPost}
                                        addPostFromProfile={props.addPostFromProfile}/>
            <Posts profileInfoText={props.profileWrapperObj.profileInfoText}
                   profileSelfPhotoImgUrl={props.profileWrapperObj.profileSelfPhotoImgUrl}
                   myPostArray={props.profileWrapperObj.myPostArray}/>
        </div>
    )
}

