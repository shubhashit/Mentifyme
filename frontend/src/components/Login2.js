import React, { useContext, useRef, useState } from 'react'
import x from '../assets/x.svg'
import xwhite from '../assets/xwhite.svg'
import { useNavigate } from 'react-router-dom'
import UserContext from './context/UserContext'

export default function Login2() {
    const { user , setUser } = useContext(UserContext);
    function on(){
        setUser({"name" : "shubh" , "id" : "autogenerate"});
    }
    console.log(user)
    const navigate = useNavigate();
    const dark = false;
    const InputNum = useRef();
    const password = useRef();
    async function OnLogin() {
        let num = InputNum.current.value;
        let Password = password.current.value;
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "phone_number": num,
            "password": Password
        });

        let response = await fetch("https://04de-2401-4900-73f6-f125-dc6e-48d9-32e-21e.ngrok-free.app/api/login/", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);
    }
    async function Tosignup() {
        navigate('/signup')
    }
    return (
        <div className={`h-[100vh] w-screen md:w-[70vw] ${dark ? 'bg-black' : 'bg-white'} absolute right-0 top-0 md:pl-12 p-4`}>
            <div className='relative flex justify-end '><img src={dark ? xwhite : x} className=' md:m-4 cursor-pointer' alt="" onClick={() => { navigate("/") }} /></div>
            <div className='mt-6 md:mt-12'>

                <div className='text-2xl md:text-5xl font-bold text-[#696DCA] mb-2' onClick={on} >Login</div>
                <div className='text-[#696DCA] font-semibold text-base md:text-lg mb-4 cursor-pointer' onClick={Tosignup}>or create your account</div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} md:w-3/5 p-4 text-xl mb-4 flex flex-row w-full items-center`}>
                    +91 |  <span><input ref={InputNum} type="text" placeholder='9039144565' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} /></span>
                </div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} md:w-3/5 w-full p-4 text-xl mb-4 flex flex-row  items-center`}>
                    <span><input ref={password} type="password" placeholder='Password' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} /></span>
                </div>
                <div><button className='bg-[#696DCA]  p-6 pt-3 pb-3 w-full md:w-[10rem] text-xl text-white rounded-md mr-3 mb-10 mt-8' onClick={OnLogin}>Login</button></div>
                {/* <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center justify-center cursor-pointer`}>
                    <img src={googleLogo} className='mr-3 h-[2.5rem]' alt="" />
                    <div className={`font-bold ${dark ? "text-white" : "text-black"}`}>Login with Google</div>
                </div> */}
                <div className={`text-xs md:text-lg text-center font-semibold ${dark ? "text-white" : "text-black"}`}>Having trouble please contact <span className='text-[#696DCA]'>helpansrcoach@learn.com</span> for further support  into</div>
            </div>
        </div>
    )
}
