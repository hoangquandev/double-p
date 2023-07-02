import React from 'react'

const Work = () => {
    return (
        <div className='grid grid-cols-4 gap-[20px] my-[150px]'>
            <div >
                <h2 className='font-primary text-[25px] leading-[35px] font-extrabold uppercase'>stay
                    create</h2>
                <h3 className='font-secondary text-[18px] leading-[25px] font-bold uppercase my-[30px]'>photography
                    3D - 2d design
                    motion</h3>
                <p className='font-third text-lg font-light w-[283px]'>The Gallery Archives is the primary source for the history of the Design Passion of Mine. The archives collects, preserves, and makes available documentation relating to the museum’s past and development, including its exhibitions, acquisitions, scholarly and educational programs, and buildings.</p>
            </div>
            <div className='col-start-2 col-end-5 flex flex-col gap-[20px] '>
                <div className='background h-[400px]'>
                    <h2 className='font-primary font-bold text-xl uppercase text-center mt-[60px]'>
                        new balance
                        GENJI
                    </h2>
                </div>
                <div className='background h-[400px]'>
                    <h2 className='font-primary font-bold text-xl uppercase text-center mt-[60px]'>
                        new balance
                        GENJI
                    </h2>
                </div>
                <div className='background h-[400px]'>
                    <h2 className='font-primary font-bold text-xl uppercase text-center mt-[60px]'>
                        new balance
                        GENJI
                    </h2>
                </div>
                <div>
                    <button className='background rounded-[30px] px-[50px] py-[14px] font-third text-lg font-normal'>See More Work</button>
                </div>
            </div>
        </div>
    )
}

export default Work