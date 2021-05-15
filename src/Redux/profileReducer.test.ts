import selfPhoto from "../images/face.png";
import profileReducer, {actionsProfile, InitialStateProfileType, MyPostArrayFromProfileType, UserFromProfileResponseType
} from "./profileReducer";

let initialState: InitialStateProfileType;

beforeAll(() => {
    initialState = {
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
                id: 0,
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 1, message: ' ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 2,
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 3,
                message: 'Lorem ipssa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridics, ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 4, message: 'eu, ',
            },
        ] as Array<MyPostArrayFromProfileType>,
        isFetching: false as boolean
    };
});
afterEach(function () {
    initialState = {
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
                id: 0,
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 1, message: ' ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 2,
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 3,
                message: 'Lorem ipssa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridics, ultricies nec, pellentesque eu, ',
            }, {
                profileSelfPhotoImgUrl: selfPhoto,
                id: 4, message: 'eu, ',
            },
        ] as Array<MyPostArrayFromProfileType>,
        isFetching: false as boolean
    };
});

test('profile reducer setUser test', (() => {

    const profile = {
            userId: 123,
            lookingForAJob: true,
            lookingForAJobDescription: 'want to eat',
            fullName: 'biba boba',
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
        }

    const actionSetUserProfile = actionsProfile.setUserProfile(profile);
    const testProfileReducerSetUserProfile = profileReducer(initialState, actionSetUserProfile);

    expect(testProfileReducerSetUserProfile.profile.userId).toBe(123);
    expect(testProfileReducerSetUserProfile.profile.lookingForAJobDescription).toBe('want to eat');
    expect(testProfileReducerSetUserProfile.profile.fullName).toBe('biba boba');
    expect(testProfileReducerSetUserProfile.profile.lookingForAJob).toBe(true);

}))

test('add post testing', () => {
    const actionAddPost = actionsProfile.addPost('test')
    const testProfileReducerAdd = profileReducer(initialState, actionAddPost)

    expect(testProfileReducerAdd.myPostArray[0].message).toStrictEqual('test')
    expect(testProfileReducerAdd.myPostArray.length).toBe(7)

})

test('change isFetching testing', () => {
    const action = actionsProfile.changeIsFetchingFromProfile(true)
    const testProfileReducerAdd = profileReducer(initialState, action)

    expect(testProfileReducerAdd.isFetching).toBe(true)

})
test('change status testing', () => {
    const action = actionsProfile.setStatusAC('hey hey')
    const testProfileReducerAdd = profileReducer(initialState, action)

    expect(testProfileReducerAdd.status).toBe('hey hey')

})


