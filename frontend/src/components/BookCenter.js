import React from 'react'
import imagemain from '../assets/bookcall/imagemain.png'
import imagemain2 from '../assets/bookcall/imagemain2.png'
import { useNavigate } from 'react-router-dom';
export default function BookCenter() {
    const navigate = useNavigate();
    function topayment() {
        navigate('/payment')
    }
    return (
        <div className='flex flex-col items-center p-2'>
            <div className='md:hidden'><img src={imagemain} alt="" /></div>
            <div className='hidden md:block w-[70%]'><img src={imagemain2} alt="" /></div>

            <div className='text-base md:text-4xl font-semibold md:font-bold m-3 text-center'><span className='text-[#696DCA]'>"Don't miss this chance</span>—it could be the key to acing your exams and securing your<span className='text-[#696DCA]'> dream college</span>. Book call now ₹399 only!"</div>


            <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[13rem] text-center rounded '><button onClick={topayment}>Book Your Call Now</button></div>
        </div>
    )
}
