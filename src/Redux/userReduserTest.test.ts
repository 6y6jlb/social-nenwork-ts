import usersReducer, {actionsUsers, UsersStateType, UserType,} from "./usersReducer";

let initialState: UsersStateType;

beforeAll(() => {
    initialState = {
        users: [
            {
                id: 123,
                name: 'one',
                status: 'two',
                photos: {small: null, large: null},
                followed: false
            }, {
                id: 1234,
                name: 'three',
                status: 'four',
                photos: {small: null, large: null},
                followed: true
            },
        ] as UserType[],
        pageSize: 6,
        totalCount: 0,
        currentPage: 1,
        isFetching: false,
        isRequestSendUsersId: [] as number[]
    }
});


test('user follow/unfollow action test', (() => {

    const actionFollow = actionsUsers.followActionCreator(123)
    const actionUnFollow = actionsUsers.unFollowActionCreator(123)

    const userReducerTest1= usersReducer(initialState,actionFollow)
    const userReducerTest2= usersReducer(initialState,actionUnFollow)

    expect(userReducerTest1.users[0].followed).toBeTruthy()
    expect(userReducerTest2.users[0].followed).toBeFalsy()

}))

test('user addMoreUsers action test', (() => {

    const users = [{
        id: 1235,
        name: 'five',
        status: 'six',
        photos: {small: null, large: null},
        followed: false
    }, {
        id: 1236,
        name: 'seven',
        status: 'eight',
        photos: {small: null, large: null},
        followed: false
    }]

    const action = actionsUsers.addMoreUsersActionCreator(users)

    const userReducerTest1= usersReducer(initialState,action)

    expect(userReducerTest1.users.length).toBe(2)
    expect(userReducerTest1.users[0].id).toBe(1235)
    expect(userReducerTest1.users[2]).toBeUndefined()


}))

test('user change page and total count action test', (() => {

    const actionChangePage = actionsUsers.changeCurrentPageActionCreator(10)
    const actionChangeTotalCount = actionsUsers.changeTotalCountActionCreator(11)

    const userReducerTest1= usersReducer(initialState,actionChangePage)
    const userReducerTest2= usersReducer(initialState,actionChangeTotalCount)

    expect(userReducerTest1.currentPage).toBe(10)
    expect(userReducerTest2.totalCount).toBe(11)

}))
