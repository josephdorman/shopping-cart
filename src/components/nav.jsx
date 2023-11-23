import { Link } from "react-router-dom";
import '../styles/nav.css'

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/"><button>HOME</button></Link></li>
          <li><Link to="store"><button>STORE</button></Link></li>
          <li><Link to="cart"><button>CART</button></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav