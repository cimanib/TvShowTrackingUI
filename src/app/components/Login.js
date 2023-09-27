"use client"

import React,{useState,useContext} from 'react'
import Styles from './login.module.css'
import { useRouter } from 'next/navigation';
import {useAppContext} from '../Lib/AppContext';

const  Login = () =>{

  const router = useRouter()
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {state, setState} = useAppContext()

  const handleSubmit = async event => {
     
    event.preventDefault();

    const data = {
       "email":username,
       "password": password
    }
    const res = await fetch('http://localhost:5271/api/users/login', {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
     })

     if(res.status === 200)
     { 
        router.refresh()
        router.push('/tvshows')
        
     }
}

 return (
<>
    <label>Welcome {state.user}</label>
    <div  className={Styles.container}> 
      <form onSubmit={handleSubmit}>
        <input 
          id="username"
          name="username"
          type="text"
          placeholder="email address"
          onChange={event => setUserName(event.target.value)}
          value={username}
        />
        <input 
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit" className={Styles.button}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Login;

