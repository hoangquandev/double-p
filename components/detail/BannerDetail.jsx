import Image from 'next/image'
import React from 'react'

const BannerDetail = ({ src }) => {
    return (
        <div className='w-[1240px] min-[1920px]:w-[1720px] mx-auto h-[calc(100vh-165px)] mt-[165px] pb-[165px] flex justify-center items-center'>
            <div className='relative w-full h-full py-[165px] rounded-[20px] overflow-hidden'>
                <Image
                    src={src}
                    fill
                    alt='banner'
                    style={{
                        objectFit: "cover"
                    }}
                    priority
                />
            </div>
        </div>
    )
}

export default BannerDetail