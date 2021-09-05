import {AppStateType} from "../../Redux/reduxStore";


export const getMessages = (state: AppStateType) => state.chat.messages
