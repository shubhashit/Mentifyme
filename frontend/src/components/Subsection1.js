import React from 'react'
import femaleStudent from '../assets/femaleStudent.png'
import upperAngle from '../assets/upperAngle.svg'
import lowerAngle from '../assets/lowerAngle.svg'

export default function Subsection1() {
    return (
        <div className='m-3'>
            <div className='text-4xl font-semibold'>Are You Facing<span className='text-[#696DCA]'> Challenges </span>in your Preparation? </div>
            <div className='text-xl'>It's never been easier to crack<span className='text-[#696DCA]'> JEE & NEET</span> at ease. Do you face these challenges: </div>


            <div className='border border-black flex flex-row m-10'>
                <div><img src={femaleStudent} className='' alt="" /></div>
                <div>
                    <div>upper bracet</div>
                    <div>text</div>
                    <div><button></button></div>
                    <div>lower bracet</div>
                </div>
            </div>
            <div>navigation</div>
        </div>
    )
}
