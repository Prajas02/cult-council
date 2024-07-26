import React from 'react'
import { Navbar, Footer} from './components/index.js'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default App
