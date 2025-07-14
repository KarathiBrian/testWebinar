import React from 'react'
import "../Css/Home.css"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import newImg from "../assets/nw1.jpg"

const Home = () => {
const navigate= useNavigate()

const registerNavigate=()=>{
navigate("/register")
}
const detailsNavigate=()=>{
navigate("/details")
}






  return (
    <div>
<div className='outerBig'>
<div className='containerHold'>
<div className='holder'>


<div className='up'>
<img src={newImg} alt="" />

</div>

<div className='down'>

<button onClick={registerNavigate}>Register</button>

<button onClick={detailsNavigate}>Event details</button>
</div>


</div>
</div>










</div>
    </div>
  )
}
export default Home
