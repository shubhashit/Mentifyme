import React from 'react'

export default function Details() {
    return (
        <div className='relative flex flex-col items-center justify-between pt-24'>
            <div className='absolute left-3 top-6 text-[#878787] text-lg font-normal'>&lt;   Book call</div>
            <div className='flex flex-row '>
                <div className='flex flex-row items-center'>
                    <div className='bg-[#12B76A] w-6 h-6 rounded-full flex justify-center items-center text-white'>1</div>
                    <div className='text-[#12B76A] ml-3 font-medium'>Date & Time</div>
                    <div className='h-1 w-16 bg-[#12B76A] ml-3' ></div>
                </div>
                <div className='flex flex-row items-center ml-4'>
                    <div className='bg-[#696DCA] w-6 h-6 rounded-full flex justify-center items-center text-white'>2</div>
                    <div className='text-[#696DCA] ml-3 font-medium'>Details</div>
                    <div className='h-1 w-24 bg-[#696DCA] ml-3' ></div>
                </div>
                <div className='flex flex-row items-center ml-4'>
                    <div className='bg-[#878787] w-6 h-6 rounded-full flex justify-center items-center text-white'>3</div>
                    <div className='text-[black] ml-3 font-medium'>Payment</div>
                </div>
            </div>
            <div className='w-[90%] lg:w-[]]'>
                

            </div>
            <div className='w-[90%]  rounded mt-8 relative mb-8 flex flex-row items-center justify-between border p-12' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                <div className='absolute text-2xl font-normal top-4 left-4 text-[#696DCA]'>&lt; Pervious</div>
                <div className='pt-8 pb-8 pl-4 w-[45%]' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div>

                        <div className='text-2xl font-medium '>30 mins call with mentor</div>
                        <div className='text-base font-normal text-[#878787]'>Video Meeting | 30 mins</div>
                    </div>

                    <input type='date' className='h-14 bg-[#696DCA1A] rounded-lg w-[80%] pl-4 mt-4 mb-6 text-[#696DCA]'></input>

                    <div className='text-2xl font-medium '>Your stream</div>
                    <div className='h-[3.5rem] w-[80%] border rounded-lg mb-6'><input type="search" name="IIT JEE" id="" /></div>

                    <div className='font-normal text-[1.375rem]'>₹ 799 <span className='text-xs text-[#878787]'>₹ 999</span></div>
                </div>
                <div className='pt-8 pb-8 pl-4 w-[45%]' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>

                    <div className='text-2xl font-medium '>Personal Details</div>
                    <div className='mt-4'>
                        <div className='text-xl '>Name</div>
                        <div><input type="text" className='border h-14 pl-4 w-[80%] rounded-lg mt-2' placeholder='Enter your full name' /></div>
                    </div>
                    <div className='mt-4'>
                        <div className='text-xl '>Mobile number</div>
                        <div><input type="text" className='border h-14 pl-4 w-[80%] rounded-lg mt-2' placeholder='+91 | enter mobile number' /></div>
                    </div>
                    <div className='mt-4'>
                        <div className='text-xl '>Email address</div>
                        <div><input type="email" className='border h-14 pl-4 w-[80%] rounded-lg mt-2' placeholder='Enter your email address' /></div>
                    </div>
                </div>
            </div>
            <div className='w-[24rem] p-4 text-base font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2'>Continue & pay</div>
        </div>
    )
}
