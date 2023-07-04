import DetailSection from '@/components/work/DetailSection'
import React from 'react'
const projectAchives = [
    {
        project: "SONY AWARDS",
        role: "Photography",
        time: "-"
    },
    {
        project: "ARCHITECTURE",
        role: "Photography",
        time: "2023"
    },
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
        role: "2D - 3D Animation - Design - Develope",
        time: "2022 - 2023"
    },
    {
        project: "YẾN THIÊN VIỆT",
        role: "2D - 3D Animation - Design - Develope",
        time: "2022 - 2023"
    },
    {
        project: "GEN NEST",
        role: "2D - 3D Animation - Design - Develope",
        time: "2022 - 2023"
    },
    {
        project: "SI GROUP",
        role: "Design - Develope - Branding",
        time: "2023"
    },
    {
        project: "GENJI VISUALIZATION",
        role: "Design - Develope",
        time: "2023"
    },
    {
        project: "LONG BEACH PEARL",
        role: "Design - Develope - Branding",
        time: "2021 - 2022"
    },
    {
        project: "POONAPPETIT",
        role: "Design - Develope - Branding",
        time: "2022"
    },
    {
        project: "maison de rotin",
        role: "Design - Develope - Branding",
        time: "2021"
    },
    {
        project: "LONG BEACH GROUP",
        role: "Design - Develope - Branding",
        time: "2021"
    },
    {
        project: "LONG BEACH FOOD",
        role: "Design - Develope - Branding",
        time: "2021"
    },
    {
        project: "pEARL SENSE SPA",
        role: "Design - Develope - Branding",
        time: "2021"
    },
    {
        project: "PANDA BAKERY",
        role: "Design - Develope - Branding",
        time: "2021"
    },
    {
        project: "TIPLU",
        role: "Photography",
        time: "2021"
    },
    {
        project: "MARPIS",
        role: "Graphic Design",
        time: "2020"
    },
    {
        project: "THE COFFEE CONCEPT",
        role: "Design - Develope - Branding",
        time: "2010"
    },
    {
        project: "CÀ MÈN",
        role: "Graphic Design",
        time: "2020"
    },
    {
        project: "NGÒ CONCEPT",
        role: "Photography",
        time: "2020"
    },
    {
        project: "hè studio",
        role: "Photography",
        time: "2019"
    },
]

const Achives = () => {
    return (
        <div>
            <div>
                <h2 className='uppercase font-primary text-[25px] font-extrabold leading-[35px] text-center mb-[59px] mt-[80px]'>Action achives</h2>
            </div>
            <table className='w-full'>
                <tr className='w-full text-left [&>*]:pb-[60px] text-lg font-secondary font-bold'>
                    <th className='w-1/4 pl-[20px]'>PROJECT</th>
                    <th className='w-1/3 pl-[30px]'>ROLE</th>
                    <th className='text-right'>TIME</th>
                </tr>
                {projectAchives.map((item, index) => {
                    return (
                        <DetailSection key={index} project={item.project} role={item.role} time={item.time} />
                    )
                })}

            </table>
        </div>
    )
}

export default Achives