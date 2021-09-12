import {ActionsTypes} from "./reduxStore";

type NavLinkBarType = {
    id: number
    item: string
}
type NavBarObjType = {
    navLinkBar: Array<NavLinkBarType>
    friendsIcons: Array<FriendsIconsFromNavBarType>
}
type MessagesFromDialogsType = {
    id: number
    item: string
    self: boolean
    avatarURL: string

}
type ProfileInfoTextType = {
    id: number
    postMessage: string
}
type ProfileSelfPhotoImgUrlType = string
type MyPostArrayType = {
    profileSelfPhotoImgUrl: ProfileSelfPhotoImgUrlType
    id: number
    message: string
}
type DialogWrapperObjType = {
    messages: Array<MessagesFromDialogsType>
    currentInputMessageString: string
}
type ProfileWrapperObjType = {
    profileSelfPhotoImgUrl: ProfileSelfPhotoImgUrlType
    profileInfoText: Array<ProfileInfoTextType>
    myPostArray: Array<MyPostArrayType>
    currentInputPost: string
}
type FriendsIconsFromNavBarType = {
    photoUrl: string
    id: number
    name: string
}
type RootStateType = {
    profileWrapperObj: ProfileWrapperObjType
    dialogWrapperObj: DialogWrapperObjType
    navBarObj: NavBarObjType

}
/*
let store: StoreType = {
    _state: {
        profile: {
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
                {id: 1, item: 'myMessage', isSelf: true, avatarURL: photo},
                {id: 2, item: 'notMyMessage', isSelf: false, avatarURL: photo},
                {id: 3, item: 'myMessage', isSelf: true, avatarURL: photo},
                {id: 4, item: 'myMessage', isSelf: true, avatarURL: photo},
                {id: 5, item: 'notMyMessage', isSelf: false, avatarURL: photo},
                {id: 6, item: 'notMyMessage', isSelf: false, avatarURL: photo},
                {id: 7, item: 'myMessage', isSelf: true, avatarURL: photo},
                {id: 8, item: 'myMessage', isSelf: true, avatarURL: photo},
                {id: 9, item: 'notMyMessage', isSelf: false, avatarURL: photo},
                {id: 10, item: 'myMessage', isSelf: true, avatarURL: photo},
                {id: 11, item: 'notMyMessage', isSelf: false, avatarURL: photo},

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

        profileReducer(this._state.profile, action)
        dialogsReducer(this._state.dialogWrapperObj, action)
        navBarReducer(this._state.navBarObj, action)

        this._subscriber()
    },

}

export default store;
*/
type StoreType = {
    _state: RootStateType
    _subscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}