import React from 'react'
import whymentify1 from '../assets/bookcall/whymentify1.png'
import whymentify2 from '../assets/bookcall/whymentify2.png'
import whymentify3 from '../assets/bookcall/whymentify3.png'
import whymentify4 from '../assets/bookcall/whymentify4.png'
import rightclick from '../assets/rightclick.png'
import leftclick from '../assets/leftclick.png'

export default function BookWhyMentify(props) {
    return (
        <div className='flex flex-col items-center mt-8 overflow-hidden'>
            <div className='text-[#696DCA] text-xs font-normal'>WHAT WE PROVIDE</div>
            <div className='text-lg font-medium mb-4'>Why Mentifyme?</div>
            <div className='md:flex flex-row overflow-x-hidden hidden'>

                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[23vw]  p-4 mr-4'>
                    <img src={whymentify1} alt="" />
                    <div className='text-lg font-medium text-[#191D23] text-center'>Top-Notch Mentors</div>
                    <div className='text-sm font-normal text-[#3E4A59] text-center'>Our mentors have aced the toughest exams and are ready to share their secrets to success with you.</div>
                </div>
                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[23vw]  p-4 mr-4'>
                    <img src={whymentify2} alt="" />
                    <div className='text-lg font-medium text-[#191D23] text-center'>Flexible Scheduling</div>
                    <div className='text-sm font-normal text-[#3E4A59] text-center'>Provides flexible scheduling options to accommodate your busy lifestyle, ensuring that mentorship are accessible when it suits you best.</div>
                </div>
                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[23vw]  p-4 mr-4'>
                    <img src={whymentify3} alt="" />
                    <div className='text-lg font-medium text-[#191D23] text-center'>Emotional & Mental Support</div>
                    <div className='text-sm font-normal text-[#3E4A59] text-center'>We're here to help you with any challenges you face while studying, offering support when you need it in terms of emotional and mental too.</div>
                </div>
                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[23vw]  p-4 mr-4'>
                    <img src={whymentify4} alt="" />
                    <div className='text-lg font-medium text-[#191D23] text-center'>Proven Results</div>
                    <div className='text-sm font-normal text-[#3E4A59] text-center'>Our track record of success speaks for itself. Many students who choose Mentifyme have gone on to achieve their academic and professional goals.</div>
                </div>
            </div>
            <div className='flex flex-row overflow-x-hidden md:hidden trans'>

                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[60vw]  p-4 mr-4'>
                    <img src={whymentify1} alt="" />
                    <div className='text-base font-medium text-[#191D23] text-center'>Top-Notch Mentors</div>
                    <div className='text-xs font-normal text-[#3E4A59] text-center'>Our mentors have aced the toughest exams and are ready to share their secrets to success with you.</div>
                </div>
                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[60vw]  p-4 mr-4'>
                    <img src={whymentify2} alt="" />
                    <div className='text-base font-medium text-[#191D23] text-center'>Flexible Scheduling</div>
                    <div className='text-xs font-normal text-[#3E4A59] text-center'>Provides flexible scheduling options to accommodate your busy lifestyle, ensuring that mentorship are accessible when it suits you best.</div>
                </div>
                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[60vw]  p-4 mr-4'>
                    <img src={whymentify3} alt="" />
                    <div className='text-base font-medium text-[#191D23] text-center'>Emotional & Mental Support</div>
                    <div className='text-xs font-normal text-[#3E4A59] text-center'>We're here to help you with any challenges you face while studying, offering support when you need it in terms of emotional and mental too.</div>
                </div>
                <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[60vw]  p-4 mr-4'>
                    <img src={whymentify4} alt="" />
                    <div className='text-base font-medium text-[#191D23] text-center'>Proven Results</div>
                    <div className='text-xs font-normal text-[#3E4A59] text-center'>Our track record of success speaks for itself. Many students who choose Mentifyme have gone on to achieve their academic and professional goals.</div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center mb-5 md:hidden'>
                <img src={leftclick} className='mr-10' alt=""  />  
                <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
                <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                <img src={rightclick} className='ml-10' alt=""  />
            </div>
            <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[13rem] text-center rounded mt-4 '><button>Book call ₹399 only </button></div>
        </div>
    )
}
