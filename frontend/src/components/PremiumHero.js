import React, { useState } from 'react'
import rightsign from '../assets/rightsign.png'
import wrongsign from '../assets/wrongsign.png'
import rightsignwhite from '../assets/rightsignwhite.png'
import wrongsignwhite from '../assets/wrongsignwhite.png'
import rightclick from '../assets/rightclick.png'
import leftclick from '../assets/leftclick.png'

export default function PremiumHero() {
    const [Page , setPage] = useState(2);
    function Onrightclick (){
        console.log(document.getElementById("MainPremiumBox").offsetWidth)
        console.log(Page);
        if(Page == 2){
            document.getElementById("MainPremiumBox").classList.remove("-translate-x-[100vw]")
            
            document.getElementById("MainPremiumBox").classList.add("-translate-x-[200vw]");
            setPage(3);
        }
        if(Page == 1){
            document.getElementById("MainPremiumBox").classList.remove("-translate-x-[0vw]")
            document.getElementById("MainPremiumBox").classList.add("-translate-x-[100vw]");
            setPage(2);
        }
    }
    function OnleftClick(){
        console.log(Page)
        if(Page == 3){
            document.getElementById("MainPremiumBox").classList.remove("-translate-x-[200vw]")
            document.getElementById("MainPremiumBox").classList.add("-translate-x-[100vw]");
            setPage(2);
            
        }
        if(Page == 2){
            document.getElementById("MainPremiumBox").classList.remove("-translate-x-[100vw]")
            document.getElementById("MainPremiumBox").classList.add("-translate-x-[0vw]");
            setPage(1);
        }
    }
    return (
        <div className='w-full  md:p-0'>
            <div className='text-3xl md:text-5xl font-semibold text-start md:text-center m-auto mt-4 p-2'>  "India's Premier Mentorship Platform for IIT JEE and NEET"</div>
            <div className='text-sm md:text-3xl text-[#3E4A59] mt-3 md:mt-8 text-start md:text-center m-auto pl-2'>Your Dream College Awaits: Unlock the Path with Our Premium Mentorship</div>
            <div className='md:flex md:flex-row justify-between ml-[8%] mr-[8%] mt-8 mb-12 hidden'>
                <div className='border border-[#D9D9D9] rounded p-2 md:p-6 md:w-[30%]'>
                    <div className='h-[18rem] flex flex-col justify-between'>
                        <div className='text-sm md:text-3xl font-semibold'>Catalyst</div>
                        <div className='text-xs md:text-base text-[#64748B] mt-4'>Ideal for individuals who need quick access to basic features.</div>
                        <div className='text-xl md:text-5xl font-semibold mt-3 flex flex-row items-center'><div>₹1999</div><span className='text-base text-[#4B5768] ml-3 font-light'>  / Month</span></div>
                        <div>
                            <button className='text-[#696DCA] border-2 rounded font-medium text-lg border-[#696DCA] w-full pt-3 pb-3 mt-4'>Get Started Now</button>
                        </div>
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
                <div className='border border-[#D9D9D9] rounded p-2 md:p-6 md:w-[30%] text-white bg-[#696DCA]'>
                    <div className='h-[18rem] flex flex-col justify-between'>
                        <div className='text-3xl font-semibold'>Academic Accelerator</div>
                        <div className='text-base text-[#F0D0CC] mt-4'>Ideal for individuals who who need advanced features and tools for client work.</div>
                        <div className='text-5xl font-semibold mt-3 flex flex-row items-center'><div>₹3799</div><span className='text-base text-[#F0D0CC] ml-3 font-light'>  /3 Month</span></div>
                        <div>
                            <button className='text-[#696DCA] border-2 rounded font-medium border-white text-lg bg-white w-full pt-3 pb-3 mt-4'>Get Started Now</button>
                        </div>
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
                <div className='border border-[#D9D9D9] rounded p-2 md:p-6 md:w-[30%]'>
                    <div className='h-[18rem] flex flex-col justify-between'>
                        <div className='text-3xl font-semibold'>Guidance Pro</div>
                        <div className='text-base text-[#64748B] mt-4'>Ideal for businesses who need personalized services and security for large teams. </div>
                        <div className='text-5xl font-semibold mt-3 flex flex-row items-center'><div>₹7999</div><span className='text-base text-[#4B5768] ml-3 font-light'>  /6 Month</span></div>
                        <div>
                            <button className='text-[#696DCA] border-2 rounded font-medium text-lg border-[#696DCA] w-full pt-3 pb-3 mt-4'>Get Started Now</button>
                        </div>
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


            {/* for short screen */}
            <div id='MainPremiumBox' className='flex md:flex-row justify-between  mt-8 mb-12 w-fit md:hidden       -translate-x-[100vw]'>
                <div className='w-[100vw] flex items-center justify-center'>
                    <div className='border border-[#D9D9D9] rounded w-[80%] p-2 md:p-6 '>
                        <div className='h-fit flex flex-col justify-between'>
                            <div className='text-sm md:text-3xl font-semibold'>Catalyst</div>
                            <div className='text-xs md:text-base text-[#64748B] mt-2'>Ideal for individuals who need quick access to basic features.</div>
                            <div className='text-2xl md:text-5xl font-semibold mt-1 flex flex-row items-center'><div>₹1999</div><span className='text-[0.5rem] text-[#4B5768] ml-3 font-light'>  / Month</span></div>
                            <div>
                                <button className='text-[#696DCA] border-2 rounded font-medium text-[0.5rem] border-[#696DCA] w-full mt-4 pb-1 pt-1'>Get Started Now</button>
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <div className='flex flex-row items-center'>
                                <img className='ml-3 w-[1rem] h-[1rem]' src={rightsign} alt="" />
                                <div className='ml-3 font-medium text-[0.5rem]'>Personal Mentorship By Top Experts</div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img className='ml-3 w-[1rem] h-[1rem]' src={rightsign} alt="" />
                                <div className='ml-3 font-medium text-[0.5rem]'>Weekly Performance Sessions
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-[#A0ABBB]'>Paper attempting techniques
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-[#A0ABBB]'>Rank Booster Sessions
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-[#A0ABBB]'>Multiple Practice Tests & Exams

                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-[#A0ABBB]'>Short Notes By Mentors

                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-[#A0ABBB]'>Access to our resources system
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-[#A0ABBB]'>All Unlimited Services
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] flex items-center justify-center'>
                    <div className='border border-[#D9D9D9] rounded w-[80%] p-2 md:p-6  text-white bg-[#696DCA]'>
                        <div className='h-fit flex flex-col justify-between'>
                            <div className='text-[0.68rem] font-semibold mt-4'>Academic Accelerator</div>
                            <div className='text-[0.5rem] text-[#F0D0CC] mt-2'>Ideal for individuals who who need advanced features and tools for client work.</div>
                            <div className='text-2xl font-semibold flex flex-row items-center mt-2'><div>₹3799</div><span className='text-[0.5rem] text-[#F0D0CC] ml-3 font-light'>  /3 Month</span></div>
                            <div>
                                <button className='text-[#696DCA] border-2 rounded font-medium border-white text-[0.5rem] bg-white w-full pt-1 pb-1 mt-4'>Get Started Now</button>
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <div className='flex flex-row items-center'>
                                <img src={rightsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem]'>Personal Mentorship By Top Experts</div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem]'>Weekly Performance Sessions
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-white'>Paper attempting techniques
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-white'>Rank Booster Sessions
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-white'>Multiple Practice Tests & Exams

                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-white'>Short Notes By Mentors

                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-white'>Access to our resources system
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={wrongsignwhite} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] text-white'>All Unlimited Services
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] flex items-center justify-center'>
                    <div className='border border-[#D9D9D9] rounded p-2 md:p-6 w-[80%]'>
                        <div className='h-fit flex flex-col justify-between'>
                            <div className='text-sm md:text-3xl font-semibold'>Guidance Pro</div>
                            <div className='text-xs md:text-base text-[#64748B] mt-2'>Ideal for businesses who need personalized services and security for large teams. </div>
                            <div className='text-2xl md:text-5xl font-semibold mt-1 flex flex-row items-center'><div>₹7999</div><span className='text-[0.5rem] text-[#4B5768] ml-3 font-light'> 6 / Month</span></div>
                            <div>
                                <button className='text-[#696DCA] border-2 rounded font-medium text-[0.5rem] border-[#696DCA] w-full mt-4 pb-1 pt-1'>Get Started Now</button>
                            </div>
                        </div>
                        <div className='mt-4 mb-4'>
                            <div className='flex flex-row items-center'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem]'>Personal Mentorship By Top Experts</div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem]'>Weekly Performance Sessions
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] '>Paper attempting techniques
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] '>Rank Booster Sessions
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] '>Multiple Practice Tests & Exams

                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] '>Short Notes By Mentors

                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] '>Access to our resources system
                                </div>
                            </div>
                            <div className='flex flex-row items-center mt-3'>
                                <img src={rightsign} className='ml-3 w-[1rem] h-[1rem]' alt="" />
                                <div className='ml-3 font-medium text-[0.5rem] '>All Unlimited Services
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center mb-5 md:hidden'>
                <img src={leftclick} className='mr-10' alt="" onClick={OnleftClick} />
                <div className={`w-4 h-4 rounded-full ${Page === 1 ? "bg-[#696DCA]" :"bg-[#D9D9D9]" }  mr-2`}></div>
                <div className={`w-4 h-4 rounded-full ${Page === 2 ? "bg-[#696DCA]" :"bg-[#D9D9D9]" }  mr-2`}></div>
                <div className={`w-4 h-4 rounded-full ${Page === 3 ? "bg-[#696DCA]" :"bg-[#D9D9D9]" }  mr-2`}></div>
                <img src={rightclick} className='ml-10' alt="" onClick={Onrightclick} />
            </div>
        </div >
    )
}
