import { useState } from 'react'
import './styles/App.css'
import Header from './components/header'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <div className='body'>
        <Outlet />
      </div>
    </>
  )
}

export default App
