import React, { useState } from 'react'
import MessageMain from './MessageMain'
import Users from './Users'
import "../style/Connection.css"

function Connection({ setIsLoginControl }) {

    const [usersList, setUsersList] = useState([]);
    const [userName, setUserName] = useState("");
    const [activeUser, setActiveUser] = useState(null);
    const [conversationId, setConversationId] = useState(null);
    const [messages, setMessagess] = useState([]);

    const accessToken = localStorage.getItem("access_token");




    return (
        <div id='connection'>
            <Users
                accessToken={accessToken}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                setIsLoginControl={setIsLoginControl}
                usersList={usersList}
                setUsersList={setUsersList}
                setUserName={setUserName}
                setConversationId={setConversationId}
                setMessagess={setMessagess}
            />
            {activeUser !== null ? (
                <MessageMain
                    accessToken={accessToken}
                    activeUser={activeUser}
                    setIsLoginControl={setIsLoginControl}
                    userName={userName}
                    conversationId={conversationId}
                    messages={messages}
                    setMessagess={setMessagess}
                />) : (
                <div className='firstPage'>
                    <h1><span>MesajClup</span>'a Hoş geldin</h1>
                    <span className='firstPageInfo'>Sohbete başlamak için kişi seçin!</span>
                    <p></p>
                </div>
            )}
        </div>
    )
}

export default Connection