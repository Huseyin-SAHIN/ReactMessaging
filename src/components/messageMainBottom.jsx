import React from 'react'
import { RiSendPlane2Fill } from 'react-icons/ri'

function messageMainBottom({ text, setText, fetchPostMessage, fetchMessages }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPostMessage();
    setText("")
    fetchMessages(); // Silinecek
  }

  const handleTextareaKeyDown = (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      const form = event.target.form;
      const submitButton = form.querySelector('[type="submit"]');
      if (submitButton) {
        submitButton.click();
      }
    }
  }

  return (
    <div className='messageBottom'>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows="1"
        placeholder="Mesajınızı giriniz..."
        onKeyDown={handleTextareaKeyDown}
      ></textarea>
      <button className='messageSubmitBtn' onClick={handleSubmit} type='submit'>
        <RiSendPlane2Fill />
      </button>
    </div >
  )
}

export default messageMainBottom