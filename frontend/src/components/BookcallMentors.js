import React from 'react'
import BookcallMentorsCard from './BookcallMentorsCard'

export default function BookcallMentors() {
  return (
    <div className='mt-4 md:mt-0 overflow-x-hidden' >
          <div className='text-[#696DCA] text-xs font-normal text-center'>DON'T LOOSE YOUR CANCE TO EXCLE</div>
      <div className='font-medium text-lg text-center md:text-5xl
      '>Mentors Live Now</div>
      <div className='flex flex-row overflow-x-hidden p-2 w-fit'>
        <BookcallMentorsCard></BookcallMentorsCard>
        <BookcallMentorsCard></BookcallMentorsCard>
        <BookcallMentorsCard></BookcallMentorsCard>
        <BookcallMentorsCard></BookcallMentorsCard>
        <BookcallMentorsCard></BookcallMentorsCard>
        <BookcallMentorsCard></BookcallMentorsCard>
        <BookcallMentorsCard></BookcallMentorsCard>
        <BookcallMentorsCard></BookcallMentorsCard>
      </div>
    </div>
  )
}
