import React, { useRef } from 'react'
import x from '../assets/x.svg'
import xwhite from '../assets/xwhite.svg'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const navigate = useNavigate(); 
    const dark = false;
    const InputNumber = useRef();
    const OTP = useRef();
    const OnLoginOTP = async (e) => {

        console.log(InputNumber.current.value)
        console.log(OTP.current.value)
        const otp = OTP.current.value;
        props.setopt(otp);
        console.log(props)
        try {
            
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json",
            }

            let bodyContent = JSON.stringify({
                "phone_number": props.phone_number,
                "otp": otp
            });

            let response = await fetch("https://fa67-2401-4900-73e4-ae27-88ba-e20e-3377-af33.ngrok-free.app/api/verify-otp/", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.json();
            console.log(data);
            props.setpage(3)
            // navigate('/LoginPassword')
        } catch (error) {
            console.log(error)
        }
        props.setpage(3)

    }
    function Tohome(){
        navigate('/')
    }
    return (
        <div className={`h-[100vh] md:w-[70vw] w-screen ${dark ? 'bg-black' : 'bg-white'} absolute right-0 top-0 md:pl-12 p-4`}>
            <div className='relative flex justify-end ' onClick={Tohome}><img src={dark ? xwhite : x} className='m-4 cursor-pointer' alt="" /></div>
            <div className='mt-12'>

                <div className='text-2xl md:text-5xl font-bold text-[#696DCA] mb-2'  >Enter OTP</div>
                <div className='text-[#898989] text-base md:text-lg mb-4'>We've sent an OTP to your Registered Mobile Number</div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-full md:w-3/5 p-2 text-sm md:text-xl mb-4 flex flex-row  items-center`}>
                    +91 <span className='flex flex-row justify-between items-center w-[90%] text-sm md:text-base'><input ref={InputNumber} value={props.phone_number} contentEditable={false} type="text" placeholder='9039144565' className={`outline-none ml-1 text-[#696DCA] w-full ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#696DCA]"} text-sm md:text-base `} /> <div className='text-[#696DCA] cursor-pointer'>Edit</div> </span>
                </div>
                <div className={`border-2 outline-none ${dark ? "border-white text-white" : "border-[#696DCA]"} w-full md:w-3/5 md:p-4 p-2 text-sm md:text-xl mb-4 flex flex-row  items-center `}>
                    <span><input ref={OTP}   type="text" placeholder='One time password' className={` w-[160%]lg:w-[200%] outline-none ml-1 text-[#696DCA] ${dark ? "bg-black placeholder:text-white text-white" : "bg-white placeholder:text-[#22222259]"} `} /></span>
                </div>
                <div className='w-full md:w-3/5 flex flex-row justify-between items-center'>
                    <button className='bg-[#696DCA]  p-6 pt-3 pb-3 w-[10rem] text-xl text-white rounded-md mr-3 mb-10 mt-8' onClick={OnLoginOTP}>Verify OTP </button>
                    <div className='text-[#696DCA] font-semibold text-lg'>Resend OTP</div>
                </div>

                <div className={`text-xs md:text-lg font-semibold ${dark ? "text-white" : "text-black"}`}>Having trouble please contact <span className='text-[#696DCA]'>helpansrcoach@learn.com</span> for further support  into</div>
            </div>
        </div>
    )
}
