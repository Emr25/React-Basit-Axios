import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
const GetSingle = () => {
const API = "http://localhost:3000/users"
const {id}=useParams();
const [data, setdata] = useState([])




const getData = async ()=>{
    const response = await axios.get(`${API}/${id}`)
    setdata(response.data)
}
useEffect(()=>{
  getData()
},[])
  return (
    <div>
    <h1>Detail Page Welcome</h1>
    <h4>{data.id}</h4>
    <h4>{data.username}</h4>
    <h4>{data.password}</h4>
    </div>
  )
}

export default GetSingle