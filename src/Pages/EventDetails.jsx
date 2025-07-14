import React from 'react'
import "../Css/EventDetails.css"
import Banner from "../Components/Banner"
import EventDtl from "../Components/EventDtl"
import EventDtl2 from '../Components/EventDtl2'

import Learn from "../Components/Learn"
import BonusOffer from "../Components/BonusOffer"
import Who from '../Components/Who'


const EventDetails = () => {
  return (
    <div>
{/* <Banner/> */}
<EventDtl/>
<EventDtl2/>

<Learn/>
<Who/>
<BonusOffer/>

    </div>
  )
}

export default EventDetails