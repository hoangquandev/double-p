import Image from "next/image"


const HomeBanner = () => {
    return (
        <div className='background lg:w-[1240px] min-[1920px]:w-[1720px] mx-auto w-full relative aspect-video mb-[150px] mix-blend-difference'>
            <Image
                src={'/homeBanner.png'}
                alt="banner"
                fill
                priority
                style={{
                    borderRadius: "20px",
                    // mixBlendMode: "different"
                }}
            />
        </div>
    )
}

export default HomeBanner