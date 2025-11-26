import React from 'react'

import Hero from './Hero'
import About from '../Components/About'
import DonationCardSection from '../Components/DonationCardSection'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
import Impact from '../Components/Impact'
import Volunter from '../Components/Volunter'

const Home = () => {
  return (
    <div>
      
        <Hero/>
        <About/>
        <DonationCardSection/>
        <Testimonial/>
        <Impact/>
        <Volunter/>
  

      
    </div>
  )
}

export default Home
