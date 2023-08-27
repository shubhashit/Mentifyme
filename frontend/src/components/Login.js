import React from 'react'
import x from '../assets/x.svg'
import xwhite from '../assets/xwhite.svg'
import googleLogo from '../assets/googleLogo.png'

export default function Login() {
    const dark = false;
    return (
        <div className={`h-[100vh] w-[70vw] ${dark ? 'bg-black' : 'bg-white'} absolute right-0 top-0 pl-12`}>
            <div className='relative flex justify-end '><img src={dark ? xwhite : x} className='m-4 cursor-pointer'  alt="" /></div>
            <div className='mt-12'>

                <div className='text-5xl font-bold text-[#696DCA] mb-2'  >Login</div>
                <div className='text-[#696DCA] font-semibold text-lg mb-4'>or create your account</div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                    +91 |  <span><input type="text" placeholder='9039144565' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `}/></span>
                </div>
                <div><button className='bg-[#696DCA]  p-6 pt-3 pb-3 w-[10rem] text-xl text-white rounded-md mr-3 mb-10 mt-8'>Login</button></div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center justify-center cursor-pointer`}>
                   <img src={googleLogo} className='mr-3 h-[2.5rem]' alt="" />
                    <div className={`font-bold ${dark ? "text-white" : "text-black"}`}>Login with Google</div>
                </div>
                <div className={`text-lg font-semibold ${dark ? "text-white" : "text-black"}`}>Having trouble please contact <span className='text-[#696DCA]'>helpansrcoach@learn.com</span> for further support  into</div>
            </div>
        </div>
    )
}
