import PropTypes from 'prop-types'
import './styles/App.css'
import Header from './components/header'
import { Outlet } from "react-router-dom"

function App({ numItems }) {
  return (
    <>
      <Header numItems={numItems}></Header>
      <div className='body'>
        <Outlet />
      </div>
    </>
  )
}

export default App

App.propTypes = {
  numItems: PropTypes.number.isRequired
}
