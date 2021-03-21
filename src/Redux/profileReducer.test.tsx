import selfPhoto from "../images/face.png";
import profileReducer, {addPostActionCreator, changePostInputActionCreator} from "./profileReducer";

test('profile reducer and action test', (() => {
    const state = {
        currentInputPost: 'test',
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
    }

    const actionAddPost=addPostActionCreator()
    const actionChangePostInput=changePostInputActionCreator('stringTest')

    const testProfileReducerAdd = profileReducer(state,actionAddPost)
    const testProfileReducerChange = profileReducer(state,actionChangePostInput)


    expect(testProfileReducerAdd.myPostArray[0]).toStrictEqual({
        profileSelfPhotoImgUrl: selfPhoto,
        id: 5,
        message: 'test',
    })
    expect(testProfileReducerAdd.myPostArray.length).toBe( 7)
    expect(testProfileReducerAdd.myPostArray[6]).toBe( undefined)
    expect(testProfileReducerAdd.currentInputPost).toStrictEqual('test')


    expect(testProfileReducerChange.currentInputPost).toStrictEqual('stringTest')
    expect(testProfileReducerChange.currentInputPost.length).toBe(10)



}))
