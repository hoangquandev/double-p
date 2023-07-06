import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div className='grid grid-cols-4 gap-[20px] my-[150px]'>
            <div className='pl-[30px]'>
                <h2 className='font-primary text-[25px] leading-[35px] font-extrabold uppercase'>stay
                    create</h2>
                <h3 className='font-secondary text-[18px] leading-[25px] font-bold uppercase my-[30px] w-[161px]'>photography
                    3D - 2d design
                    motion</h3>
                <p className='font-third text-lg font-light w-3/4'>The Gallery Archives is the primary source for the history of the Design Passion of Mine. The archives collects, preserves, and makes available documentation relating to the museum’s past and development, including its exhibitions, acquisitions, scholarly and educational programs, and buildings.</p>
                <div className='mt-[146px] w-[244px] h-[50px] background rounded-[25px] font-third text-lg font-normal flex justify-center items-center cursor-pointer'>
                    See More Work
                </div>
            </div>
            <div className='col-start-2 col-end-5 flex flex-col gap-[20px] '>
                <div className='background relative min-[1920px]:h-[400px] lg:h-[288px]'>
                    <div className='text-center text-white  mt-[60px] mx-auto z-20'>
                        <h2 className='font-primary font-bold text-xl uppercase text-center mt-[60px]'>
                            THE MODERN TOUCH
                        </h2>
                        <p className='text-[16px] leading-[24px] font-normal font-third'>Top Tier  Design Consulting company in the “Premium & Luxury” class</p>
                    </div>
                    <Image
                        src={'/home-tmt.png'}
                        alt='the modern touch'
                        fill
                        style={{
                            zIndex: -20,
                            objectFit: "contain"
                        }}

                        priority
                    />
                </div>
                <div className='background relative min-[1920px]:h-[400px] lg:h-[288px]'>
                    <div className='text-center text-white  mt-[60px] mx-auto z-20'>
                        <h2 className='font-primary font-bold text-xl uppercase text-center mt-[60px]'>
                            LONG BEACH PEARL
                        </h2>
                        <p className='text-[16px] leading-[24px] font-normal font-third'>TOP TIER LUXURY JEWELRY IN VIET NAM</p>
                    </div>
                    <Image
                        src={'/home-long-beach-pearl.png'}
                        alt='long-beach-pearl'
                        style={{
                            zIndex: -20,
                            objectFit: "contain"
                        }}
                        fill
                        priority
                    />
                </div>
                <div className='background relative min-[1920px]:h-[400px] lg:h-[288px]'>
                    <div className='text-center text-white  mt-[60px] mx-auto z-20'>
                        <h2 className='font-primary font-bold text-xl uppercase text-center mt-[60px]'>
                            yen sao thien viet
                        </h2>
                        <p className='text-[16px] leading-[24px] font-normal font-third'>Brand reputation for 9 years, widely distributed in 63 provinces and cities</p>
                    </div>
                    <Image
                        src={'/home-thienviet.png'}
                        alt='thien viet'
                        style={{
                            zIndex: -20,
                            objectFit: "contain"
                        }}
                        fill
                        priority
                    />
                </div>


            </div>
        </div>
    )
}

export default Work