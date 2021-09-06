export const getWebSocket = () => {
    return new WebSocket ( 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx' );
}