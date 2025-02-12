import React, { useRef ,useContext, useState} from 'react'
import TokenContext from './context/UserToken';
import useRazorpay from "react-razorpay";

export default function PromoCode(props) {
    const url = process.env.REACT_APP_BASE_URL;
    const { token, setToken } = useContext(TokenContext); 
    const code = useRef(null)
    const [price , setPrice ] = useState();
    const [Code , setCode] = useState()
    const [Razorpay] = useRazorpay();


    async function Applycode() {
        console.log('code')
        // console.log(code._root._getText())
        console.log(code.current.value)
        let apicode = code.current.value;
        try { 
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
                // 'X-CSRFToken': csrfToken
            }

            let bodyContent = JSON.stringify({
                "code": apicode,
                "service_code": "neet"
            });

            let response = await fetch(`${url}/`, {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });
            let data = await response.json();
            const order_id = data.data.data.id
            const options = {
                key: "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
                amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature);
                },
                prefill: {
                    name: "Piyush Garg",
                    email: "youremail@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new Razorpay(options);

            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });

            rzp1.open();
            

        } catch (error) {
            
            console.log(error)
        }
    }
    async function razorPay(){
        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
                // 'X-CSRFToken': csrfToken
            }

            let bodyContent = JSON.stringify({
                "amount" : "",
                "currency" : "INR"
            });

            let response = await fetch(`${url}/api/verify-promo-code/`, {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });
            setCode(apicode);
            let data = await response.json();
            setPrice(data);
            console.log(data);

        } catch (error) {

            console.log(error)
        }
    }
    return (
        <>
            <div className='relative md:flex flex-col items-center justify-between pt-24 hidden'>
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

                        <div className='text-base font-normal text-[#878787] '>Session details will be sent to your email address <span className='text-[#696DCA]'>{props.personaldetails.email}</span> </div>
                        <div className='h-16 w-[38rem] text-xl font-normal bg-[#696DCA1A] flex flex-row justify-between items-center pr-4 pl-4 mt-4 rounded'>
                            <div>Payable Amount</div>
                            <div>₹ {props.dateTimeDetails.amount}</div>
                        </div>
                    </div>
                    <div>

                        {Code && <div className='text-xl font-normal text-[#878787] flex flex-row justify-between items-center'>
                            <div className='flex flex-row items-center'>
                                <input className='w-6 h-6 bg-[#696DCA] mr-2' type="checkbox" checked name="" id="" />
                                Promocode <span className='text-[#696DCA] font-medium mr-1 ml-1'> {Code} </span>applied
                            </div>
                            <div className='text-xl font-normal text-black mr-4'>-₹ {price && price.off_amount}</div>
                        </div>}
                        <div className='h-16 w-[38rem] text-xl  bg-[#696DCA1A] flex flex-row justify-between items-center pr-4 pl-4 mt-4 border border-[#696DCA] rounded font-medium'>
                            <div>Remaining amount to be paid</div>
                            <div>₹ {price && price.amount_after_off}</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-4'>
                        <input ref={code}  type='text' className='h-16 w-[33rem] mr-4 rounded-lg border pl-4 text-xl outline-none placeholder:text-[#878787]' placeholder='Have a promo code?'></input>
                        <div className='text-[#878787] text-xl font-medium cursor-pointer' onClick={Applycode}>APPLY NOW</div>
                    </div>
                </div>
                <div className='w-[24rem] p-4 text-base font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 cursor-pointer'>Proceed to Payment</div>
            </div>

            {/* mobile view down  */}
            <div className='relative flex md:hidden flex-col items-center justify-between pt-24'>
                <div className='absolute left-3 top-6 text-[#3F3D56] text-lg font-medium'>&lt;   Book call</div>
                <div className='flex flex-row w-screen justify-start'>
                    <div className='flex flex-row items-center'>
                        <div className='text-[#12B76A] ml-3 font-medium text-sm'>Date & Time   &gt;</div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='text-[#12B76A] ml-3 font-medium text-sm'>Details   &gt;</div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='text-[#696DCA] ml-3 font-medium text-sm'>Payment</div>
                    </div>
                </div>

                <div className='w-screen  rounded mt-8 h-[60vh] relative mb-8  flex flex-col items-start justify-between p-2 ' >
                    {/* <div className='absolute text-2xl font-normal top-4 left-4 text-[#696DCA] cursor-pointer' onClick={props.OnPrevious}>&lt; Pervious</div> */}
                    <div>

                        <div className='text-base font-normal text-[#878787] flex flex-wrap'>Session details will be sent to your email address <span className='text-[#696DCA]'>abhisheksinghlodhi2021@gmail.com</span> </div>
                        <div className='h-12 w-full text-sm font-medium bg-[#696DCA1A] flex flex-row justify-between items-center pr-4 pl-4 mt-4 rounded mb-2'>
                            <div>Payable Amount</div>
                            <div>₹ 799</div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-sm font-normal text-[#878787] flex flex-row justify-between items-center'>
                            <div className='flex flex-row items-center'>
                                <input className='w-3 h-3 bg-[#696DCA] mr-2' type="checkbox" name="" id="" />
                                Promocode <span className='text-[#696DCA] font-medium mr-1 ml-1'> MENTIFYMEDIWALI </span>applied
                            </div>
                            <div className='text-sm font-normal text-black mr-4'>-₹ 100</div>
                        </div>
                        <div className='h-12 w-full text-sm  bg-[#696DCA1A] flex flex-row justify-between items-center pr-4 pl-4 mt-4 border border-[#696DCA] rounded font-medium'>
                            <div>Remaining amount to be paid</div>
                            <div>₹ 699</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center mt-4 w-full'>
                        <input  type='text' className='h-12 w-[70%] rounded-lg border pl-4 text-sm  outline-none placeholder:text-[#878787]' placeholder='Have a promo code?'></input>
                        <div className='text-[#878787] text-sm font-medium cursor-pointer' onClick={Applycode}>APPLY NOW</div>
                    </div>
                    <div className='w-full p-4 text-[12px] font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 cursor-pointer' onClick={razorPay}>Proceed to Payment</div>
                </div>
            </div>
        </>
    )
}
