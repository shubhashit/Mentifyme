import React from 'react'
import greentick from '../assets/bookcall/greentick.png'
import { useNavigate } from 'react-router-dom';
export default function BookcallConfused() {
    const navigate = useNavigate();
    function topayment() {
        navigate('/payment')
    }
    return (
        <div>

            <div className='flex flex-col items-center '>
                <div className=' text-sm md:text-[1.7rem] flex flex-row  justify-center h-fit m-4' >
                    <img src={greentick} className='w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' alt="" />
                    <span className='text-left'><span className='text-[#878787] md:ml-2'> Do you know?</span> 8 /10 students have increased there efficiency by 2x after a call</span>
                </div>
                <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA]  w-[10rem]  md:w-[13rem] text-center m-2 rounded '><button onClick={topayment}>Book call ₹399 only</button></div>
            </div>

            <div className='flex flex-col items-center justify-between p-4 w-full mb-12'>
                <div className='bg-white text-black p-10 rounded-3xl w-full flex flex-col items-center'>
                    <div className='font-normal text-base md:text-3xl'>Still Confused?<span className='font-medium'> Contact Us</span> for your doubts for booking call</div>
                    <div className='text-[#3E4A59] text-xs md:text-xl font-normal mt-4'>70% of the students, booked call after getting there queries solved</div>
                    <div className='flex flex-col items-center mt-4 md:flex-row'>
                        <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[9rem]  md:w-[13rem] text-center m-2 rounded '><button>Explore Premium</button></div>
                        <div className='text-xs md:text-base font-medium text-[#696DCA] pt-3 pb-3 pl-6 pr-6 bg-white border border-[#696DCA] w-[9rem] md:w-[13rem] text-center m-2 rounded'><button>Contact Us</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
