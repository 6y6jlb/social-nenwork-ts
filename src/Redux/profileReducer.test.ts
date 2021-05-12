import selfPhoto from "../images/face.png";
import profileReducer, {
    actionsProfile, InitialStateProfileType,
    MyPostArrayFromProfileType,
    UserFromProfileResponseType
} from "./profileReducer";

test ( 'profile reducer and action test', (() => {
    const initialState = {
        status: '',
        profile: {
            userId: null,
            lookingForAJob: false,
            lookingForAJobDescription: null,
            fullName: null,
            contacts: {
                github: null,
                vk: null,
                facebook: null,
                instagram: null,
                twitter: null,
                website: null,
                youtube: null,
                mainLink: null,
            },
            photos: {small: null, large: null}
        } as UserFromProfileResponseType,
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
        ] as Array<MyPostArrayFromProfileType>,
        isFetching: false as boolean
    }
    const actionAddPost = actionsProfile.addPost ('test')

    const testProfileReducerAdd = profileReducer ( initialState, actionAddPost )



    expect ( testProfileReducerAdd.myPostArray[0] ).toStrictEqual ( {
        profileSelfPhotoImgUrl: selfPhoto,
        id: 5,
        message: 'test',
    } )
    expect ( testProfileReducerAdd.myPostArray.length ).toBe ( 7 )



}) )
