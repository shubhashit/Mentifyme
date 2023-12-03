import React from 'react'
import reward from '../assets/tabler-icon-gift (1).png'
import coin from '../assets/coin.png'
import R1 from '../assets/image 205.png'

export default function Rewards() {
    return (
        <div className='w-2/4 m-4 h-fit'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <div><img src={reward} alt="" /></div>
                    <div className='font-medium text-3xl ml-2'>Book Calls</div>
                </div>
                <div className='flex flex-row font-medium '>
                    <div>100  </div>
                    <div className='mr-2 ml-2'><img src={coin} alt="" /></div>
                    <div> = ₹10</div>
                </div>
            </div>
            <div className='mt-8'>
                <div className='flex flex-row justify-between border rounded p-5 items-center mt-3'>
                    <div className='flex flex-row'> 
                        <div className='mr-6'><img src={R1} alt="" /></div>
                        <div className='flex flex-col'>
                            <div className='font-medium text-3xl'>1 Mentorship Session</div>
                            <div className='text-[#878787] font-normal text-lg'>Video meeting | 30 mins</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row font-medium text-xl items-center'>
                            100 <img src={coin} className='ml-2 w-4 h-4' alt="" />
                        </div>
                        <div className='text-[#12B76A] font-normal text-base'>Completed</div>
                    </div>
                </div>
                <div className='flex flex-row justify-between border rounded p-5 items-center mt-3'>
                    <div className='flex flex-row'> 
                        <div className='mr-6'><img src={R1} alt="" /></div>
                        <div className='flex flex-col'>
                            <div className='font-medium text-3xl'>1 Mentorship Session</div>
                            <div className='text-[#878787] font-normal text-lg'>Video meeting | 30 mins</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row font-medium text-xl items-center'>
                            100 <img src={coin} className='ml-2 w-4 h-4' alt="" />
                        </div>
                        <div className='text-[#12B76A] font-normal text-base'>Completed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
