import {actionsChat, WebSocketMessageType} from "../Redux/chatReducer";
import {Dispatch} from "redux";


let ws: WebSocket;

const closeHandler = () => {
    console.log ( 'CLOSE WS' );
    setTimeout ( createChanel, 3000 );
};


export const createChanel = () => {
    ws?.removeEventListener ( 'close', closeHandler );
    ws?.close ();
    ws = new WebSocket ( 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx' );
    ws.addEventListener ( 'close', closeHandler );
    ws.addEventListener ( 'message', messageHandler );
};

let subscribers = [] as SubscriberType[];

export const ChatAPI = {
    start: () => {
        createChanel ();
    },
    stop: () => {
        ws?.removeEventListener ( 'close', closeHandler );
        ws?.removeEventListener ( 'message', messageHandler );
        ws?.close ();
        subscribers = [];

    },
    onClose: () => {
        ws.onclose = function (e) {
            console.log ( 'Socket is closed. Reconnect will be attempted in 1 second.', e.reason );
            setTimeout ( function () {
                ChatAPI.start ();
            }, 1000 );
        };
    },
    subscribe: (callback: SubscriberType) => {
        subscribers.push ( callback );
        return () => {
            subscribers = subscribers.filter ( s => s !== callback );
        };
    },
    unSubscribe: (callback: SubscriberType) => {
        subscribers = subscribers.filter ( s => s !== callback );
    },
    sendMessage: (message: string) => {
        ws?.send ( message );
    },
};

let _newMessageHandler: ((messages: WebSocketMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (!_newMessageHandler) {
        _newMessageHandler = (messages) => {
            dispatch ( actionsChat.setMessages ( messages ) );
        };
    }
    return _newMessageHandler;
};

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse ( e.data );

    subscribers.forEach ( s => s ( newMessages ) );
};

// types
type SubscriberType = (messages: WebSocketMessageType[]) => void
