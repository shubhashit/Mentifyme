import React from 'react'
import rightclick from '../assets/rightclick.png'
import leftclick from '../assets/leftclick.png'
import StudentsCard from './StudentsCard'

export default function Students() {
      const OnLeftClick = ()=>{
            console.log('left click')
            document.getElementById('div1').classList.remove("hidden")
            document.getElementById('div2').classList.add("hidden")
            document.getElementById('div2').classList.remove("flex")
      }
      const OnRightClick = ()=>{
            console.log('right click')
            document.getElementById('div1').classList.add("hidden")
            // document.getElementById('div1').classList.add("translate-x-[-110%]")
            document.getElementById('div2').classList.remove("hidden")
            // document.getElementById('div2').classList.remove("translate-x-[110%]")
            document.getElementById('div2').classList.add("flex")
      }
      return (
            <>
                  <div className='md:flex flex-col h-[100vh] justify-center items-center hidden '>
                        <div className='text-4xl font-semibold '>“Hear What Our Students Have to Say!"</div>
                        <div className='flex flex-row h-4/5 m-4'>
                              <StudentsCard
                                    title="Got my mock papers marks doubled within 2 months."
                                    name="Deepika (JEE Aspirant)"
                              ></StudentsCard>
                              <StudentsCard
                                    title="Biology Changed from my weakest to strongest after this."
                                    name="Kunal (NEET Aspirant)"
                              ></StudentsCard>
                              <StudentsCard
                                    title="Consistency Improved a lot after their tips."
                                    name="Ritika (JEE Aspirant)  "
                              ></StudentsCard>
                              <StudentsCard
                                    title="Got my mock papers marks doubled within 2 months."
                                    name="Anuj (JEE Aspirant)"
                              ></StudentsCard>
                        </div>
                        <div className='flex flex-row'>
                              <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
                              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                        </div>
                  </div>

                  <div className='flex flex-col h-fit md:h-[100vh] justify-center items-center md:hidden'>
                        <div className='text-4xl font-semibold text-center'>“Hear What Our Students Have to Say!"</div>
                        <div className='flex flex-row h-4/5 m-4'>
                              <div className='flex flex-row transition-all ' id='div1'>

                                    <StudentsCard
                                          title="Got my mock papers marks doubled within 2 months."
                                          name="Deepika (JEE Aspirant)"
                                    ></StudentsCard>
                                    <StudentsCard
                                          title="Biology Changed from my weakest to strongest after this."
                                          name="Kunal (NEET Aspirant)"
                                    ></StudentsCard>
                              </div>
                              <div className='hidden  flex-row transition-all duration-1000 ' id='div2'>

                                    <StudentsCard
                                          title="Consistency Improved a lot after their tips."
                                          name="Ritika (JEE Aspirant)  "
                                    ></StudentsCard>
                                    <StudentsCard
                                          title="Got my mock papers marks doubled within 2 months."
                                          name="Anuj (JEE Aspirant)"
                                    ></StudentsCard>
                              </div>
                        </div>
                        <div className='flex flex-row justify-center items-center mb-5'>
                              <img src={leftclick} className='mr-10' alt="" onClick={OnLeftClick} />
                              <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
                              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
                              <img src={rightclick} className='ml-10' alt="" onClick={OnRightClick} />
                        </div>
                  </div>
            </>
      )
}
