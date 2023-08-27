import React from 'react'
import StudentsCard from './StudentsCard'

export default function Students() {
  return (
    <div className='flex flex-col h-[100vh] justify-center items-center'>
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
  )
}
