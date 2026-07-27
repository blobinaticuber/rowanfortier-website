import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Cubing } from './pages/Cubing'
import { Juggling } from './pages/Juggling'
import { Header } from './components/header'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/cubing" element={<Cubing/>} />
        <Route path="/juggling" element={<Juggling/>} />
      </Routes>
    </Router>
  )
}

export default App
