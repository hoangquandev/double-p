'use client'
import CircleLage from './CircleLage'
import EyeWrapper from './EyeWrapper'
import Polygon from './Polygon'

const Eyes = ({ theme, color }) => {


    return (
        <div className=' relative flex justify-center items-center mx-[18px]'>
            <EyeWrapper theme={theme} color={color} />
            <CircleLage theme={theme} color={color} />
            {theme === "light" &&
                <svg style={{
                    position: "absolute",
                    top: "28px",
                    right: "18px"
                }} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C2.85185 2.07407 2.85185 2.07407 0 0C1.81481 3.65444 1.81481 3.65444 0 7C2.85185 5.72852 3.88889 5.72852 7 7C4.92593 3.11111 4.92593 3.11111 7 0Z" fill="white" />
                </svg>

            }
            {theme === "light" &&
                <svg style={{
                    position: "absolute",
                    top: "11px",
                    right: "51px"
                }} width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.375 0C1.375 1 1.375 1 0 0C0.875 1.76196 0.875 1.76196 0 3.375C1.375 2.76196 1.875 2.76196 3.375 3.375C2.375 1.5 2.375 1.5 3.375 0Z" fill="white" />
                </svg>


            }
            {theme === "light" &&
                <svg style={{
                    position: "absolute",
                    top: "16px",
                    right: "52px"
                }} width="1" height="1" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.375 0C1.375 1 1.375 1 0 0C0.875 1.76196 0.875 1.76196 0 3.375C1.375 2.76196 1.875 2.76196 3.375 3.375C2.375 1.5 2.375 1.5 3.375 0Z" fill="white" />
                </svg>


            }


            <Polygon theme={theme} top="-8px" />
            <Polygon theme={theme} rot="45deg" top="-1px" right='20px' />
            <Polygon theme={theme} rot="90deg" top="13px" right='13px' />
            <Polygon theme={theme} rot="135deg" top="29px" right='20px' />
            <Polygon theme={theme} rot="180deg" top="35px" right='34px' />
            <Polygon theme={theme} rot="225deg" top="29px" right='49px' />
            <Polygon theme={theme} rot="270deg" top="13px" right='56px' />
            <Polygon theme={theme} rot="315deg" top="-1px" right='50px' />




        </div>
    )
}

export default Eyes