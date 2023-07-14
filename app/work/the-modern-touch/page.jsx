import BannerDetail from '@/components/detail/BannerDetail'
import Info from '@/components/detail/Info'
import Image from 'next/image'
import React from 'react'

const TMT = () => {
    return (
        <div>
            <BannerDetail src={'/tmtgif.gif'} />
            <Info name={"THE MODERN TOUCH"}
                desc={"Làm việc với The Modern Touch là một công việc không chỉ là thiết kế. Với đặc thù là một công ty kiến trúc nhưng tham gia vào nhiều lĩnh vực khác nhau. Ở The Modern Touch tôi xây dựng hệ thống hình ảnh nhận diện và cả các hệ thống sử dụng internal. Ngoài ra còn ứng dụng kỹ thuật nhiếp ảnh và 3D để tạo nên một bộ branding phù hợp với tầm vóc của một công ty Kiến Trúc chuyên nghiệp. Its take me 1 year to created."}
                role={["Graphic Design", "Design System"]}
                time={["2023"]} />
            <div className='grid grid-cols-1 gap-[20px] mt-[150px]'>
                <div className='relative aspect-[1720/1146] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/tmt/img1.png'}
                        alt='themoderntouch'
                        fill
                        priority
                    />
                </div>
                <div className='relative aspect-[1720/762] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/tmt/img2.png'}
                        alt='themoderntouch'
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        priority
                    />
                </div>
                <div className='relative aspect-[1720/968] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/tmt/img3.png'}
                        alt='themoderntouch'
                        fill
                        style={{
                            objectFit: "cover"
                        }}
                        priority
                    />
                </div>
                <h2 className='text-title'>Social <br />
                    post design</h2>
                <div className='grid grid-cols-3 gap-[20px]'>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img4.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img5.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img6.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img7.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img8.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-square w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img9.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                </div>
                <h2 className='text-title'>thiết kế<br />
                    giám sát <br />
                    tổ chức các sự kiện</h2>
                <div className='relative aspect-[1720/1146] w-[1240px] min-[1920px]:w-[1720px] rounded-[20px] overflow-hidden'>
                    <Image
                        src={'/tmt/img10.png'}
                        alt='themoderntouch'
                        fill
                        priority
                    />
                </div>
                <div className='grid grid-cols-2 gap-[20px]'>
                    <div className='relative aspect-[851/479] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img11.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[851/479] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img12.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[851/479] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img13.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[851/479] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img14.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[851/479] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img15.png'}
                            alt='themoderntouch'
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            priority
                        />
                    </div>
                    <div className='relative aspect-[851/479] w-full rounded-[20px] overflow-hidden'>
                        <Image
                            src={'/tmt/img16.png'}
                            alt='themoderntouch'
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

export default TMT