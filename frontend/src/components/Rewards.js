import React from 'react'
import reward from '../assets/tabler-icon-gift (1).png'
import coin from '../assets/coin.png'
import R1 from '../assets/image 205.png'

export default function Rewards() {
    return (
        <div className='md:w-2/4 m-4 h-fit'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                    <div><img src={reward} className='w-8 h-8 md:w-12 md:h-12' alt="" /></div>
                    <div className='font-medium md:text-3xl text-base ml-2'>Rewards</div>
                </div>
                <div className='flex flex-row font-medium '>
                    <div>100  </div>
                    <div className='mr-2 ml-2'><img src={coin} alt="" /></div>
                    <div> = ₹10</div>
                </div>
            </div>
            <div className='mt-8'>
                <div className='flex flex-row justify-between border rounded md:p-5 p-3 items-center mt-3'>
                    <div className='flex flex-row'> 
                        <div className='mr-6'><img src={R1} className='w-6 h-6' alt="" /></div>
                        <div className='flex flex-col'>
                            <div className='font-medium md:text-3xl text-[12px]'>1 Mentorship Session</div>
                            <div className='text-[#878787] font-normal md:text-lg text-[8px]'>Video meeting | 30 mins</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row font-medium text-xl items-center md:text-base text-[12px]'>
                            <div className='md:text-base text-[12px] font-medium'>100</div>
                            <img src={coin} className='ml-2 w-4 h-4' alt="" />
                        </div>
                        <div className='text-[#12B76A] font-normal md:text-base text-[8px]'>Completed</div>
                    </div>
                </div>
                <div className='flex flex-row justify-between border rounded md:p-5 p-3 items-center mt-3'>
                    <div className='flex flex-row'> 
                        <div className='mr-6'><img src={R1} className='w-6 h-6' alt="" /></div>
                        <div className='flex flex-col'>
                            <div className='font-medium md:text-3xl text-[12px]'>1 Mentorship Session</div>
                            <div className='text-[#878787] font-normal md:text-lg text-[8px]'>Video meeting | 30 mins</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row font-medium text-xl items-center md:text-base text-[12px]'>
                            <div className='md:text-base text-[12px] font-medium'>100</div>
                            <img src={coin} className='ml-2 w-4 h-4' alt="" />
                        </div>
                        <div className='text-[#12B76A] font-normal md:text-base text-[8px]'>Completed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
