import React from 'react'

function MessageMainTop({ userName }) {
    return (
        <div className='messageTop'>
            <div className='userImg'>
                <img src="https://myeduco.com/wp-content/uploads/2019/03/Blank-profile.png" />
            </div>
            <div className="userName">{userName}</div>
        </div>
    )
}

export default MessageMainTop