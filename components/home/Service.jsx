import React from 'react'

const Service = () => {
    return (
        <div>
            <div className='flex justify-between uppercase mb-[60px]'>
                <div className='flex-[0_0_25%] font-extrabold font-primary text-[25px] leading-[35px]'>
                    <h2>Freelance <br /> 3d & design</h2>
                </div>
                <div className='flex-[0_0_25%] font-bold text-lg leading-[25px] font-secondary text-right'>
                    <p>The combination of my passion for design and photography</p>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-[20px] [&>*]:aspect-square'>
                <div className='font-bold text-lg leading-[25px] font-secondary text-left uppercase pt-[20px]'>
                    <p className='w-1/2'>photography 3D - 2d design motion</p>
                </div>
                <div className='background'></div>
                <div className='background'></div>
                <div className='background'></div>
                {/* <div></div> */}
                {/* <div></div> */}
            </div>
        </div>
    )
}

export default Service