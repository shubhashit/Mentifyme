import React from 'react'
import LineLeft from '../assets/LineLeft.png'
import LineRight from '../assets/LineRight.png'
import StudentsCard from './StudentsCard'
import social2 from '../assets/social2.png'
import social1 from '../assets/social1.png'
import social3 from '../assets/social3.png'
import SocialMediaCard from './SocialMediaCard'
import instagram from '../assets/contactsimg/instagram.png'
import linkedin from '../assets/contactsimg/linkedin.png'
import youtube from '../assets/contactsimg/youtube.png'
import rightclick from '../assets/rightclick.png'
import leftclick from '../assets/leftclick.png'

export default function SocialMediaPresence() {
  return (
    <div className='h-fit '>
      <div className='flex flex-row justify-between items-center mt-4 w-full'>
        <img src={LineLeft} className='h-4 w-1/4 hidden md:block' alt="" />
        <div className='text-3xl md:text-5xl font-bold text-center m-auto'>Our <span className='text-[#696DCA]'>Social Media</span> Presence</div>
        <img src={LineRight} className='h-4 w-1/4 hidden md:block' alt="" />
      </div>
      <div className='md:flex flex-row hidden '>
        <SocialMediaCard
          heading="Focus more on your desire than on your doubts."
          subtext=""
          footerText="View on Instagram"
          img={social1}
          logo = {instagram}
        ></SocialMediaCard>
        <SocialMediaCard
          heading="Here are 5 Free youtube tutorials we have shared on youtube that..."
          subtext="Our platform brings together a curated network of top-notch mentors from diverse fields, each with a proven track record of success. These mentors are passionate about sharing their knowledge, expertise, and life experiences to empower you on your journey to greatness..."
          footerText="View on Linkdien"
          img={social2}
          logo = {linkedin}
        ></SocialMediaCard>
        <SocialMediaCard
          heading="India's Best Personal Mentorship Platform| Bharat Ke Sapno Ki.."
          subtext="Our platform brings together a curated network of top-notch mentors from diverse fields, each with a proven track record of success. These mentors are passionate about sharing their knowledge, expertise, and life experiences to empower you on your journey to greatness..."
          footerText="View on youtub\"
          img={social3}
          logo = {youtube}
        ></SocialMediaCard>
      </div>
      <div className=' md:hidden'>
        {/* <SocialMediaCard
          heading= "Focus more on your desire than on your doubts."
          subtext = ""
          footerText = "View on Instagram"
          img = {social1}
        ></SocialMediaCard> */}
        <div className='flex flex-row md:hidden items-center'>

          <SocialMediaCard
            heading="Here are 5 Free youtube tutorials we have shared on youtube that..."
            subtext="Our platform brings together a curated network of top-notch men "
            footerText="View on Linkdien"
            img={social2}
            logo = {linkedin}
          ></SocialMediaCard>
          <SocialMediaCard
            heading="India's Best Personal Mentorship Platform| Bharat Ke Sapno Ki.."
            subtext="Our platform brings together a curated network of top-notch mentors from diverse fields, each "
            footerText="View on youtube"
            img={social3}
            logo = {youtube}
          ></SocialMediaCard>

        </div>
        <div className='flex flex-row justify-center items-center mb-10 mt-5'>
          <img src={leftclick} className='mr-10' alt="" />
          <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
          <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
          <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
          <img src={rightclick} className='ml-10' alt="" />
        </div>
      </div>
    </div>
  )
}
