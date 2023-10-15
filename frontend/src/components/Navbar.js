import React from 'react'
import logo from '../assets/MentifymeLogo.png'
import { useNavigate } from 'react-router-dom'
import hamburger from '../assets/hamburger.png'

export default function Navbar() {
    const navigate = useNavigate();

    function dropdownmenu (){

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
                <img src={hamburger} alt="" />
            </div>
        </div>
    )
}
