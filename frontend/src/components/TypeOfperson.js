import React from 'react'
import forwardArrow from '../assets/forwardArrow.png'
import back from '../assets/arrow-left-square.svg'
import forward from '../assets/arrow-right-square.svg'

export default function TypeOfperson() {
    return (
        <div>
            <div className='flex flex-row justify-start items-center m-6'>
                <div className='text-2xl font-semibold'>Home</div>
                <div><img src={forwardArrow} className='mr-2 ml-2' alt="" /></div>
                <div className='text-2xl font-semibold text-[#696DCA]'>Create Timetable</div>
            </div>
            <div className='flex flex-row justify-start items-center m-6 mb-3'>
                <div className='border-2 border-[#00C637] p-6 font-semibold text-[#00C637] mr-3 rounded-md w-1/4 flex justify-center items-center cursor-pointer'>LET'S KNOW ABOUT YOU</div>
                <div className='border-2 border-[#00C637] p-6 font-semibold text-[#00C637] mr-3 rounded-md w-1/4 flex justify-center items-center cursor-pointer'>ANALYSING YOUR SUBJECTS</div>
                <div className='border-2 border-[#696DCA] bg-[#696DCA] p-6 font-semibold text-[white] mr-3 rounded-md w-1/4 flex justify-center items-center cursor-pointer'>YOUR  LIFESTYLE</div>
            </div>
            <div className='flex flex-row'>
                <div className='w-16 h-2 ml-6  bg-[#696DCA] rounded-md mr-3 cursor-pointer'></div>
                <div className='w-16 h-2   bg-[#D9D9D9] rounded-md mr-3 cursor-pointer'></div>
                <div className='w-16 h-2   bg-[#D9D9D9] rounded-md mr-3 cursor-pointer'></div>
                <div className='w-16 h-2   bg-[#D9D9D9] rounded-md mr-3 cursor-pointer'></div>
                <div className='w-16 h-2   bg-[#D9D9D9] rounded-md mr-3 cursor-pointer'></div>
            </div>
            <div>
                <div className='m-6 '>
                    <div className='text-2xl font-bold'>What type of person are you?</div>
                    <div className='text-lg text-[#898989]'>Select  your preferred time of studying</div>
                </div>
                <div className='m-6 flex flex-row items-center'>
                    <div className='border border-black h-6 w-6 rounded-full mr-4'></div>
                    <div className='text-2xl '>Morning</div>
                </div>
                <div className='m-6 flex flex-row items-center'>
                    <div className='border border-black h-6 w-6 rounded-full mr-4'></div>
                    <div className='text-2xl '>Night</div>
                </div>
            </div>
            <div className='m-6 w-[50vw] flex flex-row justify-between mt-10 h-12 '>
                <button className='bg-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg text-white rounded-sm mr-3 w-1/5 flex flex-row items-center'> <img src={back} alt="" /> Previours</button>
                <button className='bg-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg text-white rounded-sm mr-3 w-1/5 flex flex-row justify-center items-center opacity-50'>Next <img src={forward} alt="" /></button>
            </div>
        </div>
    )
}
