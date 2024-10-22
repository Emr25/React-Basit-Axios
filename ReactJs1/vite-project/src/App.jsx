import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import GetSingle from './components/GetSingle';
import Update from './components/Update';
import Delete from './components/Delete';


const App = () => {
  return (
    
      <Router>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/create" element={<Create />} />
      
      <Route path="/update/:id" element={<Update />} />
      <Route path="/:id" element={<GetSingle />} />
      
    </Routes>
  </Router>


    
  

  
  )
}

export default App