import { useState, useEffect } from 'react';

export const useWebsocket = (urlSocket: string, connectionMessage: string, callback: (message: MessageEvent<any>) => void) => {
    
    const [socketState, setSocket] = useState<WebSocket>()

    useEffect(() => {

        const socket = new WebSocket(urlSocket)

        socket.onopen = () => socket.send(connectionMessage)
        socket.onclose = () => console.log("websocket closed")

        setSocket(socket)

        socket.addEventListener("message", (event) => {
            callback(event)
        })        

        return () => {
            
            socket.close()
        }

    }, [urlSocket, connectionMessage])

    return {socket: socketState}

}