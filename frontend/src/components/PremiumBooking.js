import React, { useRef } from 'react'
import Navbar from './Navbar';

export default function PremiumBooking() {
    const Name = useRef();
    const Mobile_number = useRef();
    const Email = useRef();
    const Stream = useRef();
    function Oncontinue() {

    }
    function handleDropdownChange() {

    }
    return (
        <>
            <Navbar></Navbar>
            <div className='relative md:flex flex-col items-center justify-between pt-24 hidden'>
                <div className='absolute left-3 top-6 text-[#878787] text-lg font-normal' >&lt;   Premium call</div>
                <div className='w-[90%]  rounded mt-8 relative mb-8 flex flex-row items-center justify-between border p-12' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    {/* <div className='absolute text-2xl font-normal top-4 left-4 text-[#696DCA] cursor-pointer' >&lt; Pervious</div> */}
                    <div className='pt-8 pb-8 pl-4 w-[45%] ' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>

                        <div className='text-2xl font-medium '>Selected Course</div>
                        <div className='h-[3.5rem] w-[80%] border rounded-lg mb-6'>
                            <div className='h-[3.5rem] w-[25rem] border rounded-lg'>
                                <label htmlFor="dropdown" ></label>
                                <select id="dropdown" className='h-[3.5rem] w-[25rem] border rounded-lg outline-none text-xl p-2' onChange={handleDropdownChange}>
                                    <option value="codehere">IIT JEE</option>
                                    <option value="codehere">NEET</option>
                                    <option value="codehere">Option 3</option>
                                </select>
                            </div>

                        </div>

                        <div className='text-2xl font-medium '>Your stream</div>
                        <div className='h-[3.5rem] w-[80%] border rounded-lg mb-6'>
                            <div className='h-[3.5rem] w-[25rem] border rounded-lg'>
                                <label htmlFor="dropdown" ></label>
                                <select id="dropdown" className='h-[3.5rem] w-[25rem] border rounded-lg outline-none text-xl p-2' onChange={handleDropdownChange}>
                                    <option value="codehere">IIT JEE</option>
                                    <option value="codehere">NEET</option>
                                    <option value="codehere">Option 3</option>
                                </select>
                            </div>

                        </div>

                        <div className='font-normal text-[1.375rem]'>₹ 3799 <span className='text-xs text-[#878787]'>₹ 999</span></div>
                    </div>
                    <div className='pt-8 pb-8 pl-4 w-[45%]' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>

                        <div className='text-2xl font-medium '>Personal Details</div>
                        <div className='mt-4'>
                            <div className='text-xl '>Name</div>
                            <div><input ref={Name} type="text" className='border h-14 pl-4 w-[80%] rounded-lg mt-2 outline-none' placeholder='Enter your full name' /></div>
                        </div>
                        <div className='mt-4'>
                            <div className='text-xl '>Mobile number</div>
                            <div><input ref={Mobile_number} type="text" className='border h-14 pl-4 w-[80%] rounded-lg mt-2 outline-none' placeholder='+91 | enter mobile number' /></div>
                        </div>
                        <div className='mt-4'>
                            <div className='text-xl '>Email address</div>
                            <div><input ref={Email} type="email" className='border h-14 pl-4 w-[80%] rounded-lg mt-2 outline-none' placeholder='Enter your email address' /></div>
                        </div>
                    </div>
                </div>
                <div className='w-[24rem] p-4 text-base font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 cursor-pointer' onClick={Oncontinue}>Continue & pay</div>
            </div>

            {/* mobile view down  */}
            <div className='relative flex flex-col items-center justify-start pt-24 md:hidden'>
                <div className='absolute left-3 top-6 text-[#3F3D56] text-lg font-medium'>&lt;   Book call</div>
                <div className='flex flex-row w-screen justify-start'>
                    <div className='flex flex-row items-center'>
                        <div className='text-[#12B76A] ml-3 font-medium text-sm'>Date & Time   &gt;</div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='text-[#696DCA] ml-3 font-medium text-sm'>Details   &gt;</div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='text-[black] ml-3 font-medium text-sm'>Payment</div>
                    </div>
                </div>

                <div className='w-screen p-2  rounded mt-8 relative mb-8 flex flex-col items-start justify-start '>
                    {/* <div className='absolute text-lg font-normal top-4 left-4 text-[#696DCA] cursor-pointer' onClick={props.OnPrevious}>&lt; Pervious</div> */}
                    <div className='w-full' >
                        <div>
                            <div className='text-lg font-medium '>30 mins call with mentor</div>
                            <div className='text-sm font-normal text-[#878787]'>Video Meeting | 30 mins</div>
                        </div>

                        <input type='date' className='h-14 bg-[#696DCA1A] border pr-2 border-[#696DCA] w-full rounded-lg pl-2 mt-2 mb-4 text-[#696DCA]'></input>

                        <div className='text-lg font-medium '>Your stream</div>
                        <div className='h-[2.5rem] w-full border rounded-lg mb-2'><input ref={Stream} className='h-full w-full outline-none' type="search" name="IIT JEE" id="" /></div>

                        <div className='font-normal text-[1.375rem] mb-4'>₹ 799 <span className='text-xs text-[#878787]'>₹ 999</span></div>
                    </div>
                    <div className='w-full' >

                        <div className='text-lg font-medium '>Personal Details</div>
                        <div className='mt-4'>
                            <div className='text-base  '>Name</div>
                            <div><input ref={Name} type="text" className='border h-14 pl-4 w-full rounded-lg mt-2 outline-none' placeholder='Enter your full name' /></div>
                        </div>
                        <div className='mt-4'>
                            <div className='text-xl '>Mobile number</div>
                            <div><input ref={Mobile_number} type="text" className='border h-14 pl-4 w-full rounded-lg mt-2 outline-none' placeholder='+91 | enter mobile number' /></div>
                        </div>
                        <div className='mt-4'>
                            <div className='text-xl '>Email address</div>
                            <div><input ref={Email} type="email" className='border h-14 pl-4 w-full rounded-lg mt-2 outline-none' placeholder='Enter your email address' /></div>
                        </div>
                    </div>
                </div>
                <div className='w-full p-4 text-[12px] font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 cursor-pointer' >Continue and pay</div>
            </div>
        </>
    )
}
