import usersReducer, {
    addMoreUsersActionCreator,
    followActionCreator,
    unFollowActionCreator,
    UserType
} from "./usersReducer";

test('user  reducer and action test', (() => {
    const state: UserType[] = [
        {
            id: 2,
            followed: true,
            name: 'sdf',
            photos: {small: null, large: null},
            status: ''

        }, {
            id: 1,
            followed: false,
            name: '123',
            photos: {small: null, large: null},
            status: ''

        }
    ]
    const userReducerTest1 = usersReducer(state, followActionCreator(1))
    const userReducerTest2 = usersReducer(state, unFollowActionCreator(2))
    const userReducerTest3 = usersReducer(state,
        addMoreUsersActionCreator([{
            id: 1,
            followed: false,
            name: '123',
            photos: {small: null, large: null},
            status: ''
        }]))

    expect(userReducerTest1[1].followed).toBe(true)
    expect(userReducerTest2[0].followed).toBe(false)
    expect(userReducerTest3.length).toBe(3)



}))
