import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {
const API = "http://localhost:3000/users"
const [data, setdata] = useState([])
const navigate = useNavigate()

const getData = async()=>{
  const response = await axios.get(API)
  setdata(response.data)
}
const deleteData =async(id)=>{
    await axios.delete(`${API}/${id}`)
    navigate("/")
}

useEffect(()=>{
   getData()
},[])


  return (
    <div>
      <h1>Home Page</h1>
      {data.map((datas)=>(
        <div key={datas.id}>
           <h3>{datas.username}</h3>
           <h3>{datas.password}</h3>
           <div>
          <Link  style={{padding:"10px"}} to={`/${datas.id}`} >View Details</Link>
          <Link style={{padding:"10px"}} to={`update/${datas.id}`} >Güncelle</Link>
          <button onClick={()=>deleteData(datas.id)}>Delete</button>
            </div>
          
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Home