import selfPhoto from "../images/face.png";
import photo from "../images/face.png";
import profileReducer, {addPostActionCreator, changePostInputActionCreator} from "./profileReducer";
import dialogsReducer, {addDialogsMessageActionCreator, changeDialogsInputActionCreator} from "./dialogsReducer";
import navBarReducer from "./navBarReducer";


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addDialogsMessageActionCreator>
    | ReturnType<typeof changePostInputActionCreator>
    | ReturnType<typeof changeDialogsInputActionCreator>


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
        this._subscriber = observer;
    },
    dispatch(action) {

        profileReducer(this._state.profileWrapperObj, action)
        dialogsReducer(this._state.dialogWrapperObj, action)
        navBarReducer(this._state.navBarObj, action)

        this._subscriber()
    },

}

export default store;
