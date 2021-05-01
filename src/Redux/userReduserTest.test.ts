import usersReducer, {
    addMoreUsersActionCreator,
    followActionCreator,
    unFollowActionCreator, UsersStateType,
    UserType
} from "./usersReducer";

test('user  reducer and action test', (() => {
    const state: UsersStateType = {
        users: [
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
        ],
        pageSize: 2,
        currentPage: 2,
        isFetching: true,
        totalCount: 10,
        isRequestSendUsersId: []

    }


    const userReducerTest1 = usersReducer(state, followActionCreator(1))
    const userReducerTest2 = usersReducer(state, unFollowActionCreator(2))
    const userReducerTest3 = usersReducer(state,
        addMoreUsersActionCreator([{
            id: 3,
            followed: false,
            name: '123',
            photos: {small: null, large: null},
            status: ''
        }]))

    expect(userReducerTest1.users[1].followed).toBe(false)
    expect(userReducerTest2.users[0].followed).toBe(true)
    expect(userReducerTest3.users.length).toBe(1)



}))
