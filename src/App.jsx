import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './components/navigation/Navbar'
import NavContext from './context/NavContext'
import FullScreenNav from './components/navigation/FullScreenNav'

const App = () => {
  return (
    <NavContext>
      <div className='overflow-x-hidden'>
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/agency' element={<Agency />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </NavContext>
  )
}

export default App