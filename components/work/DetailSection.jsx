import React from 'react'

const DetailSection = ({ project, role, time }) => {
    return (
        <div className='relative flex w-full font-third text-lg font-light hover:font-bold py-[20px] border-t-[1px] border-black '>
            <div className='w-1/3 min-[1920px]:w-1/4 pl-[20px]'>{project}</div>
            <div className='w-2/5 pl-[30px]'>{role}</div>
            <div className='absolute right-0 text-right pr-[10px]'>{time}</div>
            <div className='absolute w-1 h-1 rounded-full bg-black top-[-3px] right-0'></div>
        </div>
    )
}

export default DetailSection