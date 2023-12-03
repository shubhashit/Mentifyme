import React, { useEffect, useRef, useState } from 'react'
import x from '../assets/x.svg'
import xwhite from '../assets/xwhite.svg'
import googleLogo from '../assets/googleLogo.png'
import { useNavigate } from 'react-router-dom'
import LoginOTP from './LoginOTP'
import LoginPassword from './LoginPassword'
import axios from 'axios'

export default function Login(props) {

    // const baseurl = process.env.REACT_APP_BASE_URL;
    // console.log(baseurl);
    const [page , setpage] = useState(1);
    const [phone_number , setPhone_number] = useState();
    const navigate = useNavigate();
    const dark = false;
    const InputNum = useRef();
    const OnLogin = async (e) => {
        console.log('login')
        console.log(InputNum.current.value);
        const number = InputNum.current.value;
        props.setPhone_number(number)
        setPhone_number(number);
        try {
            // let headersList = {
            //     "Accept": "*/*",
            //     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            //     "Content-Type": "application/json",
            //     // 'X-CSRFToken': getCookie('csrftoken'),
            // }
            let bodyContent = JSON.stringify({
                "phone_number": number
            });

            // let response = await fetch("https://fa67-2401-4900-73e4-ae27-88ba-e20e-3377-af33.ngrok-free.app/api/get-otp/", {
            //     method: "POST",
            //     body: bodyContent,
            //     headers: headersList
            // }); 


            // let data = await response.json();
            // console.log(data);
            let postData = {
                "phone_number"  : number, 
            }
            const url = 'https://5160-2401-4900-3e38-60ff-bcbc-c8de-f7f4-6308.ngrok-free.app/api/get-otp/';

            // Making the POST request using Axios
            const response = await axios.post(url, postData);
            // 'http://localhost:8000/set_session_variable/', {}, { withCredentials: true }

            // Handle the response as needed
            console.log('Response:', response.data);
           setpage(2);

        } catch (error) {
            console.log(error)
        }

    }

    console.log(page)

    return (
        <>
           {page == 1 ? <div className={`h-[100vh] w-[70vw] ${dark ? 'bg-black' : 'bg-white'} absolute right-0 top-0 pl-12`}>
                <div className='relative flex justify-end '><img src={dark ? xwhite : x} className='m-4 cursor-pointer' alt="" onClick={() => { navigate("/") }} /></div>
                <div className='mt-12'>

                    <div className='text-5xl font-bold text-[#696DCA] mb-2'  >Login</div>
                    <div className='text-[#696DCA] font-semibold text-lg mb-4'>or create your account</div>
                    <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center`}>
                        +91 |  <span><input ref={InputNum} type="text" placeholder='9039144565' className={`outline-none ml-1 ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} `} /></span>
                    </div>
                    <div><button className='bg-[#696DCA]  p-6 pt-3 pb-3 w-[10rem] text-xl text-white rounded-md mr-3 mb-10 mt-8' onClick={OnLogin}>Login</button></div>
                    {/* <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-3/5 p-4 text-xl mb-4 flex flex-row  items-center justify-center cursor-pointer`}>
                    <img src={googleLogo} className='mr-3 h-[2.5rem]' alt="" />
                    <div className={`font-bold ${dark ? "text-white" : "text-black"}`}>Login with Google</div>
                </div> */}
                    <div className={`text-lg font-semibold ${dark ? "text-white" : "text-black"}`}>Having trouble please contact <span className='text-[#696DCA]'>helpansrcoach@learn.com</span> for further support  into</div>
                </div>
            </div> : <></>}
            {page == 2 ? <LoginOTP setpage={setpage} phone_number={phone_number} ></LoginOTP> : <></>}
            {page == 3 ? <LoginPassword></LoginPassword> : <></>}
        </>
    )
}
