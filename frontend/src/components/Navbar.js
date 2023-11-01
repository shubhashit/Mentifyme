import React, { useState } from 'react'
import logo from '../assets/MentifymeLogo.png'
import { useNavigate } from 'react-router-dom'
import hamburger from '../assets/hamburger.png'
import navbarcross from '../assets/navbarcross.png'

export default function Navbar() {
    const [DropDown , setDropDown] = useState(false)
    const navigate = useNavigate();

    function dropdownmenu (){
        if(DropDown){
            setDropDown(false);
        }
        else{

            setDropDown(true);
        }
        console.log(DropDown);
    }
    return (
        <div className='flex flex-row justify-between p-3 items-center shadow'>
            <div className='flex flex-row items-center'>
                <img src={logo} className='w-10 md:w-14 h-10 md:h-14 mr-2' alt="" />
                <div>
                    <div className='text-2xl md:text-4xl text-[#696DCA] cursor-pointer' onClick={() => { navigate("/") }}>Mentifyme</div>
                    <div className='text-xs md:text-sm text-[#696DCA]'>Mentoring for better india</div>
                </div>
            </div>
            <div className='hidden md:flex flex-row font-semibold'>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer' onClick={()=>{navigate("/")}}>Home</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>Connect</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer' onClick={()=>{navigate("/timetable/name")}}>Time Table</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>App Download</div>
            </div>
            <div className='hidden md:block'>
                <button className='bg-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg text-white rounded-sm mr-3' onClick={()=>{navigate("/login")}}>Login</button>
            </div>
            <div className='md:hidden' onClick={dropdownmenu}>
                <img src={hamburger} className={`${DropDown ? "hidden" : "block"}`} alt="" />
            </div>
            {DropDown && 
                <div className='bg-white w-[70%] h-[100dvh] absolute right-0 top-0 z-20 pt-12'>
                    <img src={navbarcross} alt="" className='h-6 w-6 absolute top-5 right-5' onClick={dropdownmenu} />
                    <div className='w-full flex flex-col justify-center '>
                        <div className='text-lg font-medium m-6 text-center text-[#696DCA]'>Home</div>
                        <div className='text-lg font-medium m-6 text-center '>Premium</div>
                        <div className='text-lg font-medium m-6 text-center '>Book call</div>
                        <div className='text-lg font-medium m-6 text-center '>Contact us</div>
                    </div>
                    <div className='flex items-center justify-center mt-4'>
                        <button className=' bg-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg text-white rounded-sm mr-3' onClick={() => { navigate("/login") }}>Login</button>
                    </div>
                 
                </div>}
        </div>
    )
}
