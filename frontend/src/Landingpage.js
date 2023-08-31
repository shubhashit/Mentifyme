import React from 'react'
import Navbar from './components/Navbar'
import Benifits from './components/Benifits'
import Students from './components/Students'
import Mentors from './components/Mentors'
import SocialMediaPresence from './components/SocialMediaPresence'
import Footer from './components/Footer'

export default function Landingpage() {
  return (
    <div>
      <Navbar></Navbar>
      <Benifits></Benifits>
      <Students></Students>
      <Mentors></Mentors>
      <SocialMediaPresence></SocialMediaPresence>
      <Footer></Footer>
    </div>
  )
}
