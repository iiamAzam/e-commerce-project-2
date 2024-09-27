import { useState } from 'react'
import './index.css';
import Header from './componenets/header'
import Footer from './componenets/footer'
import { Outlet } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </>
  )
}

export default App
