import React from 'react'
// import Container from '../layout/Container'
import TextHome from './TextHome'
import Image from 'next/image'

const FooterHome = () => {
    return (
        <div>
            <div className='bg-[#ffffff4d] backdrop-blur-lg h-[550px] '>
                <div className='relative w-[1240px] min-[1920px]:w-[1720px] mx-auto grid grid-cols-4 gap-[20px] '>
                    <div className='relative w-[350px] h-[100px] z-10 mt-[226px] min-[1920px]:right-[-170px]'>
                        <Image
                            src={'/say.png'}
                            fill
                            alt='hello'
                            priority
                        />
                    </div>
                    {/* <div className='col-start-2 col-end-5 grid grid-cols-3 gap-[20px]'> */}
                    <div className='bg-[#ffffff4d]  backdrop-blur-lg rounded-full w-[270px] aspect-square col-start-2 mt-[116px]'>

                    </div>
                    <div className='col-start-3 col-end-5 relative mt-[120px] min-[1920px]:mt-[35px]'>

                        <div className='relative w-full h-full  min-[1920px]:w-[938px] min-[1920px]:h-[471px] min-[1920px]:left-[-120px]'>
                            <Image
                                src={'/hello.png'}
                                fill
                                alt='hello'
                                priority
                            />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div>
                <div></div>
                <TextHome />
                <div></div>
            </div>
        </div>
    )
}

export default FooterHome