import React from 'react'
import timeglass from '../../assets/admin/timeglass.png'

export default function Settime() {
    return (
        <div className='flex flex-col items-center  mt-10 mb-4'>
            <div className='border w-[80%]'>
                <div className='border flex flex-row justify-between p-8'>
                    <div className='flex flex-col'>
                        <div className='font-medium text-2xl'>Set your availability</div>
                        <div className='font-normal text-2xl text-[#878787]'>Let  us know when you’re typically available to accept meetings.</div>
                    </div>
                    <div><img src={timeglass} alt="" /></div>
                </div>
                <div className='p-8'>
                    <div className='font-medium text-2xl mb-4'>Available hours</div>
                    <div className='flex flex-row'>
                        <div className='h-[3.5rem] w-[17rem] border rounded-lg'>
                            <label htmlFor="dropdown" ></label>
                            <select id="dropdown" className='h-[3.5rem] w-[17rem] border rounded-lg outline-none text-xl p-2 text-[#696DCA]'>
                                <option className='text-[#696DCA]' value="codehere">9:00</option>
                                <option className='text-[#696DCA]' value="codehere">NEET</option>
                                <option className='text-[#696DCA]' value="codehere">Option 3</option>
                            </select>
                        </div>
                        <div className='h-[3.5rem] w-[17rem] border rounded-lg ml-4'>
                            <label htmlFor="dropdown" ></label>
                            <select id="dropdown" className='h-[3.5rem] w-[17rem] border rounded-lg outline-none text-xl p-2 text-[#696DCA]'>
                                <option className='text-[#696DCA]' value="codehere">5:00</option>
                                <option className='text-[#696DCA]' value="codehere">NEET</option>
                                <option className='text-[#696DCA]' value="codehere">Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='font-medium text-2xl mb-4 mt-6'>Available days</div>
                    <div className='flex flex-row'>
                        <div className='w-20 h-20 border rounded-sm flex flex-col justify-center items-center'>
                            <input type="checkbox" name="" id="" />
                            <div className='text-base font-normal text-[#878787] mt-2'>sun</div>
                        </div>
                        <div className='w-20 h-20 border rounded-sm flex flex-col justify-center items-center'>
                            <input type="checkbox" name="" id="" />
                            <div className='text-base font-normal text-[#878787] mt-2'>Mon</div>
                        </div>
                        <div className='w-20 h-20 border rounded-sm flex flex-col justify-center items-center'>
                            <input type="checkbox" name="" id="" />
                            <div className='text-base font-normal text-[#878787] mt-2'>Tues</div>
                        </div>
                        <div className='w-20 h-20 border rounded-sm flex flex-col justify-center items-center'>
                            <input type="checkbox" name="" id="" />
                            <div className='text-base font-normal text-[#878787] mt-2'>Wed</div>
                        </div>
                        <div className='w-20 h-20 border rounded-sm flex flex-col justify-center items-center'>
                            <input type="checkbox" name="" id="" />
                            <div className='text-base font-normal text-[#878787] mt-2'>Thus</div>
                        </div>
                        <div className='w-20 h-20 border rounded-sm flex flex-col justify-center items-center'>
                            <input type="checkbox" name="" id="" />
                            <div className='text-base font-normal text-[#878787] mt-2'>Fri</div>
                        </div>
                        <div className='w-20 h-20 border rounded-sm flex flex-col justify-center items-center'>
                            <input type="checkbox" name="" id="" />
                            <div className='text-base font-normal text-[#878787] mt-2'>Sat</div>
                        </div>

                    </div>
                    <div className='text-lg text-[#3F3D56] mt-3'>Above details will be your weekly schedule until you change</div>
                </div>
                <div className='text-lg p-4 pl-8 text-[#3F3D56] mt-3'>Don't worry! You'll be able to further customize your availability later on.</div>
            </div>

            <div className='flex flex-row items-end justify-end w-[80%]'>
                <div className='text-[12px] md:text-base font-medium text-[#696DCA] pt-3 pb-3 pl-6 pr-6 bg-white border border-[#696DCA] w-[10rem] md:w-[13rem] text-center m-2 rounded'><button>set up later</button></div>
                <div className='text-[12px] md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[10rem]  md:w-[13rem] text-center m-2 rounded '><button>Continue</button></div>
            </div>
        </div>
    )
}
