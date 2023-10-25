import React from 'react'
import WhyMentifyCard from './WhyMentifyCard'
import whymentify1 from '../assets/premiumPage/whymentify1.png'
import whymentify2 from '../assets/premiumPage/whymentify2.png'
import whymentify3 from '../assets/premiumPage/whymentify3.png'
import whymentify4 from '../assets/premiumPage/whymentify4.png'
import whymentify5 from '../assets/premiumPage/whymentify5.png'
import whymentify6 from '../assets/premiumPage/whymentify6.png'
import whymentify7 from '../assets/premiumPage/whymentify7.png'
import whymentify8 from '../assets/premiumPage/whymentify8.png'
import Why_Mentifyme from '../assets/premiumPage/Why_Mentifyme.png'

export default function WhyMentify() {
  return (
    <div className='m-8'>
      <div className='flex flex-row'>
        <img className='mr-16 ml-8 hidden md:block' src={Why_Mentifyme} alt="" />
        <div className='flex flex-row'>
          <WhyMentifyCard
            img={whymentify1}
            text="Customized Study Plans"
            subtext="Tailored study schedules designed to meet individua."
          ></WhyMentifyCard>
          <WhyMentifyCard
            img={whymentify2}
            text="Experienced Mentorship"
            subtext="Access to experienced mentors who provide guidance, "
          ></WhyMentifyCard>
          <WhyMentifyCard
            img={whymentify3}
            text="Practice Tests and Mock Exams"
            subtext="Regular practice tests and mock exams that mimic the real IIT JEE and NEET "
          ></WhyMentifyCard>
          <WhyMentifyCard
            img={whymentify4}
            text="Materials & Notes"
            subtext="High-quality study material, including textbooks, video lectures, and digital resources, d NEET."
          ></WhyMentifyCard>
        </div>
      </div>
      <div className='flex flex-row w-fit'>
        <WhyMentifyCard
          img={whymentify5}
          text="Performance Analytics"
          subtext="Detailed performance analytics, including score analysis and question-wise breakdowns"
        ></WhyMentifyCard>
        <WhyMentifyCard
          img={whymentify6}
          text="24/7 Doubt Resolution"
          subtext="Round-the-clock support for resolving doubts and clarifying concepts, ensuring students"
        ></WhyMentifyCard>
        <WhyMentifyCard
          img={whymentify7}
          text="College Application Support"
          subtext="Assistance with college applications, including and guidance on choosing the right institution"
        ></WhyMentifyCard>
        <WhyMentifyCard
          img={whymentify8}
          text="Weekly Live"
          subtext="Weekly Live Sessions of Community of Mentors where you can get to learn"
        ></WhyMentifyCard>
      </div>
    </div>
  )
}
