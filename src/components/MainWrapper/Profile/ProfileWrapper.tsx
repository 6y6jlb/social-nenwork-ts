import React from "react";
import s from './ProfileWrapper.module.css'
import {SendMessageAreaFromProfile} from "./SendMessageAreaFromProfile/SendMessageAreaFromProfile";
import {Posts} from "./Posts/Posts";
import {InitialStateProfileType} from "../../../Redux/profileReducer";



export type ProfileWrapperPropsType = {
    onAddPost: () => void
    onPostChanger: (text: string) => void
    profileWrapperObj: InitialStateProfileType


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
            <SendMessageAreaFromProfile onAddPost={props.onAddPost} onPostChanger={props.onPostChanger}
                                        currentInputPost={props.profileWrapperObj.currentInputPost}/>
            <Posts profileInfoText={props.profileWrapperObj.profileInfoText}
                   profileSelfPhotoImgUrl={props.profileWrapperObj.profileSelfPhotoImgUrl}
                   myPostArray={props.profileWrapperObj.myPostArray}/>
        </div>
    )
}

