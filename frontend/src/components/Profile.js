import React from 'react'
import tablericonbook from '../assets/tabler-icon-book.png'
import tablericonbook1 from '../assets/tabler-icon-book (1).png'
import tablericonbook2 from '../assets/tabler-icon-book-2.png'
import tablericonbook3 from '../assets/tabler-icon-calendar-stats.png'
import tablericonbook4 from '../assets/tabler-icon-gift.png'
import setting from '../assets/tabler-icon-settings.png'
import copy from '../assets/tabler-icon-copy.png'
import calset from '../assets/tabler-icon-calendar-time.png'
import upcomingEvent from '../assets/afterlogin/upcomingEvent.png'
import highlightsPic from '../assets/afterlogin/highlightsPic.svg'
import Upcoming from './Upcoming'
import Past from './Past'
import Bookcall from './Bookcall'
import Rewards from './Rewards'
import Session from './Session'
import Footer from './Footer'

export default function Profile() {
    return (
        <div className='w-full flex md:flex-row flex-col'>
            <div className='w-1/4 bg-[#D9D9D926] hidden md:block'>
                <div className='flex flex-col items-start w-fit m-auto'>

                    <div className='flex flex-row mt-10'>
                        <div><img src={tablericonbook} alt="" /></div>
                        <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>My Sessions</div>
                    </div>
                    <div className='flex flex-row mt-10'>
                        <div><img src={tablericonbook2} alt="" /></div>
                        <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Premium Plan</div>
                    </div>
                    <div className='flex flex-row mt-10'>
                        <div><img src={tablericonbook3} alt="" /></div>
                        <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Book Calls</div>
                    </div>
                    <div className='flex flex-row mt-10'>
                        <div><img src={tablericonbook4} alt="" /></div>
                        <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Rewards</div>
                    </div>
                </div>
            </div>
            <Session></Session>
            {/* <Upcoming></Upcoming> */}
            {/* <Past></Past> */}
            {/* <Bookcall></Bookcall> */}
            {/* <Rewards></Rewards> */}
            {/* <div className='md:w-1/4 bg-[#D9D9D926] flex flex-col items-center h-fit mb-4'>
                <div className='font-bold text-lg mt-8'>Upcoming Events</div>
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
            </div> */}
            {/* <div className='block md:hidden'>
                <Footer></Footer>
            </div> */}
        </div>
    )
}
