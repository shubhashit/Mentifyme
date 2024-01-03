import React from 'react'
import NavbarAfterLogin from '../NavbarAfterLogin'
import timeglass from '../../assets/admin/clock.png'
import cal from '../../assets/admin/cal.png'
import copyElement from '../../assets/admin/copyElement.png'
import setting from '../../assets/admin/setting.png'


export default function AdminProfile() {
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
        <div className='md:m-4 h-fit w-full'>
          <div className='flex flex-row items-center'>
            <div><img src={timeglass} alt="" /></div>
            <div className='text-xl font-medium ml-3'>MY Sessions</div>
          </div>
          <div className='flex flex-row  justify-between p-2 md:hidden'>
            <input type="text" className='border-2 outline-none p-1 mr-2' placeholder='Search' />
            <div className='w-12 border-2 text-center flex justify-center items-center'>Filter</div>
          </div>
          <div className='flex flex-col mt-6 ml-4 md:ml-0 w-full'>
            <div className='flex flex-row justify-between items-center w-full border-b pb-3'>
              <div className=' flex flex-row'>
                <div className='font-medium text-base '>Upcoming</div>
                <div className='text-[#696DCA] font-medium ml-4 text-base'>Past</div>
              </div>
              <div className='md:flex flex-row hidden '>
                <input type="text" className='border-2 outline-none p-2 mr-2' placeholder='Search' />
                <div className='w-16 border-2 text-center flex justify-center items-center'>Filter</div>
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-6 hidden">
            <div className="text-xs text-[#667085] flex items-center justify-center p-2">Student Name</div>
            <div className="text-xs text-[#667085] flex items-center justify-center p-2">Dates</div>
            <div className="text-xs text-[#667085] flex items-center justify-center p-2">Time</div>
            <div className="text-xs text-[#667085] flex items-center justify-center p-2">Session</div>
            <div className="text-xs text-[#667085] flex items-center justify-center p-2">Meet Link</div>
            <div className="text-xs text-[#667085] flex items-center justify-center p-2">Reschedule</div>


            <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-2">Dhruv Jain</div>
            <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-2">Mon,28 Oct</div>
            <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-2 text-center">08:30 PM - 9:00 PM</div>
            <div className='md:text-lg text-[9px] font-medium text-[#667085] mt-2 mb-2  p-2 flex justify-center items-center'><button className='bg-[#F3F3F3] text-[#878787] rounded h-9 md:w-24 w-16'>Join Now</button></div>
            <div className="text-lg font-medium text-[#667085] flex items-center justify-center p-2"><img src={copyElement} alt="" /></div>
            <div className="text-lg font-medium text-[#667085] flex items-center justify-center p-2"><img src={setting} alt="" /></div>

          </div>

          {/* for mobile down here  */}
          <div className="grid p-2 md:hidden" style={{gridTemplateColumns : "3fr 3fr 1fr 1fr 1fr"}}>
            <div className="text-xs text-[#667085] text-center flex items-center justify-center ">Student Name</div>
            <div className="text-xs text-[#667085] flex items-center justify-center ">Dates & time</div>
            <div className="text-xs text-[#667085] flex items-center justify-center ">Session</div>
            <div className="text-xs text-[#667085] flex items-center justify-center ">Meet Link</div>
            <div className="text-xs text-[#667085] flex items-center justify-center ">Resche  dule</div>


            <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-1">Dhruv Jain</div>
            <div className="text-[10px] md:text-lg font-medium text-[#667085] flex items-center justify-center p-1">Mon,28 Oct <br /> 08:30 PM - 9:00 PM</div>
            <div className='md:text-lg text-[9px] font-medium text-[#667085] mt-2 mb-2  p-1 flex justify-center items-center'><button className='bg-[#F3F3F3] text-[#878787] rounded h-9 md:w-24 w-16'>Join Now</button></div>
            <div className="text-lg font-medium text-[#667085] flex items-center justify-center p-1"><img src={copyElement} alt="" /></div>
            <div className="text-lg font-medium text-[#667085] flex items-center justify-center p-1"><img src={setting} alt="" /></div>

          </div>


          <div className='md:flex flex-row w-full justify-between p-4 hidden'>
            <div className='w-36 border rounded-lg h-10 flex items-center justify-center'><button>Previous</button></div>
            <div className='flex flex-row items-center justify-center'>
              <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#696DCA40] text-[#696DCA] mr-2'>1</div>
              <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>2</div>
              <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>3</div>
              <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[ ] text-[#667085] mr-2'>4</div>
              <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>5</div>
            </div>
            <div className='w-36 border rounded-lg h-10 flex items-center justify-center'><button>Next</button></div>
          </div>

          {/* mobile view down here  */}
          <div className='flex flex-row w-full justify-between p-4 md:hidden'>
            <div className='w-36 border rounded-lg h-10 flex items-center justify-center'><button>Previous</button></div>
            <div className='flex flex-row items-center justify-center mr-2 ml-2'>
              <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#696DCA40] text-[#696DCA] mr-2'>1</div>

              <div> .... </div>
              <div className='w-8 h-8 rounded-xl flex justify-center items-center bg-[#] text-[#667085] mr-2'>10</div>
            </div>
            <div className='w-36 border rounded-lg h-10 flex items-center justify-center'><button>Next</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}
