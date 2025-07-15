import React from 'react'
import "../Css/Form.css"
import Footer from '../Components/Footer'

const Form = () => {
  return (
    <div className='formGoogle'>


<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScVc7cwoGxd7LWuDpX6Zq33h8DFXObKjnKFnvbdDMLgxP0W7Q/viewform?usp=sharing&ouid=100944596123287161908" width="100%" height="1800"  style={{border:"none"}}  ></iframe>

{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScVc7cwoGxd7LWuDpX6Zq33h8DFXObKjnKFnvbdDMLgxP0W7Q/viewform?embedded=true" width="100%" height="1800"  style={{border:"none"}}>Loading…</iframe> */}


<Footer/>

    </div>
  )
}

export default Form