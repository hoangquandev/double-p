import React from 'react'

const Video400 = ({ img }) => {
    return (
        <div className='lg:w-[1240px] h-[400px] rounded-[20px] my-[20px] bg-slate-300'>
            {img && <Image
                priority
                src={img}
                fill
                alt="Arrow Left"
            />}
        </div>
    )
}

export default Video400