import React from 'react'
// import Container from '../layout/Container'
import TextHome from './TextHome'
import Image from 'next/image'

const FooterHome = () => {
    return (
        <div className='relative h-screen flex items-center justify-center flex-col font-third text-[12px] font-light leading-[24px] italic pt-[165px]'>
            <div className='absolute min-[1920px]:top-[165px] top-[205px] left-[160px] min-[1920px]:left-[110px]'>
                <div className='bg-[#8080804d] backdrop-blur-lg rounded-full w-[200px] min-[1920px]:w-[289px] aspect-square overflow-hidden'>
                    <Image
                        src={'/avatar.png'}
                        alt='cao son'
                        fill
                        priority
                    />
                </div>

            </div >
            <div className='absolute bottom-[280px] left-[500px]'>
                <div className=' w-[236px] h-[200px] aspect-square overflow-hidden'>
                    <Image
                        src={'/car.png'}
                        alt='car'
                        fill
                        priority
                    />
                </div>

            </div >
            <div div className='relative w-[1085px] h-[548px]' >
                <Image
                    src={'/sayhello.png'}
                    alt='say hello'
                    fill

                    priority
                />
            </div >
            <div className='absolute top-[400px] '>
                <div className='flex justify-between items-center lg:w-[1240px] min-[1920px]:w-[1720px] mx-auto'>
                    <div>
                        <a href="mailto:caosonwork@gmail.com">caosonwork@gmail.com</a>
                    </div>
                    <div>
                        Located in Viet Nam
                    </div>
                </div>
                <TextHome />
                <div className='flex justify-between items-center lg:w-[1240px] min-[1920px]:w-[1720px] mx-auto'>
                    <div>
                        © Design by CAO SON
                    </div>
                    <div>
                        2023 © Edition
                    </div>
                    <div>
                        © Code by Hoang Quan
                    </div>
                </div>
            </div>

        </div >
    )
}

export default FooterHome