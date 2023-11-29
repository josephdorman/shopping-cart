import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../styles/nav.css'

function Nav({ numItems }) {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/"><button>HOME</button></Link></li>
          <li><Link to="store"><button>STORE</button></Link></li>
          <li><Link to="cart"><button>CART ( {numItems} )</button></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav

Nav.propTypes = {
  numItems: PropTypes.number.isRequired
}