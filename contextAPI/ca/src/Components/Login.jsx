import { useState, useContext } from 'react';
import React from 'react';

import UserContext from '../Context/UserContext';

function Login() {

const [username,setUsername]=useState('')
const[password, setPassword] = useState('');
// eslint-disable-next-line no-undef
const {setUser}= useContext(UserContext)
const handlesubmit
=(e)=>{
e.preventDeafult()
setUser({username,setUsername})
}
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
       placeholder='usename' />
       {"     "}
      <input type="text" 
      
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='password' />
             {"     "}
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
