import selfPhoto from "../images/face.png";
import photo from "../images/face.png";
import {rerenderEntireThree} from "../render";

export type NavLinkBarType = {
    id: number
    item: string
}
export type NavBarObjType = {
    navLinkBar: Array<NavLinkBarType>
    friendsIcons: Array<FriendsIconsFromNavBarType>
}
export type MessagesFromDialogsType = {
    id: number
    item: string
    self: boolean
    avatarURL: string

}
export type ProfileInfoTextType = {
    id: number
    postMessage: string
}
export type ProfileSelfPhotoImgUrlType = string
export type MyPostArrayType = {
    profileSelfPhotoImgUrl: ProfileSelfPhotoImgUrlType
    id: number
    message: string
}
export type DialogWrapperObjType = {
    messages: Array<MessagesFromDialogsType>
}
export type ProfileWrapperObjType = {
    profileSelfPhotoImgUrl: ProfileSelfPhotoImgUrlType
    profileInfoText: Array<ProfileInfoTextType>
    myPostArray: Array<MyPostArrayType>
}
export type FriendsIconsFromNavBarType = {
    photoUrl: string
    id: number
    name: string
}

export type RootStateType = {
    profileWrapperObj: ProfileWrapperObjType
    dialogWrapperObj: DialogWrapperObjType
    navBarObj: NavBarObjType

}

let State: RootStateType = {
    profileWrapperObj: {
        profileSelfPhotoImgUrl: selfPhoto,
        profileInfoText: [
            {id: 1, postMessage: 'Человек умелый'},
            {id: 2, postMessage: 'человек разумный'},
            {id: 3, postMessage: '46 хромосом. 32 зуба.'},
            {id: 4, postMessage: '183 сантиметра роста'},
            {id: 5, postMessage: 'Где-то под полтора килограмма мозга'},
            {id: 6, postMessage: 'Улыбка до ушей, в теле 36.6'},
            {id: 7, postMessage: 'Здоров от пяток до шеи, почти совершенен'},
        ],
        myPostArray: [
            {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 1,
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 2, message: ' ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 3,
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 4,
                message: 'Lorem ipssa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridics, ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 5, message: 'eu, ',
            },
        ]
    },
    dialogWrapperObj: {
        messages: [
            {id: 1, item: 'myMessage', self: true, avatarURL: photo},
            {id: 2, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 3, item: 'myMessage', self: true, avatarURL: photo},
            {id: 4, item: 'myMessage', self: true, avatarURL: photo},
            {id: 5, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 6, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 7, item: 'myMessage', self: true, avatarURL: photo},
            {id: 8, item: 'myMessage', self: true, avatarURL: photo},
            {id: 9, item: 'notMyMessage', self: false, avatarURL: photo},
            {id: 10, item: 'myMessage', self: true, avatarURL: photo},
            {id: 11, item: 'notMyMessage', self: false, avatarURL: photo},

        ]
    },
    navBarObj: {
        friendsIcons: [
            {id: 1, name: 'Sveta', photoUrl: photo},
            {id: 2, name: 'Zhenya', photoUrl: photo},
            {id: 3, name: 'Ivan', photoUrl: photo},
            {id: 4, name: 'Fekls', photoUrl: photo},
            {id: 5, name: 'Dno', photoUrl: photo},
            {id: 6, name: 'Alexey', photoUrl: photo},
        ],
        navLinkBar: [
            {id: 1, item: 'profile'},
            {id: 2, item: 'dialogs'},
            {id: 3, item: 'friends'},
            {id: 4, item: 'news'},
            {id: 5, item: 'audio'},
            {id: 6, item: 'settings'}

        ]
    }
}


export  const addMessageFromDialogs = (message:string|' ', self:boolean)=> {
    const newMessage = {
        id: State.dialogWrapperObj.messages.length + 1,
        item: message,
        self: self,
        avatarURL: selfPhoto
    }
    State.dialogWrapperObj.messages.push(newMessage)
    rerenderEntireThree(State)
}
export  const addPostFromProfile = (message:string|' ')=> {
    const newPost = {
        profileSelfPhotoImgUrl: selfPhoto,
        id: State.profileWrapperObj.myPostArray.length++,
        message: message
    }
    State.profileWrapperObj.myPostArray.unshift(newPost)
    rerenderEntireThree(State)
}



export default State;
