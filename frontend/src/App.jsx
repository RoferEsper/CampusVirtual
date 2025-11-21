import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingMantenimiento from './LandingMantenimiento.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingMantenimiento />} />
    </Routes>
  )
}

export default App
