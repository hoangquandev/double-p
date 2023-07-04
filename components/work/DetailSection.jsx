import React from 'react'

const DetailSection = ({ project, role, time }) => {
    return (
        <tr className='relative w-full font-third text-lg font-light hover:font-bold [&>td]:py-[20px] border-t-[1px] border-black '>
            <td className='w-1/3 min-[1920px]:w-1/4 pl-[20px]'>{project}</td>
            <td className='w-2/5 pl-[30px]'>{role}</td>
            <td className='text-right pr-[10px]'>{time}</td>
            <div className='absolute w-1 h-1 rounded-full bg-black top-[-3px] right-0'></div>
        </tr>
    )
}

export default DetailSection