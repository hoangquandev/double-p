import React from 'react'
import Square from '../detail/Square'

const TwoSquare = () => {
    return (
        <div className='flex gap-[20px] my-[20px]'>
            <Square />
            <Square />
        </div>
    )
}

export default TwoSquare