import React, { useState } from 'react'
import Navbar from './Navbar'
import PickDateTime from './PickDateTime'
import Details from './Details'
import PromoCode from './PromoCode'


export default function Payment() {
  const [section , setsection] = useState(1);
  const [Date , setDate] = useState({});
  const [Time , setTime] = useState({});
  const [Stream , setStream] = useState();
  const [personaldetails , setpersonaldetails] = useState({});
  console.log(personaldetails)
  console.log(Date , Time , Stream)
  function paymentSequence() {
    console.log('continue')
    if(section == 1){
      console.log("one")
      setsection(2);
    }
    if(section == 2){
      setsection(3)
    }
    console.log(section)
  }
  function OnPrevious() {
    if(section == 2){
      setsection(1)
    }
    if(section == 3){
      setsection(2)
    }
  }
  return (
    <div className='mb-4'>
      <Navbar></Navbar>
      {section == 1 ? <PickDateTime OnPrevious={OnPrevious} setsection={setsection} paymentSequence={paymentSequence} setDate = {setDate} setTime={setTime} setStream = {setStream}></PickDateTime> : <></>}
      {section == 2 ? <Details OnPrevious={OnPrevious} setpersonaldetails={setpersonaldetails} setsection={setsection} paymentSequence={paymentSequence}></Details> : <></>}
      {section == 3 ? <PromoCode OnPrevious={OnPrevious} setsection={setsection} paymentSequence={paymentSequence}></PromoCode> : <></>}
    </div>
  )
}
