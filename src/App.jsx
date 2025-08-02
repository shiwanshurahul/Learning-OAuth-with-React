import { useState } from 'react'

import './App.css'
import { useAuth0 } from '@auth0/auth0-react';

//OAuth has no dependency on anything

function App() {
  //1. wrap app with Auth0Provider in main.jsx
  //2. isi Auth0Provider se provide domain, clientId, and redirect_uri
  //3. useAuth0 hook to access auth0 methods and properties for login(loginWithRedirect), register, logout (logout), user info, etc.

  const { user, loginWithRedirect, isAuthenticated, logout  } = useAuth0();
  //ye sb inbuilt hai user -> btaega konsa user logged in hai ya nahi, isAuthenticated -> btaega user logged in hai ya nahi
  return (
    <div className='App'>  
    { isAuthenticated && <h3>Hi {user?.name}</h3> }

    { isAuthenticated ?
      (<button onClick={(e) => logout(e)} className='my-btn'>Log out</button>
    ) :  (
      <button onClick={(e) => loginWithRedirect(e)} className='my-btn'>Login with redirect
      </button>
  )}
        
    </div>
  )
}

export default App
