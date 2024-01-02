import React from 'react'
import Upcoming from './Upcoming'
import Past from './Past'

export default function Session() {
  return (
      <div className='w-full md:w-2/4 md:m-4 h-fit'>
      <Upcoming></Upcoming>
      <Past></Past>
    </div>
  )
}
