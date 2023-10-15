import React from 'react'
import sidebar from '../assets/sidebar_student.png'

export default function SocialMediaCard(props) {
    return (
        <div className='h-fit w-[48%]'>
            <div className=' border-[#696DCA] border-4 h-4/5 md:m-6 mt-6 mb-6 ml-2 mr-1 rounded-lg relative ' >
                <img src={props.img} className='bg-[#696DCA] w-full' alt="" />
                <div className=' mt-4'>
                    <div className='flex flex-row ml-2'>
                        <img src={sidebar} className='mr-4 w-[3px]' alt="" />
                        <div className='md:text-lg text-xs font-bold'>{props.heading}</div>
                    </div>
                    <div className='text-sm ml-8  mt-3'>
                        {props.subtext}
                    </div>
                    <div className='mt-6 flex flex-row justify-between text-sm ml-4 text-[grey text] items-center mb-2' style={{fontFamily : "Google Sans"}}>
                        <div>{props.footerText}</div>
                        <div className='mr-4 '><img src={props.logo} className='w-[1rem] md:w-[2rem]' alt="" /></div>
                    </div>
                    <div className='bg-black w-full h-[1rem] md:h-[1.5rem] rounded-b-md'>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
