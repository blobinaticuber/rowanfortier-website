import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home'
import { Projects } from './pages/Projects'

import { Header } from './components/header'

function App() {

  return (
    <div style={{paddingBottom: "10rem"}}>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
