import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = () => {
 const API = "http://localhost:3000/users"

 const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const navigate = useNavigate();
const createData = async()=>{
  await axios.post(API,{username,password})
  navigate('/home');
  setpassword("")
  setusername("")
  
}
  return (
    <div>
      <h1>Create Page</h1>

      <form>
        <input value={username} placeholder='Username Giriniz' onChange={(e)=>{setusername(e.target.value)}}  />
        <input type='password' value={password} placeholder='Password Giriniz' onChange={(e)=>{setpassword(e.target.value)}} />
        <button onClick={createData}>Oluştur</button>
      </form>
    </div>
  )
}

export default Create