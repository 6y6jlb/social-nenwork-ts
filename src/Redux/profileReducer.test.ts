import selfPhoto from "../images/face.png";
import profileReducer, {
    addPostActionCreator,
    changePostInputActionCreator,
    MyPostArrayFromProfileType,
    UserFromProfileResponseType
} from "./profileReducer";

test ( 'profile reducer and action test', (() => {
    const state = {
        currentInputPost: 'test',
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
        ] as Array<MyPostArrayFromProfileType>
    }

    const actionAddPost = addPostActionCreator ()
    const actionChangePostInput = changePostInputActionCreator ( 'stringTest' )
    //@ts-ignore
    const testProfileReducerAdd = profileReducer ( state, actionAddPost )
    //@ts-ignore
    const testProfileReducerChange = profileReducer ( state, actionChangePostInput )


    expect ( testProfileReducerAdd.myPostArray[0] ).toStrictEqual ( {
        profileSelfPhotoImgUrl: selfPhoto,
        id: 5,
        message: 'test',
    } )
    expect ( testProfileReducerAdd.myPostArray.length ).toBe ( 7 )
    expect ( testProfileReducerAdd.currentInputPost ).toStrictEqual ( '' )


    expect ( testProfileReducerChange.currentInputPost ).toStrictEqual ( 'stringTest' )


}) )
