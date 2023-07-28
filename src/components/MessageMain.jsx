import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MessageMainTop from './MessageMainTop'
import MessageMainMiddle from './MessageMainMiddle'
import MessageMainBottom from './MessageMainBottom'

function MessageMain({ accessToken, activeUser, userName, conversationId }) {

    const [text, setText] = useState("");
    const [messages, setMessagess] = useState([]);

    // -----Mesajları çekme------------------------------------------------

    useEffect(() => {
        fetchMessages();
    }, [activeUser])

    const fetchMessages = async () => {
        try {
            if (conversationId !== null) {
                const response = await axios.get(`http://127.0.0.1:8000/api/message/${conversationId}/get-messages`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setMessagess(response.data.results);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    // ---Mesaj gönderme--------------------------------------------------

    const postData = {
        "receiver": activeUser,
        "content": text
    }

    const fetchPostMessage = async () => {
        try {
            await axios.post("http://127.0.0.1:8000/api/message/send-message/", postData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <form className='messageMain'>

            <MessageMainTop userName={userName} />
            <MessageMainMiddle messages={messages} />
            <MessageMainBottom text={text} setText={setText} fetchPostMessage={fetchPostMessage} fetchMessages={fetchMessages} />
        </form>
    )
}

export default MessageMain