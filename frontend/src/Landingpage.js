import React from 'react'
import Navbar from './components/Navbar'
import Benifits from './components/Benifits'
import Students from './components/Students'
import Mentors from './components/Mentors'
import SocialMediaPresence from './components/SocialMediaPresence'
import Footer from './components/Footer'
import WhyChoose from './components/WhyChoose'
import Hero from './components/Hero'
import HeroSubSection from './components/HeroSubSection'

export default function Landingpage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <HeroSubSection></HeroSubSection>
      <Students></Students>
      <Benifits></Benifits>
      <WhyChoose></WhyChoose>
      <Mentors></Mentors>
      <SocialMediaPresence></SocialMediaPresence>
      <Footer></Footer>
    </div>
  )
}
