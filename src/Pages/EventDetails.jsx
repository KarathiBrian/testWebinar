import React from 'react'
import "../Css/EventDetails.css"
import Banner from "../Components/Banner"
import EventDtl from "../Components/EventDtl"
import EventDtl2 from '../Components/EventDtl2'
import Footer from '../Components/Footer'
import Learn from "../Components/Learn"
import BonusOffer from "../Components/BonusOffer"
import Who from '../Components/Who'


const EventDetails = () => {
  return (
    <div className='yes'>
{/* <Banner/> */}
<EventDtl/>
<EventDtl2/>

<Learn/>
<Who/>
<BonusOffer/>
<Footer/>

    </div>
  )
}

export default EventDetails