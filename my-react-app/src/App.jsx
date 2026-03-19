import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cloudflareLogo from './assets/Cloudflare_Logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home'
import { Projects } from './pages/Projects'

import { Header } from './components/header'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('unknown')

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  )
}

export default App
