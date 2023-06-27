import React from 'react'

const VerticalImage = ({ img }) => {
    return (
        <div className='lg:w-[400px] lg:h-[800px] rounded-[20px] bg-slate-300'>
            {img && <Image
                priority
                src={img}
                fill
                alt="Arrow Left"
            />}
        </div>
    )
}

export default VerticalImage