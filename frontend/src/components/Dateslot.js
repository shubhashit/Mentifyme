import React from 'react'

export default function Dateslot(props) {
  return (
      <div className={`w-[6.375rem] h-[4.6875rem] rounded-lg flex flex-col items-center justify-center border border-[${props.color}] mr-3 ml-3`}>  
          <div className={`text-base font-medium text-[${props.color}]`}>{props.day}</div>
          <div className={`text-[${props.color}] text-lg font-bold`}>{props.date}</div>
    </div>
  )
}
