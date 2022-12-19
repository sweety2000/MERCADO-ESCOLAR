import "./ChatClient.css";
import io from 'socket.io-client';
import { useState } from "react";
import ChatComp from "./ChatComp";

const socket = io.connect("http://localhost:3001");

export default function Chatclient(){
    const [username, setUsername] = useState("");
    const[chat, setChat] = useState("");
    const[showChat, setshowChat] = useState(false);

    const joinChat = () =>{
        if(username !=="" && chat !== ""){
            socket.emit("join_chat", chat);
        }
        setshowChat(true);
    };

    return <div className="App">
        { !showChat ? (
        <div className="joinChatContainer">
        <h3>Join a Chat</h3>
        <input type="text" placeholder = "Shubham..." 
        onChange={(event) => {
            setUsername(event.target.value);
            }}/>
        <input type="text" placeholder = "Chat ID"onChange={(event) => {
            setChat(event.target.value);
            }}/>
        <button onClick={joinChat}>Join Chat</button>
        </div>
        )
        :(
        <ChatComp socket = {socket} username={username} chat = {chat}/>
        )
}
    </div>
}
// Chat reference taken from: https://github.com/machadop1407/react-socketio-chat-app