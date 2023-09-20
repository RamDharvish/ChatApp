import React from 'react';
import '../main.css';

function ChatMessage({ text, logo, email, user, name }) {
  return (
    <div>
      {user.email === email ? (
        <div className='d-flex justify-content-end right-content'>
          <div className="message-name">{name}</div>
          <span className='message-right'>
            <span className='message-text'>{text}</span>
            <img src={logo} alt='logo' className='logo-icon' />
          </span>
        </div>
      ) : (
        <span className='d-flex message-left'>
          <img src={logo} alt='logo' className='logo-icon' />
          <span className='message-text'>{text}</span>
        </span>
      )}
    </div>
  );
}

export default ChatMessage;
