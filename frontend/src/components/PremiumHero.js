import React from 'react'
import rightsign from '../assets/rightsign.png'
import wrongsign from '../assets/wrongsign.png'
import rightsignwhite from '../assets/rightsignwhite.png'
import wrongsignwhite from '../assets/wrongsignwhite.png'

export default function PremiumHero() {
    return (
        <div>
            <div className='text-5xl font-semibold text-center m-auto mt-4'>  "India's Premier Mentorship Platform for IIT JEE and NEET"</div>
            <div className='text-3xl text-[#3E4A59] mt-8 text-center m-auto'>Your Dream College Awaits: Unlock the Path with Our Premium Mentorship</div>
            <div className='flex flex-row justify-between ml-[12.5%] mr-[12.5%] mt-8 mb-12'>
                <div className='border border-[#D9D9D9] rounded p-6 w-[30%]'>
                    <div className='text-3xl font-semibold'>Catalyst</div>
                    <div className='text-xl text-[#64748B] mt-4'>Ideal for individuals who need quick access to basic features.</div>
                    <div className='text-5xl font-semibold mt-3 flex flex-row items-center'><div>₹1999</div><span className='text-base text-[#4B5768] ml-3 font-light'>  / Month</span></div>
                    <div>
                        <button className='text-[#696DCA] border-2 rounded font-medium text-lg border-[#696DCA] w-full pt-3 pb-3 mt-4'>Get Started Now</button>
                    </div>
                    <div className='mt-4'>
                        <div className='flex flex-row items-center'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg'>Personal Mentorship By Top Experts</div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg'>Weekly Performance Sessions
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsign} alt="" />
                            <div className='ml-5 font-medium text-lg text-[#A0ABBB]'>Paper attempting techniques
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsign} alt="" />
                            <div className='ml-5 font-medium text-lg text-[#A0ABBB]'>Rank Booster Sessions
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsign} alt="" />
                            <div className='ml-5 font-medium text-lg text-[#A0ABBB]'>Multiple Practice Tests & Exams

                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsign} alt="" />
                            <div className='ml-5 font-medium text-lg text-[#A0ABBB]'>Short Notes By Mentors

                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsign} alt="" />
                            <div className='ml-5 font-medium text-lg text-[#A0ABBB]'>Access to our resources system
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsign} alt="" />
                            <div className='ml-5 font-medium text-lg text-[#A0ABBB]'>All Unlimited Services
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-[#D9D9D9] rounded p-6 w-[30%] text-white bg-[#696DCA]'>
                    <div className='text-3xl font-semibold'>Academic Accelerator</div>
                    <div className='text-xl text-[#F0D0CC] mt-4'>Ideal for individuals who who need advanced features and tools for client work.</div>
                    <div className='text-5xl font-semibold mt-3 flex flex-row items-center'><div>₹3799</div><span className='text-base text-[#F0D0CC] ml-3 font-light'>  /3 Month</span></div>
                    <div>
                        <button className='text-[#696DCA] border-2 rounded font-medium border-white text-lg bg-white w-full pt-3 pb-3 mt-4'>Get Started Now</button>
                    </div>
                    <div className='mt-4'>
                        <div className='flex flex-row items-center'>
                            <img src={rightsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg'>Personal Mentorship By Top Experts</div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg'>Weekly Performance Sessions
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg text-white'>Paper attempting techniques
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg text-white'>Rank Booster Sessions
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg text-white'>Multiple Practice Tests & Exams

                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg text-white'>Short Notes By Mentors

                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg text-white'>Access to our resources system
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={wrongsignwhite} alt="" />
                            <div className='ml-5 font-medium text-lg text-white'>All Unlimited Services
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-[#D9D9D9] rounded p-6 w-[30%]'>
                    <div className='text-3xl font-semibold'>Guidance Pro</div>
                    <div className='text-xl text-[#64748B] mt-4'>Ideal for businesses who need personalized services and security for large teams. </div>
                    <div className='text-5xl font-semibold mt-3 flex flex-row items-center'><div>₹7999</div><span className='text-base text-[#4B5768] ml-3 font-light'>  /6 Month</span></div>
                    <div>
                        <button className='text-[#696DCA] border-2 rounded font-medium text-lg border-[#696DCA] w-full pt-3 pb-3 mt-4'>Get Started Now</button>
                    </div>
                    <div className='mt-4'>
                        <div className='flex flex-row items-center'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg'>Personal Mentorship By Top Experts</div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg'>Weekly Performance Sessions
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg '>Paper attempting techniques
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg '>Rank Booster Sessions
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg '>Multiple Practice Tests & Exams

                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg '>Short Notes By Mentors

                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg '>Access to our resources system
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <img src={rightsign} alt="" />
                            <div className='ml-5 font-medium text-lg '>All Unlimited Services
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
