import React from 'react'
import Navbar from './Navbar'
import PremiumHero from './PremiumHero'
import Testimonial from './Testimonial'
import Footer from './Footer.js'
import Confused from './Confused'
import WhyMentify from './WhyMentify'

export default function PremiumPage() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar></Navbar>
      <PremiumHero></PremiumHero>
      <Testimonial></Testimonial>
      <WhyMentify></WhyMentify>
      <Confused></Confused>
      <Footer></Footer>
    </div>
  )
}
