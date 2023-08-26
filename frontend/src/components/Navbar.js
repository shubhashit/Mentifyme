import React from 'react'

export default function Navbar() {
    return (
        <div className='flex flex-row justify-between p-3 items-center'>
            <div className='flex flex-row'>
                <img src="" alt="" />
                <div>
                    <div className='text-4xl text-[#696DCA]'>Mentifyme</div>
                    <div className='text-sm text-[#696DCA]'>Mentoring for better india</div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>Home</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>Connect</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>Time Table</div>
                <div className='mr-6 text-xl hover:text-[#696DCA] hover:cursor-pointer'>App Download</div>
            </div>
            <div>
                <button className='bg-[#696DCA] pr-4 pl-4 pt-1 pb-1 text-lg text-white rounded-sm mr-3'>Login</button>
            </div>
        </div>
    )
}
