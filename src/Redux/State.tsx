import selfPhoto from "../images/face.png";
import photo from "../images/face.png";

type AddPostType = {
    type: 'ADD-POST'
}
type AddDialogsMessageType = {
    type: 'ADD-DIALOGS-MESSAGE'
    self: boolean
}
type ChangePostInputTextType = {
    type: 'CHANGE-POST-INPUT-TEXT'
    item: string
}
type ChangeDialogsMessageTextType = {
    type: 'CHANGE-DIALOGS-INPUT-TEXT'
    item: string
}
export type ActionsTypes = AddPostType | ChangePostInputTextType | AddDialogsMessageType | ChangeDialogsMessageTextType


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
    currentInputMessageString: string
}
export type ProfileWrapperObjType = {
    profileSelfPhotoImgUrl: ProfileSelfPhotoImgUrlType
    profileInfoText: Array<ProfileInfoTextType>
    myPostArray: Array<MyPostArrayType>
    currentInputPost: string
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
export type StoreType = {
    _state: RootStateType
    _subscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    _addMessageFromDialogs: (value: string, self: boolean) => void
    _addPostFromProfile: (value: string) => void
    _textAreaFromPostChanger: (item: string) => void
    _textAreaFromDialogsChanger: (item: string) => void
    dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
    _state: {
        profileWrapperObj: {
            currentInputPost: '',
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
            currentInputMessageString: '',
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
    },
    _subscriber() {
        console.log('no subscriber here')
    },
    getState() {
        return this._state;

    },
    subscribe(observer: () => void) {
        console.log('1')
        this._subscriber = observer;
    },
    _addMessageFromDialogs(value: string, self: boolean) {
        const newMessage = {
            id: this._state.dialogWrapperObj.messages.length + 1,
            item: value,
            self: self,
            avatarURL: selfPhoto
        }
        this._state.dialogWrapperObj.messages.push(newMessage)
        this._subscriber()
    },
    _addPostFromProfile() {
        const newPost = {
            profileSelfPhotoImgUrl: selfPhoto,
            id: this._state.profileWrapperObj.myPostArray.length++,
            message: this._state.profileWrapperObj.currentInputPost
        }
        this._state.profileWrapperObj.myPostArray.unshift(newPost)
        this._subscriber()
    },
    _textAreaFromPostChanger(item: string) {
        this._state.profileWrapperObj.currentInputPost = item
        this._subscriber()
    },
    _textAreaFromDialogsChanger(item: string) {
        this._state.dialogWrapperObj.currentInputMessageString = item;
        this._subscriber();
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                profileSelfPhotoImgUrl: selfPhoto,
                id: this._state.profileWrapperObj.myPostArray.length++,
                message: this._state.profileWrapperObj.currentInputPost
            }
            this._state.profileWrapperObj.myPostArray.unshift(newPost)
            this._subscriber()
        } else if (action.type === 'ADD-DIALOGS-MESSAGE') {
            const newMessage = {
                id: this._state.dialogWrapperObj.messages.length + 1,
                item: this._state.dialogWrapperObj.currentInputMessageString,
                self: action.self,
                avatarURL: selfPhoto
            }
            this._state.dialogWrapperObj.messages.push(newMessage)
            this._subscriber()
        } else if (action.type === 'CHANGE-POST-INPUT-TEXT') {
            this._state.profileWrapperObj.currentInputPost = action.item
            this._subscriber()
        } else if (action.type === 'CHANGE-DIALOGS-INPUT-TEXT') {
            this._state.dialogWrapperObj.currentInputMessageString = action.item;
            this._subscriber();
        }
    }
}


export default store;
