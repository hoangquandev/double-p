import React from 'react'

const TabHome = () => {
    return (
        <div id='work' className='flex flex-col lg:flex-row justify-between items-center text-center text-sm font-normal p-[30px] [&>*]:z-20'>
            <button>Web & Develope</button>
            <button className='bg-black text-white rounded-[30px] my-2 py-[8px] px-[23px]'>3D Product & Animation</button>
            <button>Branding & Design</button>
        </div>
    )
}

export default TabHome