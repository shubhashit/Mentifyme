import React from 'react'
import sidebar from '../assets/sidebar.png'
import tap from '../assets/tap.png'

export default function AchievmentSlab() {
    return (
        <div className='flex flex-row bg-black text-white text-2xl p-2 justify-between items-center relative h-[20vh]'>
            <div className='border-white bg-white h-[110%] flex  pl-6 justify-center flex-col w-1/5' style={{ "background": "rgba(255, 255, 255, 0.13)", "backdrop-filter": "blur(10px)" }}>

                Our <br /> Achievements <br /> <div className='flex flex-row items-center'> till now <span><img src={tap} className='w-[36px] ml-3' alt="" /></span></div> 
            </div>
            {/* <div className='flex flex-row'> */}
            <div className=' flex flex-col justify-center items-center w-1/5 m-6'>
                <div className='text-xl'>Mentored</div>
                <div className='text-[#696DCA] text-3xl font-bold'>1000+</div>
                <div className='text-sm'>students</div>
            </div>
            <img src={sidebar} className='w-[4px]' alt="" />
            <div className=' flex flex-col justify-center items-center w-1/5 m-6'>
                <div className='text-xl'>Ranks Achieved</div>
                <div className='text-[#696DCA] text-3xl font-bold'>800+</div>
                <div className='text-sm'>Students achieved there dream ranks</div>
            </div>
            <img src={sidebar} className='w-[4px]' alt="" />
            <div className=' flex flex-col justify-center items-center w-1/5 m-6'>
                <div className='text-xl'>Mentors</div>
                <div className='text-[#696DCA] text-3xl font-bold'>50+</div>
                <div className='text-sm'>Experts from IITs/AIIMs</div>
            </div>
            {/* </div> */}
        </div>
    )
}
