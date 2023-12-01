import React, { useRef } from 'react'

export default function PromoCode(props) {
    const code = useRef()
    async function Applycode(){
        console.log('code')
        console.log(code.current.value)
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "code": "2123",
                "service_code": "1234"
            });

            let response = await fetch("https://fa67-2401-4900-73e4-ae27-88ba-e20e-3377-af33.ngrok-free.app/api/verify-promo-code/", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.text();
            console.log(data);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='relative flex flex-col items-center justify-between pt-24'>
            <div className='absolute left-3 top-6 text-[#878787] text-lg font-normal'>&lt;   Book call</div>
            <div className='flex flex-row '>
                <div className='flex flex-row items-center'>
                    <div className='bg-[#12B76A] w-6 h-6 rounded-full flex justify-center items-center text-white'>1</div>
                    <div className='text-[#12B76A] ml-3 font-medium'>Date & Time</div>
                    <div className='h-1 w-16 bg-[#12B76A] ml-3' ></div>
                </div>
                <div className='flex flex-row items-center ml-4'>
                    <div className='bg-[#12B76A] w-6 h-6 rounded-full flex justify-center items-center text-white'>2</div>
                    <div className='text-[#12B76A] ml-3 font-medium'>Details</div>
                    <div className='h-1 w-24 bg-[#12B76A] ml-3' ></div>
                </div>
                <div className='flex flex-row items-center ml-4'>
                    <div className='bg-[#696DCA] w-6 h-6 rounded-full flex justify-center items-center text-white'>3</div>
                    <div className='text-[#696DCA] ml-3 font-medium'>Payment</div>
                </div>
            </div>
            <div className='w-[90%] lg:w-[]]'>


            </div>
            <div className='w-[90%]  rounded mt-8 relative mb-8  flex flex-col items-center justify-between border p-12 h-fit' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                <div className='absolute text-2xl font-normal top-4 left-4 text-[#696DCA] cursor-pointer' onClick={props.OnPrevious}>&lt; Pervious</div>
                <div>

                    <div className='text-base font-normal text-[#878787] '>Session details will be sent to your email address <span className='text-[#696DCA]'>abhisheksinghlodhi2021@gmail.com</span> </div>
                    <div className='h-16 w-[38rem] text-xl font-normal bg-[#696DCA1A] flex flex-row justify-between items-center pr-4 pl-4 mt-4 rounded'>
                        <div>Payable Amount</div>
                        <div>₹ 799</div>
                    </div>
                </div>
                <div>

                    <div className='text-xl font-normal text-[#878787] flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center'>
                            <input className='w-6 h-6 bg-[#696DCA] mr-2' type="checkbox" name="" id="" />
                            Promocode <span className='text-[#696DCA] font-medium mr-1 ml-1'> MENTIFYMEDIWALI </span>applied
                        </div>
                        <div className='text-xl font-normal text-black mr-4'>-₹ 100</div>
                    </div>
                    <div className='h-16 w-[38rem] text-xl  bg-[#696DCA1A] flex flex-row justify-between items-center pr-4 pl-4 mt-4 border border-[#696DCA] rounded font-medium'>
                        <div>Remaining amount to be paid</div>
                        <div>₹ 699</div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center mt-4'>
                    <input ref={code} type='text' className='h-16 w-[33rem] mr-4 rounded-lg border pl-4 text-xl  outline-none placeholder:text-[#878787]' placeholder='Have a promo code?'></input>
                    <div className='text-[#878787] text-xl font-medium cursor-pointer'  onClick={Applycode}>APPLY NOW</div>
                </div>
            </div>
            <div className='w-[24rem] p-4 text-base font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 cursor-pointer'>Proceed to Payment</div>
        </div>
    )
}
