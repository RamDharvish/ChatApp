import React, { useState } from 'react';
import './main.css';
import logo from './Components/istockphoto-1281337303-170667a.jpg';
import Chat from './Components/Chat';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './config/firebase';

function Main() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div className='App'>
      {user ? (
        <Chat user={user} />
      ) : (
        <div className='p-5 text-center'>
          <div>
            <img
              src={logo}
              alt="logo"
              className='pr-2 '
              width={400}
              height={400}
              style={{ borderRadius: 200 }}
            />
          </div>
          <div>
            <button
              className='btn btn-primary'
              style={{ marginTop: "50px" }}
              onClick={handleSignIn}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
