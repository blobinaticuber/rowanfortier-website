import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Hobbies } from './pages/Hobbies';

import { Header } from './components/header'

function App() {

  return (
    <div style={{paddingBottom: "10rem"}}>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
