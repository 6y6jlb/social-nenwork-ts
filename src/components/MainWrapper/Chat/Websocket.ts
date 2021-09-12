const getWebSocket = () => {
    return new WebSocket ( 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx' );
}

export const wsConnect = () => {
    const ws = getWebSocket();
    ws.onopen = function() {
        // subscribe to some channels
        // ws.send(JSON.stringify({
        //     //.... some message the I must send when I connect ....
        // }));
    };

    ws.onmessage = function(e) {
        // console.log('Message:', e.data);
    };

    ws.onclose = function(e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        setTimeout(function() {
            wsConnect();
        }, 1000);
    };

    ws.onerror = function(err:any) {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        ws.close();
    };
    return ws
};
