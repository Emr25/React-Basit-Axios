import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Update = () => {
const API = "http://localhost:3000/users"
const navigate = useNavigate();
const {id}=useParams();

const [username, setusername] = useState("")    
const [password, setPassword] = useState("")

const getData =async ()=>{
    const response = await axios.get(`${API}/${id}`)
    setusername(response.data.username)
    setPassword(response.data.password)
    
 }
 useEffect(()=>{
   getData();
 },[id])

 const updateData = async(event)=>{
    await axios.put(`${API}/${id}`,{username,password})
    event.preventDefault();
    navigate('/home')
 }
  return (
    <div>
        <h1>Update Data</h1>
        <form onSubmit={updateData} >
            <input value={username} onChange={(e)=>setusername(e.target.value)}/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' >Güncelle</button>
        </form>
    </div>
  )
}

export default Update