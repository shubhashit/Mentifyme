import React from 'react'
import clipboardcheck from '../assets/clipboard-check.png'
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'

export default function Hero() {
    return (
        <div className='flex flex-col md:flex-row md:mb-12  md:mt-6 ' style={{ letterSpacing: "-1px" }}>
            <div className='md:ml-6 md:w-[40%] m-4'>
                <div className='text-4xl md:text-4xl font-semibold md:font-bold mb-8 '>Get 1-on-1 Personalised Mentorship by <span className='text-[#696DCA]'>IITians & NEET</span> Toppers</div>
                <div className='text-lg md:text-xl mb-5 md:mb-0 text-[#4B5262]'>Your personalized mentorship and support platform for  and  preparation<span className='text-[#696DCA]'>IIT JEE/NEET</span> and<span className='text-[#696DCA]'> Boards</span> preparation</div>

                <div className='w-[90%] h-[90%] md:m-6 block md:hidden m-auto'>
                    <video controls width="100%" height="100%" className='h-4/5 rounded-md'>
                        <source src="your-video-url.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className='mt-4  flex flex-row justify-center'>
                    <button className='bg-[#696DCA] p-2 text-base text-white rounded-lg mr-3 w-[49%]'>Book 1 on 1 call</button>
                    <button className='bg-[white] text-black p-2 text-base font-semibold border border-black rounded-lg md:mr-3 w-[49%]'>Explore Premium</button>
                </div>
                <div className='mt-16 md:mt-6 ml-5 md:ml-0  '>
                    <div className='flex flex-row mb-3'>
                        <div className='mr-2'><img src={clipboardcheck} alt="" /></div>
                        <div className='text-[#7A7A7A]'>Instant Live Consultation calls from Experts</div>
                    </div>
                    <div className='flex flex-row mb-3'>
                        <div className='mr-2'><img src={clipboardcheck} alt="" /></div>
                        <div className='text-[#7A7A7A]'>Friendly environment to share all your teenage & academic problem</div>
                    </div>
                    <div className='flex flex-row mb-3'>
                        <div className='mr-2'><img src={clipboardcheck} alt="" /></div>
                        <div className='text-[#7A7A7A]'>Visible Improvement in your preparation in just 7 days</div>
                    </div>
                </div>
            </div>



            <div className='m-6 relative hidden  w-[60%] h-fit md:flex justify-end'>
                <video controls width="" height="" className='w-[90%] h-[50vh] rounded-lg relative '>
                    <source src="your-video-url.mp4" type="video/mp4" />
                </video>
                <div className='flex flex-row bg-white shadow-lg p-2 rounded-lg justify-around items-center absolute -bottom-10 left-2 w-[40%] lg:w-[30%]'>
                    <img src={hero1} className='mr-2 w-[3rem]' alt="" />
                    <div className='font-semibold text-center text-xs'>7 days Improvement <br /> Guarantee</div>
                </div>
                <div className='flex flex-row bg-white shadow-lg p-2 rounded-lg  justify-around items-center absolute -bottom-8 right-0 w-[30%] lg:w-[30%]'>
                    <img src={hero2} className='mr-2 w-[3rem]' alt="" />
                    <div className='font-semibold text-center text-xs'>Expert Guidance</div>
                </div>
                <div className='flex  flex-row  shadow-lg p-2 rounded-lg  justify-around items-center absolute top-10 -left-4 heroblur w-[40%] lg:w-[30%]'>
                    <img src={hero3} className='mr-2 w-[3rem]' alt="" />
                    <div className='font-semibold text-center text-[6px] md:text-[10px]'>Free Personalised <br /> Improvement roadmap <br /> by our latest AI Tech</div>
                </div>
            </div>
        </div>
    )
}
