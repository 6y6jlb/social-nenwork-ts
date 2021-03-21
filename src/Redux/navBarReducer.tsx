import photo from "../images/face.png";


export type FriendIconsFromNAvBArType = {
    id: number
    name: string
    photoUrl: string
}

export type NavLinkBarFromNAvBArType = {
    id: number
    item: string
}

export type InitialStateNavBarType = typeof initialState

const initialState = {
    friendsIcons: [
        {id: 1, name: 'Sveta', photoUrl: photo},
        {id: 2, name: 'Zhenya', photoUrl: photo},
        {id: 3, name: 'Ivan', photoUrl: photo},
        {id: 4, name: 'Fekls', photoUrl: photo},
        {id: 5, name: 'Dno', photoUrl: photo},
        {id: 6, name: 'Alexey', photoUrl: photo},
    ] as Array<FriendIconsFromNAvBArType>,
    navLinkBar: [
        {id: 1, item: 'profile'},
        {id: 2, item: 'dialogs'},
        {id: 3, item: 'friends'},
        {id: 4, item: 'news'},
        {id: 5, item: 'audio'},
        {id: 6, item: 'settings'}
    ] as Array<NavLinkBarFromNAvBArType>
}

const navBarReducer = (state = initialState, action: any): InitialStateNavBarType => {
    return {...state}
}

export default navBarReducer;