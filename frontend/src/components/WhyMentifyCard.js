import React from 'react'

export default function WhyMentifyCard(props) {
    return (
        <div className='bg-[#FAFBFC] flex flex-col items-center justify-center w-[9rem] h-[8rem] md:w-[22rem] md:h-[16rem] p-4 mr-4'>
            <img src={props.img} className='w-[2rem] h-[2rem] md:w-auto md:h-auto' alt="" />
            <div className='text-[0.625rem] md:text-xl font-medium text-[#191D23]'>{props.text}</div>
            <div className='text-[0.5rem] md:text-base font-normal text-[#3E4A59] text-center'>{props.subtext}</div>
        </div>
    )
}
