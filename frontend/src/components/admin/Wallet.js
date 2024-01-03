import React from 'react'
import NavbarAfterLogin from '../NavbarAfterLogin'
import timeglass from '../../assets/admin/clock.png'
import cal from '../../assets/admin/cal.png'
import copyElement from '../../assets/admin/copyElement.png'
import setting from '../../assets/admin/setting.png'
import icon from '../../assets/admin/Icon.png'
import searchicon from '../../assets/admin/tabler-icon-calendar-event (1).png'
import right from '../../assets/admin/arrow-right.png'
import left from '../../assets/admin/arrow-left.png'
import dotyellow from '../../assets/admin/dotyellow.png'
import download from '../../assets/admin/tabler-icon-file-download.png'
import payment from '../../assets/admin/tabler-icon-wallet.png'
import invoice from '../../assets/admin/tabler-icon-file-invoice.png'
import time from '../../assets/admin/tabler-icon-clock-hour-4.png'
import date from '../../assets/admin/tabler-icon-calendar-event.png'

export default function Wallet() {
    return (
        <div>
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
                            <div className='font-medium text-base ml-2 hover:text-[#3F3D56]'>Availability</div>
                        </div>
                    </div>
                </div>
                <div className='md:m-4 h-fit w-full p-3 md:p-0'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                        <div className='mb-2 md:mb-0'>
                            <div className='text-xl md:text-3xl font-medium'>Wallet</div>
                            <div className='text-sm '>Your Payment details</div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='border p-2 mr-2 md:pr-12 max-md:w-[50%]'>
                                <div className='text-[#667085] text-sm'>Session Completed</div>
                                <div className='text-base md:text-2xl font-medium'>24</div>
                            </div>
                            <div className='border p-2 md:pr-12 max-md:w-[50%]'>
                                <div className='text-[#667085] text-sm'>Amount Credited</div>
                                <div className='text-base md:text-2xl text-[#12B76A] font-medium'>₹ 5300.<span className='text-base'>00</span></div>
                            </div>
                        </div>
                    </div>

                    {/* mobile view filter and search down here  */}
                    <div className='flex flex-row  justify-between p-2 md:hidden'>
                        <input type="text" className=' w-full border-2 outline-none p-1 mr-2' placeholder='Search' />
                    </div>

                    {/* pc view */}
                    <div className='flex flex-col mt-6 ml-4 md:ml-0 w-full'>
                        <div className='flex flex-row justify-end md:justify-between items-center md:w-full border-b pb-3 pr-3'>
                            <div className=' md:flex flex-row hidden'>
                                <div className='font-medium text-base '>Upcoming</div>
                                <div className='text-[#696DCA] font-medium ml-4 text-base'>Past</div>
                            </div>
                            <div className='flex flex-row  '>
                                <div className='border p-2 flex mr-2 items-center w-[11rem]'>
                                    <img src={searchicon} className='mr-3 w-4 h-4' alt="" />
                                    <input type="text" className='outline-none mr-2 w-[70%]'  placeholder='Search' />
                                </div>
                                <div className='p-2 border-2 text-center flex justify-center items-center'><img src={icon} className='mr-3' alt="" /> Filter</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:grid grid-cols-5 hidden">
                        <div className="text-xs text-[#667085] flex items-center justify-center p-2">Student Name</div>
                        <div className="text-xs text-[#667085] flex items-center justify-center p-2"><img src={date} className='mr-3' alt="" /> Dates</div>
                        <div className="text-xs text-[#667085] flex items-center justify-center p-2"><img src={time} className='mr-3' alt="" /> Time</div>
                        <div className="text-xs text-[#667085] flex items-center justify-center p-2"><img src={payment} className='mr-3' alt="" /> Payment</div>
                        <div className="text-xs text-[#667085] flex items-center justify-center p-2"><img src={invoice} className='mr-3' alt="" /> invoice</div>


                        <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-2">Dhruv Jain</div>
                        <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-2">Mon,28 Oct</div>
                        <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-2 text-center">08:30 PM - 9:00 PM</div>
                        <div className='md:text-xs text-[9px] font-medium text-[#F5B031] mt-2 mb-2  p-2 flex justify-center items-center'><img src={dotyellow} className='mr-1' alt="" />  Pending</div>
                        <div className="text-lg font-medium text-[#667085] flex items-center justify-center p-2"><img src={download} className='mr-3' alt="" />Download</div>

                    </div>

                    {/* for mobile down here  */}
                    <div className="grid p-2 md:hidden" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
                        <div className="text-[8px] text-[#667085] text-center flex items-center justify-center ">Student Name</div>
                        <div className="text-[8px] text-[#667085] flex items-center justify-center p-2"><img src={date} className='mr-1 w-2 h-2
                        ' alt="" /> Dates & time</div>
                        <div className="text-[8px] text-[#667085] flex items-center justify-center p-2"><img src={payment} className='mr-1 w-2 h-2
                        ' alt="" /> Payment</div>
                        <div className="text-[8px] text-[#667085] flex items-center justify-center p-2"><img src={invoice} className='mr-1 w-2 h-2
                        ' alt="" /> invoice</div>


                        <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center ">Dhruv Jain</div>
                        <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center ">Mon,28 Oct <br /> 08:30 PM - 9:00 PM</div>
                        <div className='text-[10px] md:text-lg font-medium text-[#F5B031] flex items-center justify-center '><img src={dotyellow} className='mr-1' alt="" />  Pending</div>
                        <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center "><img src={download} className='mr-1 w-3 h-3' alt="" />Download</div>

                    </div>


                    <div className='md:flex flex-row w-full justify-between p-4 hidden'>
                        <div className='w-36 border rounded-lg h-10 flex items-center justify-center'><img src={left} className='mr-3' alt="" />  <button>Previous</button></div>
                        <div className='flex flex-row items-center justify-center'>
                            <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#696DCA40] text-[#696DCA] mr-2'>1</div>
                            <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>2</div>
                            <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>3</div>
                            <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[ ] text-[#667085] mr-2'>4</div>
                            <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>5</div>
                        </div>
                        <div className='w-36 border rounded-lg h-10 flex items-center justify-center'> <button>Next</button> <img src={right} className='ml-3' alt="" /></div>
                    </div>

                    {/* mobile view down here  */}
                    <div className='flex flex-row w-full justify-between p-4 md:hidden'>
                        <div className='w-36 border rounded-lg h-10 flex items-center justify-center'><img src={left} className='mr-3' alt="" />  <button>Previous</button></div>
                        <div className='flex flex-row items-center justify-center mr-2 ml-2'>
                            <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#696DCA40] text-[#696DCA] mr-2'>1</div>

                            <div> .... </div>
                            <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>10</div>
                        </div>
                        <div className='w-36 border rounded-lg h-10 flex items-center justify-center'><button>Next</button> <img src={right} className='ml-3' alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
