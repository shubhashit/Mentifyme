import React from 'react'
import trash from '../../assets/admin/tabler-icon-trash.png'
import plus from '../../assets/admin/plus.png'

export default function AdminCal() {
    return (
        <div className='h-fit w-[30rem] bg-white text-[#878787] p-4'>
            <div className='text-[#222222] font-medium text-2xl'>Select the date you want to assign hours</div>
            <div className='text-lg font-normal'>You can set the hours only for next 7 days</div>
            <div className='border p-2 rounded-lg h-[24rem]'></div>
            <div className='text-lg font-medium'>What hours you are available on 7 Nov 2023</div>
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
                <img src={plus} alt="" />
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div>Cancle</div>
                <div className='text-[12px]  font-medium text-white p-2 w-[5rem] bg-[#696DCA]
                  text-center m-2 rounded '><button>Apply</button></div>
            </div>
        </div>
    )
}
