import React, { useEffect } from 'react'

const keepScrollBarAtBottom = () => {
  const chat = document.querySelector('.messageMiddle');
  chat.scrollTop = chat.scrollHeight;
}

function MessageMiddle({ messages }) {

  const getDate = (value) => {
    const date = new Date(value);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  useEffect(()=>{
    keepScrollBarAtBottom();
  },[messages])

  return (
    <div className='messageMiddle'>
      {messages.map((message) => {

        if (message.receiver.id === message.to_user.id) {
          return (
            <div className="message" key={message.id}>
              <span className='messageDate'>{getDate(message.sent_at)}</span>
              <div className='messageItem'>{message.content}</div>
            </div>
          )
        }
        else {
          return (
            <div className="message messageLeft" key={message.id}>
              <div className='messageItem'>{message.content}</div>
              <span className='messageDate'>{getDate(message.sent_at)}</span>
            </div>
          )
        }

      })}
    </div>
  )
}

export default MessageMiddle