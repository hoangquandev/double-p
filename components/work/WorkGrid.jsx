'use client'
import React from 'react'
import IconGrid from './IconGrid'
import DetailSection from './DetailSection'
import Link from 'next/link'
import { convertToSlug } from '@/utils/convert'
import { useTheme } from 'next-themes'

const project = [
    {
        project: "THE MODERN LIGHT",
        role: "Brand Identity",
        time: "2023"
    },
    {
        project: "THE MODERN TOUCH",
        role: "Design - Develope - Branding",
        time: "2022 - 2023"
    },
    {
        project: "KID’S NEST PLUS",
        role: "2D - 3D ANIMATION",
        time: "2022 - 2023"
    },
    {
        project: "YẾN THIÊN VIỆT",
        role: "2D - 3D ANIMATION",
        time: "2022 - 2023"
    },
    {
        project: "GEN NEST",
        role: "2D - 3D ANIMATION",
        time: "2021 - 2023"
    },
    {
        project: "SI GROUP",
        role: "2D - 3D ANIMATION",
        time: "2020"
    },
    {
        project: "GENJI VISUALIZATION",
        role: "Design - Develope",
        time: "2023"
    },
    {
        project: "LONG BEACH PEARL",
        role: "3D Visualization",
        time: "2021 - 2022"
    },
    {
        project: "POONAPPETIT",
        role: "3D Visualization",
        time: "2022"
    },
    {
        project: "NGÒ CONCEPT",
        role: "Design - Develope",
        time: "2020"
    },
    {
        project: "hè studio",
        role: "Photography",
        time: "2019"
    },
]

const WorkGrid = () => {
    const { theme } = useTheme()
    return (
        <div className='px-[20px]'>
            <div className='flex justify-between items-center'>
                <h2 className='font-primary text-[25px] font-extrabold leading-[35px] uppercase'>
                    design and <br /> passion
                </h2>
                <div className='cursor-pointer'>
                    <IconGrid />

                </div>
            </div>
            <div className='grid grid-cols-3 mt-[36px]'>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h4 className='font-secondary text-[18px] font-bold leading-[25px] uppercase'>photography <br /> 3D - 2d design motion</h4>
                        <p className='w-[60%] font-third text-[18px] leading-[27px] font-light mt-[55px]'>The Gallery Archives is the primary source for the history of the Design Passion of Mine. The archives collects, preserves, and makes available documentation relating to the museum’s past and development, including its exhibitions, acquisitions, scholarly and educational programs, and buildings.</p>
                    </div>
                    <div className='relative'>
                        <Link href="/action-achives"><h3 className='font-secondary font-bold text-[18px] leading-[21px] uppercase'>action achives</h3></Link>
                        <div className='absolute top-[-15px] left-[200px]'>
                            <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1985 1.07354L1.07285 18.1992M1.07285 18.1992L17.5535 17.8656M1.07285 18.1992L1.40647 1.71853" stroke={theme === "dark" ? "white" : "black"} />
                            </svg>
                        </div>


                    </div>
                </div>
                <div className='col-span-2 col-start-2'>
                    <div className='w-full'>
                        <div className='relative flex w-full text-left [&>*]:pb-[60px] text-lg font-secondary font-bold'>
                            <div className='w-1/3 min-[1920px]:w-1/4 pl-[20px]'>PROJECT</div>
                            <div className='w-1/4 min-[1920px]:w-1/4 pl-[30px]'>ROLE</div>
                            <div className='w-5/12  text-right'>TIME</div>
                        </div>
                        {project.map((item, index) => {
                            const slug = convertToSlug(item.project)
                            return (
                                <DetailSection key={index} slug={slug} project={item.project} role={item.role} time={item.time} />
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkGrid