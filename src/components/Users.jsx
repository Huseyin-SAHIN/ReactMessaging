import React, { useState, useEffect } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';
import Modal from 'react-modal';
import axios from 'axios';
import NewUsers from './NewUsers';


function Users({ accessToken,
  activeUser,
  setActiveUser,
  setIsLoginControl,
  usersList,
  setUsersList,
  setUserName,
  setConversationId,
  mobileControl,
  setMobileControl
}) {

  useEffect(() => {
    fetchSpeeches();
  }, [])

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContacts, setNewContacts] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchSpeeches = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/message/get-conversations/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setUsersList(response.data.results);
    }


    catch (err) {
      console.log(err);
    }
  }

  Modal.setAppElement('#root');  // Modal'ın çalışması için gerekli

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLoginControl(false)
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredUsers = usersList.filter((user) => {
    return (
      user.to_user.username.toLowerCase().includes(searchTerm.toLowerCase()) || user.last_message.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div id='users' className={!mobileControl ? "usersDrawr" : ""}>
      <div className='usersTop'>
        <div className='usersInfo'>
          <h2>Mesajlar</h2>
          <div className='userOperations'>
            <FaUserPlus onClick={() => setNewContacts(true)} />
            <AiFillSetting onClick={openModal} />
          </div>
        </div>

        <NewUsers
          newContacts={newContacts}
          setNewContacts={setNewContacts}
          setActiveUser={setActiveUser}
          setUserName={setUserName}
          setConversationId={setConversationId}
        />


        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>Sekmeyi Kapat</button>

          <button onClick={(e) => {
            e.preventDefault();
            handleLogOut();
          }
          }><RxExit /> Çıkış Yap</button>


        </Modal>
        <input id='searchMessage' onChange={handleInputChange} type="text" placeholder='Sohmet arama' />
      </div>
      {filteredUsers.map((user) => (
        <div key={user.id}
          className={`userMain ${activeUser === user.to_user.id && 'active'}`}
          onClick={() => {
            setActiveUser(user.to_user.id);
            setUserName(user.to_user.username);
            setConversationId(user.id)
            setMobileControl(false);
          }}>
          <div className="userImg">
            <img src="https://myeduco.com/wp-content/uploads/2019/03/Blank-profile.png" />
          </div>
          <div className='userContent'>
            <div className="userContentName">{user.to_user.username}</div>
            <span className="userContentLastMessage">{user.last_message.content}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users