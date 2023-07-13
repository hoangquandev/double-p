'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import WorkHome from './WorkHome'
import { work } from '@/helper/workHome'

const Work = () => {
    const { theme } = useTheme()
    return (
        <div className=' grid grid-cols-3 gap-[20px] my-[150px]'>
            <div className='relative pl-[30px] ml-[-90px]'>
                <div className='sticky top-[208px]'>
                    {/* <h2 className='font-primary text-[25px] leading-[35px] font-extrabold uppercase'>stay
                        create</h2>
                    <h3 className='font-secondary text-[18px] leading-[25px] font-bold uppercase my-[30px] w-[161px]'>photography
                        3D - 2d design
                        motion</h3>
                    <p className='font-third text-lg font-light w-3/4'>The Gallery Archives is the primary source for the history of the Design Passion of Mine. The archives collects, preserves, and makes available documentation relating to the museum’s past and development, including its exhibitions, acquisitions, scholarly and educational programs, and buildings.</p>
                    <div className='mt-[146px] w-[244px] h-[50px] background rounded-[25px] font-third text-lg font-normal flex justify-center items-center cursor-pointer'>
                        See More Work
                    </div> */}
                    <div className='relative w-3/4 aspect-square'>
                        <div className='absolute w-[300px] min-[1920px]:w-[456px] aspect-square z-0'>
                            <Image
                                src={'/bg-cd.png'}
                                alt='background cd'
                                fill
                                style={{
                                    objectFit: "contain"
                                }}
                                priority
                            />
                        </div>
                        <div className='absolute backdrop-blur-xl  w-[200px] min-[1920px]:w-[300px] top-[150px] min-[1920px]:top-[228px] min-[1920px]:left-[228px] left-[150px] translate-x-[-50%] translate-y-[-50%] aspect-square rounded-[20px] bg-[#8080804f] z-10'>
                            <div className='relative'>
                                <div className='absolute w-[120px] min-[1920px]:w-[220px] aspect-square z-20 top-[100px] min-[1920px]:top-[150px] min-[1920px]:left-[150px] left-[100px] translate-x-[-50%] translate-y-[-50%]'>
                                    <Image
                                        src={'/cd-flower.png'}
                                        alt='cd'
                                        fill
                                        priority
                                    />
                                </div>
                                <div className='absolute w-[150px] min-[1920px]:w-[260px] aspect-square z-10 top-[100px] min-[1920px]:top-[150px] min-[1920px]:left-[150px] left-[100px] translate-x-[-50%] translate-y-[-50%]'>
                                    <Image
                                        src={'/DIA.png'}
                                        alt='DIA'
                                        fill
                                        priority
                                    />
                                </div>
                                {/* <div className='absolute w-[154px] min-[1920px]:w-[154px] h-[154px] min-[1920px]:h-[437px] z-0 top-[100px] min-[1920px]:top-[150px] min-[1920px]:left-[150px] left-[100px] translate-x-[-50%] translate-y-[-50%]'>
                                    <Image
                                        src={'/LOA.png'}
                                        alt='LOA'
                                        fill
                                        priority
                                    />
                                </div> */}
                                <div className='absolute w-[18px] min-[1920px]:w-[27px] aspect-[27/41] z-20 top-[16px] min-[1920px]:top-[16px] min-[1920px]:right-[13px] right-[9px]'>
                                    <Image
                                        src={'/buttom2.png'}
                                        alt='button2'
                                        fill
                                        priority
                                    />
                                </div>
                                <div className='absolute w-[18px] min-[1920px]:w-[27px] rotate-90 aspect-[27/41] z-20 top-[156px] min-[1920px]:top-[240px] min-[1920px]:left-[13px] left-[9px]'>
                                    <Image
                                        src={'/buttom2.png'}
                                        alt='button2'
                                        fill
                                        priority
                                    />
                                </div>
                                <div className='absolute w-[30px] rotate-12 min-[1920px]:w-[48px] aspect-[48/244] z-20 top-[0] min-[1920px]:top-[20px] min-[1920px]:right-[46px] right-[22px]'>
                                    <Image
                                        src={'/CANGAT.png'}
                                        alt='CAN GAT'
                                        fill
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='absolute w-[100px] min-[1920px]:w-[154px] h-[300px] min-[1920px]:h-[437px] z-0 top-[-70px] min-[1920px]:top-[-80px] min-[1920px]:left-[0px] left-[-6px]'>
                            <Image
                                src={'/LOA.png'}
                                alt='LOA'
                                fill
                                priority
                            />
                        </div>

                    </div>
                    <div className='flex flex-col gap-[20px] mt-[40px] text-mini pl-[50px]'>
                        <h2 className='text-[18px] font-third font-bold not-italic uppercase' >fiding wild</h2>
                        <p className='not-italic'>Sponsor by Genji <br />
                            Rapper come from RBA</p>
                        <p className='not-italic'>Visulizer Cao Son Pham</p>
                    </div>
                </div>
            </div>
            <div className='col-start-2 col-end-4 flex flex-col gap-[20px] '>
                <div>
                    <p className='text-[18px] leading-[27px] font-third font-light'>Design is</p>
                </div>
                <div className='mt-[90px] mb-[160px]'>
                    <h2 className='text-[40px] font-extrabold leading-[56px] font-primary uppercase pl-[40px]'>bringorder</h2>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="44" viewBox="0 0 87 44" fill="none">
                            <path d="M30.5077 11.5874L30.3754 11.3671C31.0516 10.8972 31.8748 10.53 32.845 10.2657C33.8152 9.97194 34.8589 9.82508 35.9761 9.82508C37.7989 9.82508 39.2837 10.1188 40.4303 10.7062C41.6063 11.2937 42.4736 12.0721 43.0322 13.0414C43.6202 14.0106 43.9142 15.0534 43.9142 16.1695C43.9142 17.2269 43.6496 18.299 43.1204 19.3858C42.5912 20.4726 41.8121 21.4712 40.7831 22.3818C39.7835 23.2923 38.5192 24.0266 36.9904 24.5847C35.491 25.1134 33.7417 25.3778 31.7425 25.3778C28.5673 25.3778 25.9213 24.8638 23.8045 23.8357C21.7171 22.8077 20.1442 21.4566 19.0858 19.7823C18.0274 18.0787 17.4982 16.2723 17.4982 14.3631C17.4982 12.7183 17.8951 11.0587 18.6889 9.38449C19.4827 7.68089 20.6734 6.12415 22.261 4.71428C23.878 3.3044 25.9066 2.17356 28.3468 1.32176C30.8164 0.440585 33.727 0 37.0786 0C39.3425 0 41.5769 0.308409 43.7819 0.925231C46.0163 1.54205 48.236 2.33511 50.441 3.3044C52.646 4.24431 54.851 5.25766 57.056 6.34444C59.2904 7.43122 61.5101 8.45926 63.7151 9.42855C65.9202 10.3685 68.1399 11.1468 70.3743 11.7637C72.6087 12.3805 74.8431 12.6889 77.0775 12.6889C79.5471 12.6889 81.6492 12.2483 83.3838 11.3671C85.1184 10.486 86.2209 9.29637 86.6913 7.79838L87 7.84244C86.5296 9.42855 85.3977 10.6769 83.6043 11.5874C81.8403 12.498 79.65 12.9532 77.0334 12.9532C74.8578 12.9532 72.6969 12.6889 70.5507 12.1602C68.4045 11.6021 66.2583 10.8972 64.112 10.0454C61.9952 9.19357 59.849 8.29771 57.6734 7.35779C55.4978 6.3885 53.2928 5.47796 51.0584 4.62616C48.824 3.77436 46.5455 3.08411 44.2229 2.5554C41.9003 1.99733 39.5189 1.71829 37.0786 1.71829C34.315 1.71829 31.7572 2.05607 29.4052 2.73164C27.0826 3.37783 25.054 4.28837 23.3194 5.46327C21.5848 6.63817 20.2324 8.03336 19.2622 9.64884C18.3214 11.235 17.851 12.9826 17.851 14.8918C17.851 16.8598 18.439 18.6221 19.615 20.1789C20.8204 21.7062 22.4668 22.9105 24.5542 23.7917C26.671 24.6728 29.0818 25.1134 31.7866 25.1134C33.9916 25.1134 35.9908 24.7169 37.7843 23.9238C39.5777 23.1308 41.0036 22.0587 42.062 20.7076C43.1204 19.3271 43.6496 17.8144 43.6496 16.1695C43.6496 14.3191 42.944 12.8357 41.5328 11.7196C40.151 10.6034 38.2987 10.0454 35.9761 10.0454C34.8883 10.0454 33.8593 10.1775 32.8891 10.4419C31.9483 10.7062 31.1545 11.0881 30.5077 11.5874Z" fill={theme === "dark" ? "white" : "black"} />
                            <path d="M50.9985 23.8279C50.6382 23.8279 50.368 23.666 50.1878 23.3422C49.9776 23.0184 49.8726 22.5769 49.8726 22.0176C49.8726 21.2522 50.1128 20.4427 50.5931 19.5891C51.0435 18.7354 51.659 17.9112 52.4396 17.1164C53.2202 16.2922 54.0909 15.5563 55.0517 14.9087C56.0125 14.2317 57.0033 13.7018 58.0241 13.3191C59.0749 12.9365 60.0657 12.7451 60.9965 12.7451C61.7771 12.7451 62.1674 13.0395 62.1674 13.6282C62.1674 14.1875 61.8071 14.894 61.0865 15.7476C60.366 16.5718 59.4652 17.5432 58.3844 18.6618C57.5137 19.5449 56.5979 20.3839 55.6372 21.1786C54.7064 21.944 53.8357 22.5769 53.0251 23.0773C52.2144 23.5777 51.5389 23.8279 50.9985 23.8279ZM51.0435 23.6071C51.4939 23.6071 52.0793 23.3864 52.7999 22.9448C53.5505 22.5033 54.3912 21.8998 55.3219 21.1345C56.2527 20.3691 57.2134 19.486 58.2042 18.4852C59.2851 17.3666 60.1558 16.4099 60.8163 15.6152C61.5069 14.8204 61.8522 14.1728 61.8522 13.6724C61.8522 13.2897 61.597 13.0984 61.0865 13.0984C60.6362 13.0984 60.0507 13.275 59.3301 13.6282C58.6396 13.9814 57.889 14.4671 57.0783 15.0853C56.2677 15.674 55.472 16.3364 54.6914 17.0723C53.9108 17.8082 53.1902 18.5441 52.5297 19.28C51.8992 20.0159 51.3888 20.7077 50.9985 21.3553C50.6081 22.0029 50.413 22.5474 50.413 22.989C50.413 23.4011 50.6232 23.6071 51.0435 23.6071ZM62.3025 18.132C61.5519 18.9562 60.8313 19.6038 60.1408 20.0748C59.4502 20.5458 58.8497 20.7812 58.3393 20.7812C57.5287 20.7812 57.1234 20.3691 57.1234 19.5449C57.1234 19.0739 57.2435 18.6177 57.4837 18.1761C57.7238 17.7051 58.1442 17.1311 58.7447 16.4541H60.411L58.2943 18.7501C57.934 19.1034 57.7539 19.5008 57.7539 19.9423C57.7539 20.3544 57.964 20.5605 58.3844 20.5605C58.8047 20.5605 59.3151 20.3544 59.9156 19.9423C60.5461 19.5302 61.1916 18.9562 61.8522 18.2203L62.2575 17.7787H62.6178L62.3025 18.132Z" fill={theme === "dark" ? "white" : "black"} />
                            <path d="M56.3949 10.252H58.6115C55.4256 10.8061 49.4678 14.408 43.3722 25.4908C37.2767 36.5736 28.5491 42.6691 17.4666 43.2233C6.3841 43.7774 -2.34414 38.5131 0.565093 27.8459C2.89248 19.3121 12.2482 17.8252 16.6351 18.1484C12.3406 18.2408 3.22523 20.2819 1.1195 27.7073C-1.51266 36.9892 5.27555 41.4223 17.4666 41.1452C29.6577 40.8682 40.6019 27.2917 46.2819 19.6723C50.8258 13.5768 54.9172 10.8523 56.3949 10.252Z" fill={theme === "dark" ? "white" : "black"} />
                        </svg>
                        <h2 className='text-[40px] font-extrabold leading-[56px] font-primary uppercase'>COMPLEXITY</h2>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[168px]'>
                    <div className='relative aspect-[560/415] w-full col-span-1'>
                        <Image
                            style={{
                                objectFit: "contain",
                                left: "24%",
                                top: "8px"
                            }}
                            src={"/Concept.png"}
                            alt='cd'
                            fill
                        />
                        <div className='relative bg-[#8080804d] backdrop-blur-xl w-3/4 aspect-square cd rounded-[20px]'>
                            {/* <div className='absolute w-[100px] h-[30px] bg-transparent top-0 right-0 z-10'></div> */}
                        </div>

                    </div>
                    <div className='relative aspect-[560/415] w-full col-span-1'>
                        <Image
                            style={{
                                objectFit: "contain",
                                left: "24%",
                                top: "0px"
                            }}
                            src={"/diathanmat.png"}
                            alt='cd'
                            fill
                        />
                        <div className='relative bg-[#8080804d] backdrop-blur-xl w-3/4 aspect-square cd rounded-[20px]'>
                            {/* <div className='absolute w-[100px] h-[30px] bg-transparent top-0 right-0 z-10'></div> */}
                        </div>

                    </div>

                </div>
                <div>
                    <p className='text-[18px] leading-[27px] font-third font-light mt-[130px] mb-[77px]'>For every finished product that you see <br />
                        Process had to be</p>
                </div>
                <div>
                    <h2 className='text-[40px] font-extrabold leading-[56px] font-primary uppercase mb-[130px]'>created <br />
                        experimented</h2>
                </div>
                {work.map((item, index) => {
                    return (
                        <WorkHome work={item} key={index} />
                    )
                })}

            </div>
        </div>
    )
}

export default Work