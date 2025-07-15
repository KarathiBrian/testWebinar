import React from 'react'
import "../Css/Nav.css"
import pic1 from "../assets/1.jpg"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>

<div className='nav'>

<div className='innerNav'>
  <Link to="/"><h5>Home</h5></Link>


<Link to="/about"> <h5>About</h5></Link>





</div>
</div>








    </div>
  )
}

export default Nav