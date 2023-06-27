import Image from 'next/image'
import React from 'react'

const Square = ({ img }) => {
    return (
        <div className='aspect-square as lg:w-[610px] rounded-[20px] bg-slate-300'>
            {/* {img && <Image
                priority
                src={img}
                fill
                alt="Arrow Left"
            />} */}
        </div>
    )
}

export default Square