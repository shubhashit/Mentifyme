import React from 'react'
import whyus from '../assets/whyus.png'

export default function WhyChoose() {
    
    function Show (){
        console.log("show rest of the subtext")
    }
    return (
        <div className='h-fit md:h-[100vh] w flex flex-col md:flex-row md:justify-between items-center'>
            <div className='m-4'>
                <div className='text-2xl md:text-5xl font-bold text-center'>Our <span className='text-[#696DCA]'>Why to Choose </span> Mentifyme</div>
                <div className='mt-3 hidden md:block'>MentifyMe.com stands out as the premier choice for students aspiring to excel in the highly competitive IIT JEE and NEET examinations. What sets us apart is our unwavering commitment to personalized mentorship. Unlike other mentorship platforms, we offer a dedicated and specialized team of mentors who are experts in these specific exams. Our mentors provide tailored guidance, meticulously crafted study plans, and one-on-one sessions, ensuring that every student's unique strengths and weaknesses are addressed comprehensively.</div>
                <div className='mt-3 md:hidden block text-base' >MentifyMe.com stands out as the premier choice for students aspiring to excel in the highly competitive IIT JEE and NEET examinations. <span className='text-[#696DCA] cursor-pointer' onClick={Show}>Read more....</span><span className='hidden'>What sets us apart is our unwavering commitment to personalized mentorship. Unlike other mentorship platforms, we offer a dedicated and specialized team of mentors who are experts in these specific exams. Our mentors provide tailored guidance, meticulously crafted study plans, and one-on-one sessions, ensuring that every student's unique strengths and weaknesses are addressed comprehensively.</span></div>
            </div>
            <img className='md:w-[40%] md:m-4 w-[95%] mb-10 md:mb-0' src={whyus} alt="" />
        </div>
    )
}
