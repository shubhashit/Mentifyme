import React from 'react'
import periodictable from '../assets/afterlogin/periodic-table.png'
import relativity from '../assets/afterlogin/relativity.png'
import math from '../assets/afterlogin/math (1).png'
import ExclusiveRibbon from '../assets/afterlogin/ExclusiveRibbon.png'
import AppleLogo from '../assets/afterlogin/AppleLogo.png'
import playstore from '../assets/afterlogin/playstore.png'
import Rectangle1586 from '../assets/afterlogin/Rectangle1586.png'
import Rectangle1587 from '../assets/afterlogin/Rectangle1587.png'
import upcomingEvent from '../assets/afterlogin/upcomingEvent.png'
import highlightsPic from '../assets/afterlogin/highlightsPic.svg'

export default function AfterLogin() {
    return (
        <div className='w-full flex flex-row h-[100vh]'>
            <div className='w-1/4 bg-[#D9D9D926]  h-full'>
                <div className='m-10 font-bold text-lg'>Analyse Your Subjects</div>
                <div className='flex flex-col justify-center w-full items-center'>
                    <div className='bg-[#FFB6B642] flex flex-row justify-between items-center w-4/5 p-2 rounded-md pt-4 pb-4'>
                        <div><img src={periodictable} className='mr-2' alt="" /></div>
                        <div className='text-xl font-semibold mr-2'>Chemistry</div>
                        <div className='h-10 w-10 bg-[#FFB6B642] rounded-full flex justify-center items-center text-[12px] relative'>
                            <div className='w-full h-full rounded-full absolute  border-2 border-[#22222266]'
                                style={{ "clipPath": "ellipse(50% 50% at 50% 50%)"}}
                            ></div>       
                            26%
                        </div>
                    </div>
                    <div className='bg-[#91DEB666] flex flex-row justify-between items-center w-4/5 p-2 rounded-md mt-8 pt-4 pb-4'>
                        <div><img src={relativity} className='mr-2' alt="" /></div>
                        <div className='text-xl font-semibold mr-2'>Physics</div>
                        <div className='h-10 w-10 border-2 border-[#22222266] rounded-full flex justify-center items-center text-[12px]'>26%</div>
                    </div>
                    <div className='bg-[#FA96007D] flex flex-row justify-between items-center w-4/5 p-2 rounded-md mt-8 pt-4 pb-4'>
                        <div><img src={math} className='mr-2' alt="" /></div>
                        <div className='text-xl font-semibold mr-2'>Mathematics</div>
                        <div className='h-10 w-10 border-2 border-[#22222266] rounded-full flex justify-center items-center text-[12px]'>26%</div>
                    </div>
                </div>
                <div className='m-10 font-bold text-lg '>Not Satisfied with Your Preparation?</div>
                <div className='mt-4'><button className='bg-[#696DCA] pr-6 pl-6 pt-3 pb-3 text-3xl text-white rounded-md  flex flex-row relative m-auto'><img src={ExclusiveRibbon} className='absolute h-10 -left-[3px] -top-[3px]' alt="" /> Create Timetable</button></div>
            </div>
            <div className='w-2/4 m-4'>
                <div className='font-bold text-lg'>Your Activites</div>
                <div className='border border-[#D9D9D9] bg-[#E6E6E633] m-6 p-6 rounded-lg flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center mb-6'>
                        <div className=' font-semibold text-lg'><span className='text-[#00C637]'>Congratulation!</span> <span className='font-normal'>Your</span> Personal Timetable <span className='font-normal'>is Ready</span></div>
                        <div className=' text-lg'> Download our app to follow and <span className='font-semibold'>start working</span></div>
                    </div>
                    <div className='flex flex-row bg-[#0B0D0F] p-4 w-2/4 m-auto justify-center rounded-full'>
                        <div className='text-white font-semibold'>Download Now</div>
                        <div><img src={AppleLogo} className='mr-3 ml-3' alt="" /></div>
                        <div><img src={playstore} alt="" /></div>
                    </div>
                    <div className='font-bold text-lg text-[#696DCA] mt-6'>Your Current Selection Chances = 55%</div>
                    <button className='bg-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg text-white rounded-md m-4'>Increase Your Selection Chances Now</button>
                </div>
                <div className='font-bold text-lg text-[#3E4A59]'>Explore More</div>
                <div className='bg-[#E6E6E633] flex flex-row m-4 p-4 justify-between'>
                    <div className='flex flex-col  justify-center' >
                        <div className='font-bold text-lg text-[#696DCA]'>Confused? Stressed?</div>
                        <div className=' text-lg text-[black]'>Book 15 min call with IITians @99Rs only</div>
                        <div><button className='text-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg border border-[#696DCA] rounded-md m-4 ml-0'>Explore</button></div>
                    </div>
                    <div>
                        <img src={Rectangle1586} className='mr-12' alt="" />
                    </div>
                </div>
                <div className='bg-[#E6E6E633] flex flex-row-reverse m-4 p-4 justify-end'>
                    <div className='flex flex-col  justify-center' >
                        <div className='font-bold text-lg text-[#696DCA]'>Daily Guidance?</div>
                        <div className=' text-lg text-[black]'>1 on 1 Mentorship by IITians @999Rs/Month </div>
                        <div><button className='text-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg border border-[#696DCA] rounded-md m-4 ml-0'>Explore</button></div>
                    </div>
                    <div>
                        <img src={Rectangle1587} className='mr-12' alt="" />
                    </div>
                </div>
            </div>
            <div className='w-1/4 bg-[#D9D9D926] flex flex-col justify-center items-center'>
                <div className='font-bold text-lg'>Upcoming Events</div>
                <div><img src={upcomingEvent} alt="" /></div>
                <div className=' text-lg'>How to make Chemistry a Strong Zone</div>
                <div><button className='text-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg border border-[#696DCA] rounded-md m-4 ml-0'>Regiser Now</button></div>
                <div className='font-bold text-lg mb-4'>Highlights of the week</div>
                <div className='m-3'>
                    <div className='flex flex-row items-start'>
                        <div><img src={highlightsPic} className='m-2' alt="" /></div>
                        <div className='flex flex-col ml-4 mb-4'>
                            <div className='font-bold text-md'>Got my mock papers marks doubled within 2 months.</div>
                            <div className='font-bold text-sm text-[#696DCA] '>Deepak Kumar (JEE Aspirant)</div>
                        </div>
                    </div>
                    <div className='h-3 bg-black rounded-b-md'></div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
                    <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                    <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                </div>
            </div>
        </div>
    )
}
