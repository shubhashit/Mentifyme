import React from 'react'
import img from '../assets/HeroSectionImg.svg'
import bottoncover from '../assets/button_left_cover.svg'
import lines from '../assets/Lines.svg'


export default function Hero() {
    return (
        <div className='flex flex-col '>
            <div className='flex flex-col justify-center items-center mt-8'>
                <div className='text-5xl font-bold'>Transforming <span className='text-[#696DCA]'>Problems</span>  into <span className='text-[#696DCA]'>Progress</span></div>
                <div className='text-lg font-semibold mt-3'>“Your Support System for Conquering JEE and NEET Hurdles"</div>
            </div>
            <div></div>
            <div className='flex flex-row items-center'>
                <img src={img} className='h-[28rem]' alt="" />
                <div className='flex flex-col'>
                    <div className='text-2xl font-semibold'>India's <span className='text-[#696DCA]'> 1st A.I. based</span>  exclusive technology for Your <span className='text-[#696DCA]'> Personalised Time Table</span> </div>
                    <div className='m-2'><img src={lines} alt="" /></div>
                    <div className='mt-4'><button className='bg-[#696DCA] pr-6 pl-6 pt-3 pb-3 text-3xl text-white rounded-md mr-3 flex flex-row relative'><img src={bottoncover} className='absolute h-10 -left-[1px] -top-[1px]' alt=""  /> Create Timetable</button></div>
                </div>
            </div>
        </div>
    )
}
