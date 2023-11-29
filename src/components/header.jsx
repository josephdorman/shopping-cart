import { Link } from 'react-router-dom'
import Nav from './nav'
import '../styles/header.css'

function Header({ numItems }) {
  return (
    <>
      <header>
        <Link to="/"><h1>HIGHRISE</h1></Link>
        <Nav numItems={numItems}></Nav>
      </header>
    </>
  )
}

export default Header