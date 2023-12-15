import React, { useState } from 'react'
import logo from '../assets/MentifymeLogo.png'
import loginimage from '../assets/loginimage.svg'
import chevrondown from '../assets/chevrondown.svg'
import hamburger from '../assets/hamburger.png'
import navbarcross from '../assets/navbarcross.png'
import tablericonbook from '../assets/tabler-icon-book.png'
import tablericonbook2 from '../assets/tabler-icon-book-2.png'
import tablericonbook3 from '../assets/tabler-icon-calendar-stats.png'
import tablericonbook4 from '../assets/tabler-icon-gift.png'

export default function NavbarAfterLogin() {
    const [ham , setham] = useState(false);
    function OnhamburgerClick() {
        setham(true);
    }
    function Oncross(){
        setham(false);
    }
    return (
        <div className="relative">
            <div className='hidden flex-row justify-between p-3 items-center shadow md:flex'>
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
            <div className='flex flex-row justify-between p-3 items-center shadow md:hidden'>
                <div className={`bg-white w-[60%] absolute right-0 top-0 h-[100vh] z-10 ${ham ? "block" : "hidden"}`}>
                    <div className='flex flex-row justify-end mt-3 mr-3'>
                        <img src={navbarcross} alt="" onClick={Oncross} />
                    </div>
                    <div className='ml-3'>
                        <div className='flex flex-row items-center mt-6'>
                            <div className='w-12 h-12 rounded-full border-[2px] border-[#696DCA] text-center text-2xl font-medium flex justify-center items-center text-[#696DCA] mr-3'>S</div>
                            <div className='text-lg font-medium'>Satyam Sharma</div>
                        </div>
                        <div className='flex flex-col items-start w-fit m-auto'>

                            <div className='flex flex-row mt-10'>
                                <div><img src={tablericonbook} alt="" /></div>
                                <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>My Sessions</div>
                            </div>
                            <div className='flex flex-row mt-10'>
                                <div><img src={tablericonbook2} alt="" /></div>
                                <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Premium Plan</div>
                            </div>
                            <div className='flex flex-row mt-10'>
                                <div><img src={tablericonbook3} alt="" /></div>
                                <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Book Calls</div>
                            </div>
                            <div className='flex flex-row mt-10'>
                                <div><img src={tablericonbook4} alt="" /></div>
                                <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Rewards</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <img src={logo} className='w-12 h-12 mr-2' alt="" />
                    <div>
                        <div className='text-xl text-[#696DCA]'>Mentifyme</div>
                        <div className='text-xs text-[#696DCA]'>Mentoring for better india</div>
                    </div>
                </div>
                <div>
                    <img src={hamburger} alt="" onClick={OnhamburgerClick} />
                </div>
            </div>
        </div>
    )
}
