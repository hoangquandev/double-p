import React from 'react'
// import NavProject from '@/components/detail/NavProject'
import TwoSquare from '@/components/layout/TwoSquare'
import Video from '@/components/layout/Video'
import Video400 from '@/components/layout/Video400'
import Triple from '@/components/layout/Triple'
import Info from '@/components/detail/Info'

const Work = ({ params }) => {
    return (
        <div>
            {/* <NavProject /> */}
            <Video />
            <Info />
            <Triple />
            <Video400 />
            <TwoSquare />
        </div>
    )
}

export default Work