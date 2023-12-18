import React from 'react'
import onlyBG_footer from '../assets/onlyBG_footer.png'
import logo from '../assets/MentifymeLogo.png'
import facebook from '../assets/contactsimg/facebook.png'
import instagram from '../assets/contactsimg/instagram.png'
import linkedin from '../assets/contactsimg/linkedin.png'
import phone from '../assets/contactsimg/phone.png'
import youtube from '../assets/contactsimg/youtube.png'
import twitter from '../assets/contactsimg/twitter.png'
import mail from '../assets/contactsimg/mail.svg'
import lefthand_footer from '../assets/lefthand_footer.png'
import righthand_footer from '../assets/righthand_footer.png'
import Footer_leftside from '../assets/Footer_leftside.png'
import Footer_rightside from '../assets/Footer_rightside.png'

export default function Footer() {
    return (
        <div className=' h-fit  bg-black relative flex flex-col items-center justify-between'>
            <div className='hidden md:block'>

                <img src={onlyBG_footer} className='w-[100vw] absolute top-0' alt="" />
                <div className='text-2xl text-white font-bold mt-10  text-center'>BOOST YOUR JOURNEY NOW</div>
                <div className='flex flex-row justify-between w-full'>
                    <img src={Footer_leftside} className='w-[40%]' alt="" />
                    <img src={Footer_rightside} className='w-[40%]' alt="" />
                </div>
            </div>



            <div className='text-white md:flex flex-row justify-between mt-20 hidden'>
                <div className='w-1/5 m-6'>
                    <div className='flex flex-row items-center'>
                        <img src={logo} className='w-16 h-16 mr-2' alt="" />
                        <div>
                            <div className='text-[42px] text-[#696DCA]'>Mentifyme</div>
                            <div className='text-[14px] text-[#696DCA]'>Mentoring for better india</div>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-4 text-xl font-normal'>Mentifyme is the best and india’s first AI based mentorship and timetable tracking platform with expertise of Top IITians/AIIMSians</div>
                </div>
                <div className='w-1/5 m-6 text-xl'>
                    <div className='font-bold'>QUICK LINKS</div>
                    <div className='text-[#878787] mt-5'>Connect with mentor @99</div>
                    <div className='text-[#878787] mt-5'>Time table</div>
                    <div className='text-[#878787] mt-5'>download App</div>
                    <div className='text-[#878787] mt-5'>Join Mentifyme as mentor</div>
                </div>
                <div className='w-1/5 m-6 text-xl'>
                    <div className='font-bold'>COMPANY</div>
                    <div className='text-[#878787] mt-5'>About us</div>
                    <div className='text-[#878787] mt-5'>Privacy Policy</div>
                    <div className='text-[#878787] mt-5'>Terms & Conditions</div>
                    <div className='text-[#878787] mt-5'>Contact us</div>
                </div>
                <div className='w-1/5 m-6 flex flex-col justify-between'>
                    <div className='font-bold'>CONTACT US</div>
                    <div>

                        <div className='flex flex-row mt-4'>
                            <img src={mail} className='mr-4' alt="" />
                            <span>mentifyme@ gmail.com</span>
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



            <div className='md:hidden p-6'>
                <div className='flex flex-row items-center'>
                    <img src={logo} className='w-8 h-8 mr-2' alt="" />
                    <div>
                        <div className='text-base text-[#696DCA]'>Mentifyme</div>
                        <div className='text-[6px] text-[#696DCA]'>Mentoring for better india</div>
                    </div>
                </div>

                <div className='text-white text-[14px] mt-4'>
                    Mentifyme is the best and india's first AI based mentorship and timetable tracking platform with expertise of Top IITians/AIIMSians.
                </div>

                <div className='text-white text-[14px] font-medium mt-8 grid grid-cols-2'>
                    <div>
                        <div className='text-[#98A2B3] mb-3'>QUICK LINKS</div>
                        <div className='mt-6'>Connect with Mentor</div>
                        <div className='mt-6'>Time table</div>
                        <div className='mt-6'>
                            <div>Download App</div>
                            <img src="" alt="" />
                        </div>
                        <div className='mt-4'>Join Mentifyme as mentor</div>
                    </div>

                    <div ml-4>
                        <div className='text-[#98A2B3] mb-3'>COMPANY</div>
                        <div className='mt-6'>About us</div>
                        <div className='mt-6'>Privacy Policy</div>
                        <div className='mt-6'>Terms & Condition</div>
                    </div>

                </div>

                <div className='text-white mt-4 text-[14px]'>
                    <div className='text-[#98A2B3] mb-3 text-[14px]'>CONTACT US</div>
                    <div className='mt-4 flex flex-row' >
                        <img src={mail} alt="" />
                        <div className='ml-4 '>mentifyme@gmail.com</div>
                    </div>
                    <div className='mt-4  flex flex-row'>
                        <img src={phone} alt="" />
                        <div className='ml-4 '>+91-7667102054</div>
                    </div>
                </div>

                <div className='flex flex-row mt-4'>
                    <img src={facebook} className='w-6 mr-3' alt="" />
                    <img src={linkedin} className='w-6 mr-3' alt="" />
                    <img src={twitter} className='w-6 mr-3' alt="" />
                    <img src={instagram} className='w-6 mr-3' alt="" />
                    <img src={youtube} className='w-6 mr-3' alt="" />
                </div>
            </div>




            <div className='w-full border-t-2 border-t-[#878787] text-center'>
                <div className='text-white font-semibold text-[14px] md:text-[24px] mt-4 mb-4'>Copyright © 2023 <span className='text-[#696DCA]'>Mentifyme</span> <span className='text-[#6B757E]'>All rights reserved</span></div>
            </div>
        </div>
    )
}
