import React from 'react'
import logo from '../assets/MentifymeLogo.png'
import loginimage from '../assets/loginimage.svg'
import chevrondown from '../assets/chevrondown.svg'

export default function NavbarAfterLogin() {
    return (
        <div className='flex flex-row justify-between p-3 items-center shadow'>
            <div className='flex flex-row'>
                <img src={logo} className='w-14 mr-2' alt="" />
                <div>
                    <div className='text-4xl text-[#696DCA]'>Mentifyme</div>
                    <div className='text-sm text-[#696DCA]'>Mentoring for better india</div>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-xl mr-3 text-[#696DCA]'>Aarchi Singh</div>
                <img src={chevrondown} className='mr-3' alt="" />
                <img src={loginimage} className='w-12' alt="" />
            </div>
        </div>
    )
}
