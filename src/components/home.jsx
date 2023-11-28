import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
  return (
    <>
      <div className='home'>
        <h1 className='title'>HIGHRISE</h1>
        <p className='catch'>STREETWEAR CLOTHING</p>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to="store"><button className='shop-now'>SHOP NOW</button></Link>
      </div>
    </>
  )
}

export default Home