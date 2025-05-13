import React from 'react'
import Button from '../components/ui/Button/Button'
import { motion } from 'motion/react'
import Hero from '../components/sections/Hero'
import HowWork from '../components/sections/HowWork'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonial'
import ContactUs from '../components/sections/ContactUs'
import BrandsPartner from '../components/layout/BrandsPartner'
const HomePage = () => {
  return (
    <div className='w-full overflow-hidden   '>
      <Hero/>
      <HowWork/>
      <BrandsPartner/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactUs/>
    </div>
  )
}

export default HomePage