import { useState } from 'react'
import './styles/App.css'
import Header from './components/header'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}

export default App
