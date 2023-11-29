import { Link } from 'react-router-dom'
import Nav from './nav'
import '../styles/header.css'

function Header() {
  return (
    <>
      <header>
        <Link to="/"><h1>HIGHRISE</h1></Link>
        <Nav></Nav>
      </header>
    </>
  )
}

export default Header