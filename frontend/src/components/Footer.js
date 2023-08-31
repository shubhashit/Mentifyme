import React from 'react'
import Footerbg from '../assets/Footerbg.png'
import logo from '../assets/MentifymeLogo.png'
import facebook from '../assets/contactsimg/facebook.png'
import instagram from '../assets/contactsimg/instagram.png'
import linkedin from '../assets/contactsimg/linkedin.png'
import phone from '../assets/contactsimg/phone.png'
import youtube from '../assets/contactsimg/youtube.png'
import twitter from '../assets/contactsimg/twitter.png'
import mail from '../assets/contactsimg/mail.svg'

export default function Footer() {
    return (
        <div className='h-[100vh]  bg-black relative flex flex-col items-center justify-between'>
            <img src={Footerbg} className='w-[100vw] absolute top-0' alt="" />
            <div className='text-2xl text-white font-bold mt-10'>BOOST YOUR JOURNEY NOW</div>
            <div className='w-1/2 mt-8 relative h-1/4'>
                <div className='p-6 pr-8 pl-8 border text-white text-xl font-bold footerbtn mt-8 w-fit absolute top-0 left-0'>Creat For FREE</div>
                <div className='absolute bottom-0 right-0 p-6 pr-8 pl-8 border text-white text-xl font-bold footerbtn2 mt-8 w-fit'>Talk Now @99 only</div>
            </div>
            <div className='text-white flex flex-row justify-between mt-20'>
                <div className='w-1/5 m-6'>
                    <div className='flex flex-row'>
                        <img src={logo} className='w-14 mr-2' alt="" />
                        <div>
                            <div className='text-4xl text-[#696DCA]'>Mentifyme</div>
                            <div className='text-sm text-[#696DCA]'>Mentoring for better india</div>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-4'>Mentifyme is the best and india’s first AI based mentorship and timetable tracking platform with expertise of Top IITians/AIIMSians</div>
                </div>
                <div className='w-1/5 m-6'>
                    <div className='font-bold'>QUICK LINKS</div>
                    <div className='text-[#878787] mt-5'>Connect with mentor @99</div>
                    <div className='text-[#878787] mt-5'>Time table</div>
                    <div className='text-[#878787] mt-5'>download App</div>
                    <div className='text-[#878787] mt-5'>Join Mentifyme as mentor</div>
                </div>
                <div className='w-1/5 m-6'>
                    <div className='font-bold'>QUICK LINKS</div>
                    <div className='text-[#878787] mt-5'>Connect with mentor @99</div>
                    <div className='text-[#878787] mt-5'>Time table</div>
                    <div className='text-[#878787] mt-5'>download App</div>
                    <div className='text-[#878787] mt-5'>Join Mentifyme as mentor</div>
                </div>
                <div className='w-1/5 m-6 flex flex-col justify-between'>
                    <div className='font-bold'>CONTACT US</div>
                    <div>

                        <div className='flex flex-row mt-4'>
                            <img src={mail} className='mr-4' alt="" />
                            <div>mentifyme@gmail.com</div>
                        </div>
                        <div className='flex flex-row mt-4'>
                            <img src={phone} className='mr-4' alt="" />
                            <div>+91-7667102054</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between mt-4'>
                        <img src={facebook} className='w-8' alt="" />
                        <img src={linkedin} className='w-8' alt="" />
                        <img src={twitter} className='w-8' alt="" />
                        <img src={instagram} className='w-8' alt="" />
                        <img src={youtube} className='w-8' alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full border-t-2 border-t-[#878787] text-center'>
                <div className='text-white font-semibold text-lg mt-4 mb-4'>Copyright © 2023 <span className='text-[#696DCA]'>Mentifyme</span></div>
            </div>
        </div>
    )
}
