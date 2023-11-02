import React from 'react'
import one from '../assets/01.png'
import onepic from '../assets/01pic.png'
import handArrow from '../assets/point1.png'
import two from '../assets/02.png'
import twopic from '../assets/02pic.png'

export default function Benifits() {
    return (
        <div className='bg-[#222222] text-white flex flex-col justify-center items-center' >
            <div className=' text-2xl md:text-4xl font-semibold text-white text-center mt-6'>Unlock exclusive benefits from <span className='text-[#696DCA] '> Mentifyme</span></div>
            <div className='text-base mb-5 md:mb-0 md:text-lg font-semibold text-white ml-4 '>Learn from the Guidance of mentor from top IITs/AIIMS</div>
            <div className='flex flex-row items-center w-full justify-between'>
                <div><img src={one} className='hidden md:block m-3 w-24 ml-6' alt="" /></div>
                <div className='ml-5 md:ml-0'>
                    <div className='flex flex-row items-center'>
                        <div><img src={one} className='m-3 w-12 ml-6 block md:hidden' alt="" /></div>
                        <div className='text-2xl font-semibold text-white mb-2'><span className='text-[#696DCA]'>Personalised</span> Study Plan</div>
                    </div>
                    <div className='flex flex-row items-center mb-2'><img src={handArrow} className='mr-3' alt="" /> India's First AI based Personalised Timetable for free.</div>
                    <div className='flex flex-row items-center mb-2'><img src={handArrow} className='mr-3' alt="" />  Get Your Timetable tracked by Our App,</div>
                    <div className='flex flex-row items-center mb-2'><img src={handArrow} className='mr-3' alt="" /> Minimize your time wastage by following the customized study schedule.</div>
                    <div className='mt-4'><button className='bg-[#696DCA] pr-6 pl-6 pt-4 pb-4 text-2xl text-white rounded-md mr-3 flex flex-row relative'>Create Timetable</button></div>
                </div>
                <div><img src={onepic} className='hidden md:block w-80' alt="" /></div>
            </div>
            <div className='flex flex-row-reverse items-center w-full justify-between mt-16 mb-16'>
                <div><img src={two} className='hidden md:block m-3 w-24 mr-6' alt="" /></div>
                <div className='ml-5 md:ml-0'>
                    <div className='flex flex-row items-center'>
                        <div><img src={two} className='block md:hidden ml-6 m-3 w-12 mr-6' alt="" /></div>
                        <div className='text-2xl font-semibold text-white mb-2'>Strategies Your Preparation with <span className='text-[#696DCA]'>Experts</span> </div>
                    </div>
                    <div className='flex flex-row items-center mb-2'><img src={handArrow} className='mr-3' alt="" /> 30 min video call with mentor from top IITs/AIIMS</div>
                    <div className='flex flex-row items-center mb-2'><img src={handArrow} className='mr-3' alt="" />Detailed analysis of your level of preparation.</div>
                    <div className='flex flex-row items-center mb-2'><img src={handArrow} className='mr-3' alt="" />Strategy to attempt mock papers,tips to boost your preparation and many more.</div>
                    <div className='mt-4'><button className='bg-[#696DCA] pr-6 pl-6 pt-4 pb-4 text-2xl text-white rounded-md mr-3 flex flex-row relative'>Creat Timetable</button></div>
                </div>
                <div><img src={twopic} className='hidden md:block w-80' alt="" /></div>
            </div>

        </div>
    )
}
