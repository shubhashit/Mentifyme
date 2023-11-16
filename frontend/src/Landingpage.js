import React from 'react'
import { useEffect, useState } from 'react';
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
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make a GET request
    async function fetchdata (){

      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
      }

      let response = await fetch("http://127.0.0.1:8000/api/index/", {
        method: "GET",
        headers: headersList
      });

      let data = await response.json(); // resopnse to josn format
      setData(data)
      console.log(data);
      console.log(data.banner)
    }
    fetchdata();
  }, []); 
  console.log(data)
  return (
    <div>
      <Navbar></Navbar>
      {data && <Hero images={data.banner}></Hero>} {/* rendiring conponent with props after the data is fetched for the api  */}
      <HeroSubSection></HeroSubSection>
      {data && <Students images={data.studentrev}></Students>}
      <Benifits></Benifits>
      <WhyChoose></WhyChoose>
      {data && <Mentors images={data.mentorview}></Mentors>}
      {data && <SocialMediaPresence images={data.social}></SocialMediaPresence>}
      <Footer></Footer>
    </div>
  )
}
