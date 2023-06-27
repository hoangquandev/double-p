import React from 'react'

const Video = ({ img }) => {
    return (
        <div className='aspect-video as lg:w-[1240px] rounded-[20px] my-[20px] bg-slate-300'>
            {img && <Image
                priority
                src={img}
                fill
                alt="Arrow Left"
            />}
        </div>
    )
}

export default Video