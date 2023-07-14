import BannerDetail from '@/components/detail/BannerDetail'
import Info from '@/components/detail/Info'
import Image from 'next/image'
import React from 'react'

const ThienViet = () => {
    return (
        <div>
            <BannerDetail src={'/thienviet.png'} />
            <Info
                name={"YEN sao THIEN VIET"}
                desc={"Thiết kế UX/UI cho công ty Yến Sào Thiên Việt. Trang web được thiết kế tối giản và dễ dàng sử dụng. Thân thiện với người dùng. Kết hợp với phần hình ảnh sản phẩm 3D tạo sự đồng bộ và chất lượng cho sản phẩm. Công việc chính là sản xuất các video giới thiệu sản phẩm ngắn dưới 1p30s cho các Brand con của công ty Yến Sào Thiên Việt"}
                role={["Graphic Design", "3D - 2D Motion"]}
                time={ ["2022","2023"]}
            />
            <div className='grid grid-cols-1 gap-[20px] mt-[150px]'>
            <div className='grid grid-cols-3 gap-[20px]'>
                    <div className='relative aspect-[561/998] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img1.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[561/998] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img2.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[561/998] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img3.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[20px]'>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img4.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img5.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>

                </div>
                <div className='relative aspect-[1720/968] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/thienviet/img6.png'}
                        alt='thienviet'
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        priority
                    />
                </div>
                <div className='relative aspect-[1720/968] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/thienviet/img7.png'}
                        alt='thienviet'
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        priority
                    />
                </div>
                <div className='relative aspect-[1720/968] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/thienviet/img8.png'}
                        alt='thienviet'
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        priority
                    />
                </div>
                <div className='relative aspect-[1720/968] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/thienviet/img12.png'}
                        alt='thienviet'
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        priority
                    />
                </div>
                <div className='grid grid-cols-3 gap-[20px]'>
                    <div className='relative aspect-[561/315] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img9.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[561/315] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img10.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[561/315] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/thienviet/img11.png'}
                            alt='yenthienviet'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThienViet