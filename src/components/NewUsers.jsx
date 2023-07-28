import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';
import axios from 'axios'

function NewUsers({ newContacts, setNewContacts, setActiveUser, setUserName, setConversationId }) {

    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/get-users")

            setNewUsers(response.data.results)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal
            isOpen={newContacts}
            onRequestClose={() => setNewContacts(false)}
            contentLabel="Example Modal"
        >
            <div className='newUsers'>
                <h2>Mesaj Gönder</h2>
                {newUsers.map((user) => (
                    <div
                        className='user'
                        key={user.id}
                        onClick={() => {
                            setActiveUser(user.id);
                            // setConversationId(user.id)
                            setUserName(user.username);
                            setNewContacts(false)
                        }}
                    >
                        <div className="userImg">
                            <img src="https://myeduco.com/wp-content/uploads/2019/03/Blank-profile.png" />
                        </div>
                        <div className='userContent'>
                            <div className="userContentName">{user.username}</div>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => setNewContacts(false)}>
                <AiFillCloseCircle />
            </button>
        </Modal>
    )
}

export default NewUsers