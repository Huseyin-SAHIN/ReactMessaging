import React from 'react'
import { BiSolidChevronLeft } from 'react-icons/bi'

function MessageMainTop({ userName, setMobileControl }) {

    const handleSubmit = () => {
        setMobileControl(true)
    }

    return (
        <div className='messageTop'>
            <div className='backToMessages'>
                <BiSolidChevronLeft onClick={handleSubmit} />
            </div>
            <div className='userImg'>
                <img src="https://myeduco.com/wp-content/uploads/2019/03/Blank-profile.png" />
            </div>
            <div className="userName">{userName}</div>
        </div>
    )
}

export default MessageMainTop