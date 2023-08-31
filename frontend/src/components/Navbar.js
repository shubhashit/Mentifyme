import React from 'react'
import logo from '../assets/MentifymeLogo.png'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-row justify-between p-3 items-center'>
            <div className='flex flex-row'>
                <img src={logo} className='w-14 mr-2' alt="" />
                <div>
                    <div className='text-4xl text-[#696DCA] cursor-pointer' onClick={() => { navigate("/") }}>Mentifyme</div>
                    <div className='text-sm text-[#696DCA]'>Mentoring for better india</div>
                </div>
            </div>
            <div className='flex flex-row font-semibold'>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer' onClick={()=>{navigate("/")}}>Home</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>Connect</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer' onClick={()=>{navigate("/timetable/name")}}>Time Table</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>App Download</div>
            </div>
            <div>
                <button className='bg-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg text-white rounded-sm mr-3' onClick={()=>{navigate("/login")}}>Login</button>
            </div>
        </div>
    )
}
