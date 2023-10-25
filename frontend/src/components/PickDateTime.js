import React from 'react'
import leftdate from '../assets/payment/leftdate.png'
import rightdate from '../assets/payment/rightdate.png'
import Dateslot from './Dateslot'

export default function PickDateTime() {
    return (
        <div className='relative flex flex-col items-center justify-between pt-32'>
            <div className='absolute left-3 top-6 text-[#878787] text-lg font-normal'>&lt;   Book call</div>
            <div className='flex flex-row '>
                <div className='flex flex-row items-center'>
                    <div className='bg-[#696DCA] w-6 h-6 rounded-full flex justify-center items-center text-white'>1</div>
                    <div className='text-[#696DCA] ml-3 font-medium'>Date & Time</div>
                    <div className='h-1 w-16 bg-[#696DCA] ml-3' ></div>
                </div>
                <div className='flex flex-row items-center ml-4'>
                    <div className='bg-[#878787] w-6 h-6 rounded-full flex justify-center items-center text-white'>2</div>
                    <div className='text-[black] ml-3 font-medium'>Details</div>
                    <div className='h-1 w-24 bg-[#878787] ml-3' ></div>
                </div>
                <div className='flex flex-row items-center ml-4'>
                    <div className='bg-[#878787] w-6 h-6 rounded-full flex justify-center items-center text-white'>3</div>
                    <div className='text-[black] ml-3 font-medium'>Payment</div>
                </div>
            </div>
            <div className='w-[78rem] rounded mt-8 mb-8 flex flex-col items-center border' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                <div className='mt-8 flex flex-col items-center' >
                    <div className='font-medium text-2xl mb-4'>Pick a date</div>
                    <div className='flex flex-row items-center'>
                        <img src={leftdate} alt="" />
                        <Dateslot day='Mon' date="28 Oct" color= "#696DCA"></Dateslot>
                        <Dateslot day='Tue' date="29 Oct" color= "#878787"></Dateslot>
                        <Dateslot day='Wed' date="30 Oct" color= "#878787"></Dateslot>
                        <Dateslot day='Thus' date="31 Oct" color= "#878787"></Dateslot>
                        <Dateslot day='Fri' date="01 Nov" color= "#878787"></Dateslot>
                        <Dateslot day='Sat' date="02 Nov" color= "#878787"></Dateslot>
                        <Dateslot day='Sun' date="03 Nov" color= "#878787"></Dateslot>
                        <img src={rightdate} alt="" />
                    </div>
                </div>
                <div className='mt-8 flex flex-col items-center' >
                    <div className='font-medium text-2xl mb-4'>Pick a time</div>
                    <div>Choose your suitable time period</div>
                    <div>
                        
                    </div>
                    <div className='flex flex-row items-center'>
                        <img src={leftdate} alt="" />
                        <Dateslot day='Mon' date="28 Oct" color= "#696DCA"></Dateslot>
                        <Dateslot day='Tue' date="29 Oct" color= "#878787"></Dateslot>
                        <Dateslot day='Wed' date="30 Oct" color= "#878787"></Dateslot>
                        <Dateslot day='Thus' date="31 Oct" color= "#878787"></Dateslot>
                        <Dateslot day='Fri' date="01 Nov" color= "#878787"></Dateslot>
                        <Dateslot day='Sat' date="02 Nov" color= "#878787"></Dateslot>
                        <Dateslot day='Sun' date="03 Nov" color= "#878787"></Dateslot>
                        <img src={rightdate} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
