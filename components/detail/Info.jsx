import React from 'react'

const Info = ({ name, desc, role, client, time }) => {
    return (
        <div className='flex gap-[20px] [&>*]:w-1/3 font-third text-base italic font-light'>
            <div>
                <h2 className='text-xl font-semibold uppercase'>{name}</h2>
            </div>
            <div>
                <p >
                    {desc}
                </p>
            </div>
            <div className='text-right'>
                <div>
                    <p>role</p>
                    {role.map((item, index) => {
                        return (
                            <h3 key={index} className='text-xl font-semibold'>{item}</h3>
                        )
                    })}
                </div>

                <div>
                    <p>time</p>
                    {time.map((item, index) => {
                        return (
                            <h3 key={index} className='text-xl font-semibold'>{item}</h3>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Info