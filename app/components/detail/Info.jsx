import React from 'react'

const Info = () => {
    return (
        <div className='flex gap-[20px] [&>*]:w-1/3 font-third text-base italic font-light'>
            <div>
                <h2 className='text-xl font-semibold'>KID’s NEST PLUST iTVC</h2>
            </div>
            <div>
                <p >
                    is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist, producer, animator, and illustrator with over six years of commercial experience.
                </p>
                <p className='mt-[20px]'>
                    The studio stands for bold content that explores emerging visual languages to tell unforgettable stories.
                </p>
            </div>
            <div>
                <div>
                    <p>role</p>
                    <h3 className='text-xl font-semibold'>Design - 3d Product - Animation</h3>
                </div>
                <div>
                    <p>client</p>
                    <h3 className='text-xl font-semibold'>KID’S NEST PLUS+</h3>
                </div>
                <div>
                    <p>time</p>
                    <h3 className='text-xl font-semibold'>2023</h3>
                </div>
            </div>
        </div>
    )
}

export default Info