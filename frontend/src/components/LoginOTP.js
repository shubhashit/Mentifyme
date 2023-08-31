import React from 'react'
import x from '../assets/x.svg'
import xwhite from '../assets/xwhite.svg'
import googleLogo from '../assets/googleLogo.png'

export default function Login() {
    const dark = false;
    return (
        <div className={`h-[100vh] w-[70vw] ${dark ? 'bg-black' : 'bg-white'} absolute right-0 top-0 pl-12`}>
            <div className='relative flex justify-end '><img src={dark ? xwhite : x} className='m-4 cursor-pointer' alt="" /></div>
            <div className='mt-12'>

                <div className='text-5xl font-bold text-[#696DCA] mb-2'  >Enter OTP</div>
                <div className='text-[#898989]  text-lg mb-4'>We've sent an OTP to your Registered Mobile Number</div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                    +91 |  <span className='flex flex-row justify-between items-center w-[90%]'><input type="text" placeholder='9039144565' className={`outline-none ml-1 text-[#696DCA] w-full ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} /> <div className='text-[#696DCA] cursor-pointer'>Edit</div> </span>
                </div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center `}>
                    <span><input type="text" placeholder='One time password' className={`w-[200%] outline-none ml-1 text-[#696DCA] ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#22222259]"} `} /></span>
                </div>
                <div className='w-3/5 flex flex-row justify-between items-center'>
                    <button className='bg-[#696DCA]  p-6 pt-3 pb-3 w-[10rem] text-xl text-white rounded-md mr-3 mb-10 mt-8'>Verify OTP </button>
                    <div className='text-[#696DCA] font-semibold text-lg'>Resend OTP</div>
                    </div>
                
                <div className={`text-lg font-semibold ${dark ? "text-white" : "text-black"}`}>Having trouble please contact <span className='text-[#696DCA]'>helpansrcoach@learn.com</span> for further support  into</div>
            </div>
        </div>
    )
}
