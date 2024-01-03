import React from 'react'
import NavbarAfterLogin from '../NavbarAfterLogin'
import timeglass from '../../assets/admin/clockblack.png'
import cal from '../../assets/admin/calhover.png'
import plus from '../../assets/admin/plus.png'
import copyElement from '../../assets/admin/tabler-icon-copy.png'
import plusc from '../../assets/admin/tabler-icon-plus.png'
import trash from '../../assets/admin/tabler-icon-trash.png'
import Dateslot from '../Dateslot'


export default function Availability() {
    return (
        <div className='w-screen'>
            <NavbarAfterLogin></NavbarAfterLogin>
            <div className='w-full flex md:flex-row flex-col mt-4'>
                <div className='w-1/4 bg-[#D9D9D926] hidden md:block'>
                    <div className='flex flex-col items-start w-fit m-auto'>

                        <div className='flex flex-row mt-10 items-center'>
                            <div><img src={timeglass} alt="" /></div>
                            <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Scheduled events</div>
                        </div>
                        <div className='flex flex-row mt-10 items-center'>
                            <div><img src={cal} alt="" /></div>
                            <div className='font-medium text-base ml-2 hover:text-[#3F3D56] text-[#696DCA]'>Availability</div>
                        </div>
                    </div>
                </div>
                <div className='md:m-4 w-full md:p-0 p-2' style={{ height: "calc(100vh - 8.5rem)" }} >
                    <div className='flex flex-row items-center'>
                        <div><img src={cal} alt="" /></div>
                        <div className='text-xl font-medium ml-3'>Availability</div>
                    </div>
                    <div className='md:text-2xl font-normal text-[#878787] mt-3'>Let  us know when you’re typically available to accept meetings.</div>
                    <div className='flex flex-row justify-between items-center w-full border-b pb-3'>
                        <div className=' flex flex-row justify-between mt-3 md:hidden w-full'>
                            <div className='text-[#696DCA] font-medium ml-4 text-base'>Weekly hours</div>
                            <div className='font-medium text-base '>Date specific hours</div>
                        </div>
                    </div>
                    <div className='hidden border rounded-lg w-full  md:flex h-fit mt-8 '>
                        <div className='w-[65%] border-r p-8'>
                            <div className='text-xl font-medium '>Weekly hours</div>
                            <div className='flex flex-col mt-4'>
                                <div className='flex flex-row items-center justify-between mb-3'>
                                    <div className='flex flex-row  '>
                                        <div className='flex flex-row'>

                                            <div className='text-xl font-medium text-[#3F3D56]'><input type="checkbox" name="" id="" /> Sun</div>
                                        </div>
                                        {/* <div className='text-xl font-normal text-[#878787] ml-20'>Unavailable</div> */}

                                        {/* inplace of unavailable this div will come of a event trigger */}
                                        <div className='ml-4'>

                                            <div className='flex flex-row items-center mb-3'>
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>
                                                            <label htmlFor="dropdown" ></label>
                                                            <select id="dropdown" className=' rounded-lg outline-none text-base '>
                                                                <option className='border-2 w-[150%] h-full' value="codehere">9:00 AM</option>
                                                                <option value="codehere">NEET</option>
                                                                <option value="codehere">Option 3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                -
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                                    </div>
                                                </div>
                                                <img src={trash} alt="" />
                                            </div>

                                            <div className='flex flex-row items-center'>
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                                    </div>
                                                </div>
                                                -
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                                    </div>
                                                </div>
                                                <img src={trash} alt="" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className='flex flex-row items-center relative'>
                                        <img src={plus} className='mr-16' alt="" />
                                        <img src={copyElement} className='mr-6' alt="" />

                                        <div className='border-2 z rounded-lg absolute top-[100%] right-0 p-4 w-[130%] bg-white'>
                                            <div className='font-medium mb-3'>Copy time to </div>
                                            <div className='flex flex-col '>
                                                <div className='flex flex-row mb-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className='font-medium text-[#878787] ml-2'>Sunday</div>
                                                </div>
                                                <div className='flex flex-row mb-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className='font-medium text-[#878787] ml-2'>Sunday</div>
                                                </div>
                                                <div className='flex flex-row mb-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className='font-medium text-[#878787] ml-2'>Sunday</div>
                                                </div>
                                                <div className='flex flex-row mb-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className='font-medium text-[#878787] ml-2'>Sunday</div>
                                                </div>
                                                <div className='flex flex-row mb-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className='font-medium text-[#878787] ml-2'>Sunday</div>
                                                </div>
                                                <div className='flex flex-row mb-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className='font-medium text-[#878787] ml-2'>Sunday</div>
                                                </div>
                                                <div className='flex flex-row mb-2'>
                                                    <input type="checkbox" name="" id="" />
                                                    <div className='font-medium text-[#878787] ml-2'>Sunday</div>
                                                </div>
                                                <div className='text-[14px]  font-medium text-white p-3 bg-[#696DCA]  text-center m-2 rounded '><button>Apply</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify-between mb-3'>
                                    <div className='flex flex-row  '>
                                        <div className='flex flex-row'>

                                            <div className='text-xl font-medium text-[#3F3D56]'><input type="checkbox" name="" id="" /> Sun</div>
                                        </div>
                                        <div className='text-xl font-normal text-[#878787] ml-20'>Unavailable</div>

                                        {/* inplace of unavailable this div will come of a event trigger */}
                                        {/* <div className='ml-4'>

                                            <div className='flex flex-row items-center mb-3'>
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                                    </div>
                                                </div>
                                                -
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                                    </div>
                                                </div>
                                                <img src={trash} alt="" />
                                            </div>

                                            <div className='flex flex-row items-center'>
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                                    </div>
                                                </div>
                                                -
                                                <div>
                                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                                    </div>
                                                </div>
                                                <img src={trash} alt="" />
                                            </div>
                                        </div> */}
                                    </div>



                                    <div className='flex flex-row items-center'>
                                        <img src={plus} className='mr-16' alt="" />
                                        <img src={copyElement} className='mr-6' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[35%] border-l p-8'>
                            <div className='text-xl font-medium '>Date specific hours</div>
                            <div className='text-[#878787] font-normal text-lg'>Set your availability hours according to the dates</div>

                            <div className='flex flex-row items-center mt-3'>
                                <img src={plusc} alt="" />
                                <div className='text-lg font-normal text-[#696DCA]'>Add hours</div>
                            </div>

                            <div className='p-1 pt-3 border' >

                                <div className='text-lg font-medium text-[#3F3D56] mb-2'>7 Nov 2023</div>
                                <div className='flex flex-row items-center justify-between mb-2'>
                                    <div>
                                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3`}>
                                            <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                        </div>
                                    </div>
                                    -
                                    <div>
                                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                            <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                        </div>
                                    </div>
                                    <img src={trash} alt="" />
                                    <img src={plus} className='' alt="" />
                                </div>
                                <div className='flex flex-row items-center justify-between mb-2'>
                                    <div>
                                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3`}>
                                            <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                        </div>
                                    </div>
                                    -
                                    <div>
                                        <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                            <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                        </div>
                                    </div>
                                    <img src={trash} alt="" />
                                    <img src={plus} className='' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* mobile view down here  */}

                    {/* <div className='p-3 md:hidden grid ' style={{ gridTemplateColumns: "2fr 1fr 1fr" , gridRowGap :  '1rem' }}>
                        <>
                            <div className='flex flex-col'>
                                <div className='flex flex-row'>
                                    <div className='text-xl font-medium text-[#3F3D56]'><input type="checkbox" name="" id="" /> Sun</div>
                                </div>
                                <div className='text-sm font-normal text-[#878787] '>Unavailable</div>
                            </div>
                            <div className='flex items-center justify-center' >
                                <img src={plus} className='flex items-center justify-center' alt="" />
                            </div>
                            <div className='flex items-center justify-center' >
                                <img src={copyElement} alt="" />
                            </div>
                        </>
                        <>
                            <div className='flex flex-col'>
                                <div className='flex flex-row'>
                                    <div className='text-xl font-medium text-[#3F3D56]'><input type="checkbox" name="" id="" /> Sun</div>
                                </div>
                                <div className='text-sm font-normal text-[#878787] '>Unavailable</div>
                            </div>
                            <div className='flex items-center justify-center' >
                                <img src={plus} className='flex items-center justify-center' alt="" />
                            </div>
                            <div className='flex items-center justify-center' >
                                <img src={copyElement} alt="" />
                            </div>
                        </>
                        <>
                            <div className='flex flex-col'>
                                <div className='flex flex-row'>
                                    <div className='text-xl font-medium text-[#3F3D56]'><input type="checkbox" name="" id="" /> Sun</div>
                                </div>
                                <div className='text-sm font-normal text-[#878787] '>Unavailable</div>
                            </div>
                            <div className='flex items-center justify-center' >
                                <img src={plus} className='flex items-center justify-center' alt="" />
                            </div>
                            <div className='flex items-center justify-center' >
                                <img src={copyElement} alt="" />
                            </div>
                        </>
                    </div> */}

                    {/* for data specifit hours  */}

                    <div className='p-3 md:hidden'>
                        <div className='text-[#878787] font-normal text-xs'>Set your availability hours according to the dates</div>
                        <div className='flex flex-row items-center mt-3 mb-3'>
                            <img src={plusc} alt="" />
                            <div className='text-lg font-normal text-[#696DCA]'>Add hours</div>
                        </div>

                        <div className='p-1 pt-3 border' >

                            <div className='text-lg flex flex-row justify-between font-medium text-[#3F3D56] mb-2'>7 Nov 2023 <img src={trash} alt="" /></div>
                            <div className='flex flex-row items-center justify-between mb-2'>
                                <div>
                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3`}>
                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                    </div>
                                </div>
                                -
                                <div>
                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                    </div>
                                </div>
                                <img src={trash} alt="" />
                                <img src={plus} className='' alt="" />
                            </div>
                            <div className='flex flex-row items-center justify-between mb-2'>
                                <div>
                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3`}>
                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                    </div>
                                </div>
                                -
                                <div>
                                    <div className={`w-[6.375rem] h-[2.9375rem] rounded-lg flex flex-col items-center justify-center border border-[#] mr-3 ml-3`}>
                                        <div className={`text-[#] text-lg font-bold`}>9:00 AM</div>
                                    </div>
                                </div>
                                <img src={trash} alt="" />
                                <img src={plus} className='' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
