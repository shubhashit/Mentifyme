import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import PickDateTime from './PickDateTime'
import Details from './Details'
import PromoCode from './PromoCode'
import UserContext from './context/UserContext'
import { useNavigate } from 'react-router-dom'


export default function Payment() {
  const { user } = useContext(UserContext); 
  const [section , setsection] = useState(1);
  const [Date , setDate] = useState({});
  const [Time , setTime] = useState({});
  const [Stream , setStream] = useState();
  const [personaldetails , setpersonaldetails] = useState({});
  const [dateTimeDetails , setDateTimeDetails] = useState({})
  const navigate = useNavigate()
  console.log(personaldetails)
  console.log(Date , Time , Stream)
  // useEffect(()=>{
  //   if(user == null){
  //     navigate('/login')
  //   }
  // } , [user])
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
      {section == 1 ? <PickDateTime d setDateTimeDetails={setDateTimeDetails} paymentSequence={paymentSequence} ></PickDateTime> : <></>}
      {section == 2 ? <Details OnPrevious={OnPrevious} setpersonaldetails={setpersonaldetails} setsection={setsection} paymentSequence={paymentSequence} dateTimeDetails={dateTimeDetails}></Details> : <></>}
      {section == 3 ? <PromoCode OnPrevious={OnPrevious} setsection={setsection} paymentSequence={paymentSequence}dateTimeDetails={dateTimeDetails} ></PromoCode> : <></>}
    </div>
  )
}
