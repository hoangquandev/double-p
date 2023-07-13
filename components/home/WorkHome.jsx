'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const WorkHome = ({ work }) => {
    const [hover, setHover] = useState(false)
    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOut = () => {
        setHover(false)
    }
    return (
        <Link href={`/work/${work.slug}`}>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='background relative min-[1920px]:h-[400px] lg:h-[288px] overflow-hidden hover:rounded-full'>
                <div style={hover ? { color: "black" } : null} className='absolute left-[50%] translate-x-[-50%] w-full text-center text-white  mt-[20px] min-[1920px]:mt-[40px] mx-auto z-20 uppercase'>
                    <h2 className='font-primary font-bold text-xl uppercase text-center'>
                        {work.name}
                    </h2>
                    <p className='text-[16px] leading-[24px] font-normal font-third '>{work.desc}</p>
                </div>
                <div style={hover ? { display: "block" } : null} className='hidden absolute top-0 min-[1920px]:h-[400px] lg:h-[288px] w-full overflow-hidden hover:rounded-full bg-[#8080804d] backdrop-blur-[50px] text-black'>

                    <p className='text-[16px] leading-[24px] font-normal font-third mt-[80px] min-[1920px]:mt-[130px] w-5/6 mx-auto text-center'>{work.summary}</p>
                    <div className='grid grid-cols-5 w-2/3 mx-auto mt-[10px] min-[1920px]:mt-[40px] text-[16px] leading-[24px] font-normal font-third'>
                        <div className='col-span-1'>
                            <h3 className='uppercase font-third text-lg font-bold'>Time</h3>
                            {work.time?.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </div>
                        <div className='col-span-1'>
                            <h3 className='uppercase font-third text-lg font-bold'>Role</h3>
                            {work.role?.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </div>
                        <div className='col-span-3 text-right'>
                            <h3 className='uppercase font-third text-lg font-bold'>RESPONSIBILITIES</h3>
                            {work.res?.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </div>

                    </div>
                </div>
                <Image
                    src={work.imgHome}
                    alt={work.alt}
                    width={work.w}
                    height={work.h}
                    style={work.style}
                    fill={work.fill}
                    priority
                />
            </div>
        </Link>
    )
}

export default WorkHome