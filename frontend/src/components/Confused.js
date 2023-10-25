import React from 'react'

export default function Confused() {
    return (
        <div className='flex flex-col items-center justify-between p-4 w-full mb-12'>
            <div className='bg-black text-white p-10 rounded-3xl w-full flex flex-col items-center'>
                <div className='font-normal text-base md:text-3xl text-center'>Still Confused? Contact Us for your queries</div>
                <div className='text-[#D9D9D9] text-xs md:text-xl font-normal mt-4 text-center'>Don’t stay behind due to some doubts, you could miss your dream colleges</div>
                <div className='flex flex-col md:flex-row items-center mt-4'>
                    <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[10rem] md:w-[13rem] text-center m-2 rounded '><button>Explore Premium</button></div>
                    <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-black border border-[#FFFFFF] w-[10rem] md:w-[13rem] text-center m-2 rounded'><button>Contact Us</button></div>
                </div>
            </div>
        </div>
    )
}
