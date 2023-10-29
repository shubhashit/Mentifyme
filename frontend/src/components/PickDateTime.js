import React from 'react'
import leftdate from '../assets/payment/leftdate.png'
import rightdate from '../assets/payment/rightdate.png'
import Dateslot from './Dateslot'

export default function PickDateTime() {
    return (
        <div className='relative flex flex-col items-center justify-between pt-24'>
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
            <div className='w-[90%] lg:w-[]]'>
                <div className='font-normal text-2xl'>Choose your stream</div>
                <div className='h-[3.5rem] w-[25rem] border rounded-lg'><input type="search" name="IIT JEE" id="" /></div>
                
            </div>
            <div className='w-[90%]  rounded mt-8 mb-8 flex flex-col items-center border pl-8 pb-8' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                <div className='mt-8 flex flex-col w-full ml-10' >
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
                <div className='mt-8 flex flex-col w-full ml-10' >
                    <div className='font-medium text-2xl mb-4'>Pick a time</div>
                    <div className='font-normal text-base  text-[#878787]'>Choose your suitable time period</div>
                    <div className='flex flex-row mt-3 mb-3'>
                        <div className='w-[6.5rem] h-[2rem] bg-[#D9D9D9] rounded text-[#878787] flex justify-center items-center mr-2'>Morning</div>
                        <div className='w-[6.5rem] h-[2rem] bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2'>Night</div>
                        <div className='w-[6.5rem] h-[2rem] bg-[#D9D9D9] rounded text-[#878787] flex justify-center items-center'>Afternoon</div>
                    </div>
                    <div>
                        
                    </div>
                    <div className='flex flex-row items-center justify-start'>
                        <img src={leftdate} alt="" />
                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#696DCA] mr-3 ml-3`}>
                            <div className={`text-[#696DCA] text-lg font-bold`}>8: 30 PM</div>
                        </div>
                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#D9D9D9] mr-3 ml-3`}>
                            <div className={`text-[#878787] text-lg font-bold`}>9: 00 PM</div>
                        </div>
                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#D9D9D9] mr-3 ml-3`}>
                            <div className={`text-[#878787] text-lg font-bold`}>9: 30 PM</div>
                        </div>
                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#D9D9D9] mr-3 ml-3`}>
                            <div className={`text-[#878787] text-lg font-bold`}>10: 00 PM</div>
                        </div>
                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#D9D9D9] mr-3 ml-3`}>
                            <div className={`text-[#878787] text-lg font-bold`}>11: 00 PM</div>
                        </div>
                        <img src={rightdate} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[24rem] p-4 text-base font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2'>Continue</div>
        </div>
    )
}
