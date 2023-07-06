import Image from 'next/image'
import React from 'react'

const Service = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-[20px]'>
                <div className='col-span-1'></div>
                <div className='col-start-2 col-end-5 p-[20px]'>
                    <h3 className='font-primary text-[25px] font-extrabold leading-[35px] uppercase'>Welcome</h3>
                    <div className='flex gap-[53px] font-third text-[18px] font-light leading-[27px] mt-[23px]'>
                        <p>Let’s play some music <br />
                            and Findout What You Need.</p>
                        <p className='[&>span]:uppercase [&>span]:font-bold'>For every finished product that you see <br />
                            <span>Process</span> had to be <span>created and experimented</span></p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-[20px] mt-[14px]'>
                <div className='col-span-1 pt-[50px] px-[30px] font-third text-[18px] font-light leading-[27px]'>
                    <p>Playing</p>
                    <h3 className='font-primary text-[25px] font-extrabold leading-[35px] uppercase mt-[30px] mb-[20px]'>fiding wild</h3>
                    <p>Sponsor by Genji <br />
                        Rapper come from RBA</p>
                </div>
                <div className='col-start-2 col-end-5 grid grid-cols-2 gap-[20px]'>
                    <div className='background h-[415px]'>
                        <Image
                            src={'/keyboard.gif'}
                            alt='keyboard'
                            fill
                            priority
                        />
                    </div>
                    <div className='background h-[415px]'>
                        <Image
                            src={'/footer.gif'}
                            alt='keyboard'
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service