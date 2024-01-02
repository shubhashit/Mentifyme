import React from 'react'
import logo from '../../assets/MentifymeLogo.png'
// import main from '../../assets/admin/mail.png'
export default function Login() {
    function OnLogin() {

    }

    return (
        <div className='flex flex-col justify-center items-center p-2 md:p-0 w-screen'>
            <div className='flex flex-row items-center mt-16 mb-16'>
                <img src={logo} className='w-10 md:w-14 h-10 md:h-14 mr-2' alt="" />
                <div>
                    <div className='text-lg md:text-4xl text-[#696DCA] cursor-pointer'>Mentifyme</div>
                    <div className='text-xs md:text-sm text-[#696DCA]'>Mentoring for better india</div>
                </div>
            </div>
            <div className='text-lg md:text-3xl font-bold text-[#212121] md:mb-8'>
                WELCOME TO MENTIFYME
            </div>
            <div className='text-xs md:text-xl font-normal text-[#424242] mb-10'>
                LOG IN TO CONTINUE
            </div>
            <div className=' w-full md:w-96 h-16 border-[2px] flex flex-row items-center rounded-lg'>
                <img src="" alt="" />
                <input type="text" className='w-[80%] outline-none ml-2' placeholder='example@email.com' />
            </div>
            <div className='w-full md:w-96 h-16 border-[2px] flex flex-row items-center mt-3 rounded-lg'>
                <img src="" alt="" />
                <input type="password" className='w-[80%] outline-none ml-2' placeholder='Password' />
                <img src="" alt="" />
            </div>
            <div className=' w-full font-medium text-[#696DCA] text-base md:hidden text-end'>
                Forgot Password?
            </div>
            <button className='bg-[#696DCA] flex flex-row justify-between h-16 items-center p-6 pt-3 pb-3 md:w-96 w-full text-xs md:text-xl text-white rounded-md  mt-8' onClick={OnLogin}><span>Proceed to my Account</span> <span>-</span></button>
            <div className=' w-96 text-2xl font-medium text-[#696DCA]  text-end hidden md:block'>
                Forgot Password?
            </div>



            <div className='text-sm font-normal text-[#9E9E9E] md:flex flex-row justify-around w-screen absolute bottom-0 mb-4 hidden'>
                <div>Copyright 2023 Mentifyme All rights Reserved</div>
                <div>Need help?</div>
            </div>
        </div>
    )
}
