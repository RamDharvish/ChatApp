import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import {
  QueryDocumentSnapshot,
  addDoc,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../config/firebase';

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const messageRef = collection(db, "messages");

  const handleSubmit = async () => {
    const date = new Date();
    await addDoc(messageRef, {
      text,
      email: user.email,
      logo: user.photoURL,
      name: user.displayName,
      date,
    });
    setText("");
    // Scroll to the bottom of the chat
    setTimeout(() => document.querySelector('#copyright').scrollIntoView({ behavior: 'smooth' }), 500);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(messageRef, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data()).sort((a, b) => a.date - b.date);
      setMessages(newMessages);
      // Scroll to the bottom of the chat
      setTimeout(() => document.querySelector('#copyright').scrollIntoView({ behavior: 'smooth' }), 500);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="justify-content-center">
        <h2 className='text-primary'>Chat App</h2>
      </div>
      <div className="row mt-4" style={{width:"100%"}}>
        <div className="col-xl-4 col-lg-4 col-sm-3 col-2" style={{width:" 15%"}}></div>
        <div className="col-xl-4 col-lg-4 col-sm-6 col-8 chat-message" style={{width:"70%"}}>
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} user={user} />
          ))}
          <div className="d-flex mt-2">
            <input
              type="text"
              className='form-control'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className='btn btn-secondary ms-3'
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
          <div className="copyright mt-3" id='copyright'>
            My Chat App
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
