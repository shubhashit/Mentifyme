import React from 'react'
import x from '../assets/x.svg'

export default function ForgotPassword() {
    return (
        <>

            {/* <div className='flex flex-col justify-center items-center p-2 md:p-0 w-screen '>

            <div className='flex flex-row justify-between w-screen'>
                <div className=' md:m-4 cursor-pointer text-[#878787] text-2xl hidden md:block'> &lt; Back</div>
                <div className='md:hidden m-4 cursor-pointer text-[#878787] text-2xl'>&lt;</div>
                <div className='relative flex justify-end '><img src={x} className=' md:m-4 cursor-pointer' alt="" onClick={() => {}} /></div>
            </div>


            <div className='text-2xl md:text-5xl font-bold text-[#696DCA] mb-2 mt-40'  >Forgot Password</div>
            <div className='text-[]  text-base md:text-lg mb-4 cursor-pointer' onClick={() => { }}>Verify your registered mobile number</div>
            <div className={`border-2 outline-none ${"border-[#696DCA]"}  p-4 text-xl mb-4 flex flex-row w-full md:w-96 items-center`}>
                +91 |  <span><input type="text" placeholder='9039144565' className={`outline-none ml-1 ${"bg-white placeholder:text-[#696DCA]"} `} /></span>
            </div>
            <button className='bg-[#696DCA] flex flex-row  h-16 items-center justify-center p-6 pt-3 pb-3 md:w-96 w-full text-sm md:text-xl text-white rounded-md  mt-8' onClick={() => { }}><span>Verify</span></button>
        </div> */}
            <div className='flex flex-col justify-center items-center p-2 md:p-0 w-screen'>
                <div className='flex flex-row justify-between w-screen'>
                    <div className=' md:m-4 cursor-pointer text-[#878787] text-2xl hidden md:block'> &lt; Back</div>
                    <div className='md:hidden m-4 cursor-pointer text-[#878787] text-2xl'>&lt;</div>
                    <div className='relative flex justify-end '><img src={x} className=' md:m-4 cursor-pointer' alt="" onClick={() => { }} /></div>
                </div>
                <div className='text-2xl md:text-5xl font-bold text-[#696DCA] mb-2 mt-20'  >Forgot Password</div>
                <div className='text-[]  text-base md:text-lg mb-4 cursor-pointer' onClick={() => { }}>Set your new password</div>
                <div className=' w-full md:w-96 h-16 border-[2px] flex flex-row items-center rounded-lg'>
                    <img src="" alt="" />
                    <input type="text" className='w-[80%] outline-none ml-2' placeholder='Enter your new password' />
                </div>
                <div className='w-full md:w-96 h-16 border-[2px] flex flex-row items-center mt-3 rounded-lg'>
                    <img src="" alt="" />
                    <input type="password" className='w-[80%] outline-none ml-2' placeholder='Confirm your entered password' />
                    <img src="" alt="" />
                </div>
                <button className='bg-[#696DCA] flex flex-row justify-center h-16  p-6 pt-3 pb-3 md:w-96 w-full text-xs md:text-xl text-white rounded-md items-center mt-8' onClick={() => { }}>Set Password</button>
            </div>
        </>
    )
}
