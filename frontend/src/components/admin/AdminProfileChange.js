import React from 'react'
import NavbarAfterLogin from '../NavbarAfterLogin'
import timeglass from '../../assets/admin/clockblack.png'
import cal from '../../assets/admin/calhover.png'
import profilepic from '../../assets/admin/profilepic.png'
import pencil from '../../assets/admin/tabler-icon-pencil.png'

export default function AdminProfileChange() {
    return (
        <div>
            <NavbarAfterLogin></NavbarAfterLogin>
            <div className='  flex flex-row' style={{ height: "calc(100vh - 8rem)" }}>
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
                <div className='p-4 max-md:h-fit md:p-8 w-full md:w-3/4'>
                    <div className='text-3xl font-medium'>Profile</div>
                    <div className='text-sm'>Your Personal details</div>
                    <div className='mt-4 mb-3 inline-block relative'>
                        <img src={profilepic} alt="" />
                        <div className='border border-[#D9D9D9] bg-white rounded-full h-fit w-fit p-1 absolute bottom-0 right-0'>
                            <img src={pencil} alt="" />
                        </div>
                    </div>
                    <div className='w-full mb-3'>
                        <div className='text-lg font-medium mb-1'>Name</div>
                        <input type="text" className='text-xl outline-none border-2 w-full md:w-[25rem] rounded-md h-[3.5rem] p-2' />
                    </div>
                    <div className='w-full mb-3'>
                        <div className='text-lg font-medium mb-1'>Email</div>
                        <input type="text" className='text-xl outline-none border-2 w-full md:w-[25rem] rounded-md h-[3.5rem] p-2' />
                    </div>
                    <div className='w-full mb-3'>
                        <div className='text-lg font-medium mb-1'>College</div>
                        <input type="text" className='text-xl outline-none border-2 w-full md:w-[25rem] rounded-md h-[3.5rem] p-2' />
                    </div>
                    <div className='w-full mb-3'>
                        <div className='text-lg font-medium mb-1'>College Stream</div>
                        <input type="text" className='text-xl outline-none border-2 w-full md:w-[25rem] rounded-md h-[3.5rem] p-2' />
                    </div>
                    <div className='flex flex-col md:flex-row items-end justify-start max-md:w-full w-[80%]'>
                        <div className='text-[12px] md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[10rem] rounded-lg  text-center m-2  ml-0 max-md:w-full max-md:mr-0'><button>Save changes</button></div>
                        <div className='text-[12px] md:text-base font-medium text-[#3F3D56] pt-3 pb-3 pl-6 pr-6 bg-white border border-[black] w-[10rem]  text-center m-2  rounded-lg ml-8 max-md:w-full max-md:mr-0'><button>Cancel</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
