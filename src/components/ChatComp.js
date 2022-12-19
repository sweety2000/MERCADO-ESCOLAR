import React, { useEffect } from "react";
import { useState } from "react";
import "./ChatClient.css";
import "react-dom";
import ScrollToBottom from 'react-scroll-to-bottom';

export default function ChatComp({socket, username, chat}){
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if(message !==""){
            const messageData = {
                chat: chat,
                sender: username,
                message: message,
                time: new Date(Date.now()).getHours()
                 + ":" +
                 new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data)=>{
            setMessageList((list) => [...list, data]);
        })
    },[socket]); 

    return(
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                {messageList.map((messageContent)=> {
                    return (
                        <div className="message" id={username === messageContent.sender? "you" : "other"}>
                            <div>
                                <div className="message-content">
                                    <p>{messageContent.message}</p>
                                </div>
                                <div className="message-meta">
                                    <p id="time">{messageContent.time}</p>
                                    <p id="author">{messageContent.sender}</p>
                                </div>
                            </div>
                        </div>

                    );
                })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input type="text"  value={message} placeholder="Hello..."
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
                onKeyPress={(event) => {
                    event.key==="Enter" && sendMessage();
                }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}