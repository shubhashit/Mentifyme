import React from 'react'

export default function Chapters(Props) {
    return (
        <div className='flex flex-row items-center m-6'>
            <label class="circular-checkbox mr-2">
                <input type="checkbox" class="hidden-checkbox" />
                <span class="checkmark"></span>
            </label>
            <div className='text-xl font-semibold'>{Props.chapter}</div>
        </div>
    )
}
