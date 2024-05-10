import React, { useContext, useEffect, useState } from 'react'
import leftdate from '../assets/payment/leftdate.png'
import rightdate from '../assets/payment/rightdate.png'
import Dateslot from './Dateslot'
import TokenContext from './context/UserToken';

export default function PickDateTime(props) {
    // const [datetime, setdatetime] = useState()
    // const [stream, setStream] = useState();
    const url = process.env.REACT_APP_BASE_URL;
    // const OBJ = {
    //     "book_data": {
    //         "slotsjee": [
    //             {
    //                 "slot": "12:30 PM",
    //                 "id": 8,
    //                 "slot_date": "2024-05-14"
    //             },
    //             {
    //                 "slot": "7:30 PM",
    //                 "id": 10,
    //                 "slot_date": "2024-04-28"
    //             }
    //         ],
    //         "slotsneet": [
    //             {
    //                 "slot": "8:00 PM",
    //                 "id": 3,
    //                 "slot_date": "2024-03-13"
    //             },
    //             {
    //                 "slot": "8:00 PM",
    //                 "id": 4,
    //                 "slot_date": "2024-03-27"
    //             },
    //             {
    //                 "slot": "8:00 PM",
    //                 "id": 7,
    //                 "slot_date": "2024-04-07"
    //             },
    //             {
    //                 "slot": "9:30 PM",
    //                 "id": 9,
    //                 "slot_date": "2024-04-28"
    //             },
    //             {
    //                 "slot": "8:00 PM",
    //                 "id": 11,
    //                 "slot_date": "2024-04-28"
    //             },
    //             {
    //                 "slot": "11:30 PM",
    //                 "id": 12,
    //                 "slot_date": "2024-04-28"
    //             }
    //         ],
    //         "amount_services": []
    //     }
    // }


    // console.log(OBJ.book_data.slotsjee)
    // console.log(OBJ.book_data.slotsneet)


    const [jeeSlot, setjeeSlot] = useState();
    const [neetSlot, setneetSlot] = useState([]);
    const [onlydates, setonlydates] = useState([]);
    const [stream, setStream] = useState();
    const [DateL, setDateL] = useState();
    const [TimeL, setTimeL] = useState();
    const [timeG, setTimeG] = useState();
    const [slotG, setSlotG] = useState([]);
    const [dateG, setDateG] = useState(undefined);
    const [timeArr, setTimeArr] = useState();
    const [timeId, setTimeId] = useState();


    const { token, setToken } = useContext(TokenContext);
    console.log(token)

    useEffect(() => {
        // Make a GET request
        async function fetchdata() {
            console.log("fetchdata");
            try {
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Authorization": "Token f03c4dfc9701095bdd9c261c70d0ff4e530f8d63"
                }

                let response = await fetch(`${url}/api/oneonecall/`, {
                    method: "GET",
                    headers: headersList
                });
                console.log(response)
                let data = await response.json()
                // let data = await response.status();
                console.log(data);

                console.log(data);

                // console.log(data.book_data.slotsjee)
                // console.log(data.book_data.slotsneet)
                setjeeSlot(data.book_data.slotsjee);
                setneetSlot(data.book_data.slotsneet);
                
                console.log(jeeSlot, neetSlot)
                console.log(onlydates)

            } catch (error) {
                console.log(error)
            }
        }

        fetchdata();
    }, []);

    const arr = [
        {
            "id": 5,
            "slot_date": "2024-03-27",
            "Booking_status": false,
            "temp_booking_status": false,
            "Mentor": 27,
            "Time_slot": 2
        }
    ]
    useEffect(() => {
        let groupedByDate = [];
        let temp = [];
        slotG.forEach(obj => {
            if (!groupedByDate[obj.slot_date]) {
                temp.push(obj.slot_date)
                groupedByDate[obj.slot_date] = [];
            }
            // else groupedByDate[obj.slot_date] = { ...groupedByDate[obj.slot_date], obj };
            groupedByDate[obj.slot_date].push(obj);
        });
        setonlydates(temp)
        console.log(onlydates)
        onlydates.forEach(obj => {
            console.log(obj)
        })
    }, [slotG])
    function handleDropdownChange(event) {
        console.log(event.target.value)
        setStream(event.target.value)
        let t = event.target.value;

        console.log(stream)
        if (event.target.value === "jee") {
            console.log('set setslotg to jee')
            setSlotG(jeeSlot)
        }
        if (event.target.value === "neet") {
            setSlotG(neetSlot)
        }
        console.log(slotG)

    }


    async function Oncontinue() {
        console.log('hell')

        try {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
                // 'X-CSRFToken': csrfToken
            }


            let response = await fetch(`${url}/api/temp-slot-update/${timeId}`, {
                method: "GET",
                headers: headersList
            });



        } catch (error) {
            console.log(error)
        }
        const datetimedata = {
            "stream" : stream,
            "date" : DateL,
            "time" : TimeL,
            "id" : timeId
        }
        props.setDateTimeDetails(datetimedata)
        props.paymentSequence();
    }

    async function handleSetTimeSlot(slot_date) {
        setDateL(slot_date);
        console.log(DateL)
        console.log(slot_date)
        console.log(TimeL)
        if (slotG) {
            // Filter the slotG array based on the condition slot_date === dateG
            const filteredSlots = slotG.filter(slot => slot.slot_date === slot_date);

            // Extract the slot values from the filtered array
            // const slots = filteredSlots.map(slot => slot.slot);
            console.log(filteredSlots);
            setTimeArr(filteredSlots);
        }
    };


    return (
        <>
            <div className='relative  flex-col items-center justify-between pt-24 hidden md:flex'>
                <div className='absolute left-3 top-6 text-[#878787] text-lg font-normal'>&lt;   Book call</div>

                <div className='flex flex-row '>
                    <div className='flex flex-row items-center'>
                        <div className='bg-[#696DCA] w-6 h-6 rounded-full flex justify-center items-center text-white'>1</div>
                        <div className='text-[#696DCA] ml-3 font-medium'>Date & Time</div>
                        <div className='h-1 w-16 bg-[#696DCA] ml-3' ></div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='bg-[#878787] w-6 h-6 rounded-full flex justify-center items-center text-white'>2</div>
                        <div className='text-[black] ml-3 font-medium'>Details</div>
                        <div className='h-1 w-24 bg-[#878787] ml-3' ></div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='bg-[#878787] w-6 h-6 rounded-full flex justify-center items-center text-white'>3</div>
                        <div className='text-[black] ml-3 font-medium'>Payment</div>
                    </div>
                </div>
                <div className='w-[90%] lg:w-[]]'>
                    <div className='font-normal text-2xl mt-4'>Choose your stream</div>
                    <div className='h-[3.5rem] w-[25rem] border rounded-lg'>
                        <label htmlFor="dropdown" ></label>
                        <select id="dropdown" className='h-[3.5rem] w-[25rem] border rounded-lg outline-none text-xl p-2' onChange={handleDropdownChange} defaultValue={"none"}>
                            {/* <option value="">SELECT YOUR STREAM</option> */}
                            <option value="jee">IIT JEE</option>
                            <option value="neet">NEET</option>
                            {/* <option value="codehere">Option 3</option> */}
                        </select>
                    </div>
                </div>

                <div className='w-[90%]  rounded mt-8 mb-8 flex flex-col items-center border pl-8 pb-8' style={{ "boxShadow": "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                    <div className='mt-8 flex flex-col w-full ml-10' >
                        <div className='font-medium text-2xl mb-4 text-[]'>Pick a date</div>
                        <div className='flex flex-row items-center'>
                            <img src={leftdate} alt="" />

                            {
                                onlydates &&
                                onlydates.map((item, index) => (
                                    <div key={index} className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#696DCA] mr-3 ml-3 cursor-pointer sele active:bg-black ${DateL === item ? "bg-black" : ""}`} onClick={async () => { setDateG(item); handleSetTimeSlot(item) }}>
                                        <div className={`text-[#696DCA] text-lg font-bold`}>{item}</div>
                                    </div>
                                ))
                            }

                            <img src={rightdate} alt="" />
                        </div>
                    </div>
                    <div className='mt-8 flex flex-col w-full ml-10' >
                        <div className='font-medium text-2xl mb-4'>Pick a time</div>
                        <div className='font-normal text-base  text-[#878787]'>Choose your suitable time period</div>
                        <div className='flex flex-row mt-3 mb-3'>
                            <div className='w-[6.5rem] h-[2rem] bg-[#D9D9D9] rounded text-[#878787] flex justify-center items-center mr-2'>Morning</div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2'>Night</div>
                            <div className='w-[6.5rem] h-[2rem] bg-[#D9D9D9] rounded text-[#878787] flex justify-center items-center'>Afternoon</div>
                        </div>
                        <div className='font-medium text-base text-[] mb-2 '>Available time according to selected slot for call</div>

                        <div>

                        </div>
                        <div className='flex flex-row items-center justify-start'>
                            <img src={leftdate} alt="" />

                            {(timeArr && timeArr.length !== 0) ? (
                                timeArr.map((item, index) => (
                                    <div key={item.id} className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#696DCA] mr-3 ml-3 cursor-pointer sele active:bg-black ${TimeL === item.slot && item.id === timeId? "bg-black" : ""}`} onClick={ () => { setTimeL(item.slot); setTimeId(item.id)}}>
                                        <div className={`text-[#696DCA] text-lg font-bold`}>{item.slot}</div>
                                    </div>
                                ))
                            ) : ""}

                            <img src={rightdate} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-[24rem] p-4 text-base font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 cursor-pointer' onClick={Oncontinue}>Continue</div>
            </div>


            {/* mobile view (down) */}

            <div className='relative flex flex-col items-center justify-start pt-16 md:hidden'>
                <div className='absolute left-3 top-6 text-[#3F3D56] text-lg font-medium'>&lt;   Book call</div>

                <div className='flex flex-row w-screen justify-start'>
                    <div className='flex flex-row items-center'>
                        <div className='text-[#696DCA] ml-3 font-medium text-sm'>Date & Time   &gt;</div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='text-[black] ml-3 font-medium text-sm'>Details   &gt;</div>
                    </div>
                    <div className='flex flex-row items-center ml-4'>
                        <div className='text-[black] ml-3 font-medium text-sm'>Payment</div>
                    </div>
                </div>
                <div className='w-full p-2'>
                    <div className='font-medium text-lg'>Choose your stream</div>
                    <div className='h-[2rem] w-[90%] border rounded-lg'>
                        <label htmlFor="dropdown" ></label>
                        <select id="dropdown" className='h-[2rem] w-full border rounded-lg outline-none text-base ' onChange={handleDropdownChange}>
                            <option value="codehere">IIT JEE</option>
                            <option value="codehere">NEET</option>
                            <option value="codehere">Option 3</option>
                        </select>
                    </div>
                </div>

                <div className='w-[90%]  rounded mt-8 mb-8 flex flex-col items-center'>
                    <div className='flex flex-col w-full' >
                        <div className='font-medium text-lg mb-4 text-[]'>Pick a date</div>
                        <div className='flex flex-row items-center'>
                            <img src={leftdate} alt="" />
                            {
                                arr.map((item, index) => (
                                    <Dateslot key={item.id} day={item.Day} date={item.slot_date} color="#696DCA" />
                                ))
                            }
                            {
                                //  <Dateslot day='Mon' date="28 Oct" color="#696DCA"></Dateslot>
                            }
                            <img src={rightdate} alt="" />
                        </div>
                    </div>
                    <div className='mt-4 flex flex-col w-full' >
                        <div className='font-medium text-lg mb-2'>Pick a time</div>
                        <div className='font-normal text-base  text-[#878787]'>Choose your suitable time period</div>
                        <div className='flex flex-row mt-3 mb-3'>
                            <div className='w-[30%] h-[2rem] bg-[#D9D9D9] rounded text-[#878787] flex justify-center items-center mr-2 text-sm'>Morning</div>
                            <div className='w-[30%] h-[2rem] bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 text-sm'>Night</div>
                            <div className='w-[30%] h-[2rem] bg-[#D9D9D9] rounded text-[#878787] flex justify-center items-center text-sm'>Afternoon</div>
                        </div>
                        <div className='font-medium text-sm text-[] mb-2 '>Available time according to selected slot for call</div>
                        <div>

                        </div>
                        <div className='flex flex-row items-center justify-start'>
                            {/* <img src={leftdate} alt="" /> */}
                            {
                                arr.map((item, index) => (
                                    <div key={item.id} className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#696DCA] mr-3 ml-3`}>
                                        <div className={`text-[#696DCA] text-lg font-bold`}>{item.Time_slot}</div>
                                    </div>
                                ))
                            }
                            {/* <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#696DCA] mr-3 ml-3`}>
                            <div className={`text-[#696DCA] text-lg font-bold`}>8: 30 PM</div>
                        </div>
                    <img src={rightdate} alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className='w-[80%] p-4 text-[12px] font-medium bg-[#696DCA] rounded text-[white] flex justify-center items-center mr-2 cursor-pointer' onClick={Oncontinue}>Continue</div>
            </div>

        </>
    )
}
