import Image from 'next/image'
import React from 'react'

const HomeBanner = () => {
    return (
        <div className='lg:w-[1240px] w-full relative h-[180px] my-10 lg:my-48'>
            <Image
                src="/bannerHome.gif"
                alt='home banner'
                // width={500}
                // height={200}
                fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // fill
            // contain
            />
        </div>
    )
}

export default HomeBanner