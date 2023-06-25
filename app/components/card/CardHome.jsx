import Image from "next/image"


const CardHome = ({ bgImage, text, width, height, right, bottom }) => {
    const arrText = text.split(" ")
    return (
        <div className="relative flex-1 w-full lg:w-screen h-full bg-black p-7 rounded-3xl overflow-hidden">
            <div className="absolute " style={{ right: right, bottom: bottom }}>
                <Image
                    src={bgImage}
                    width={width}
                    height={height}
                    alt="background image"
                    priority
                // fill
                />
            </div>
            <div className="absolute text-white text-3xl md:text-4xl font-bold">{arrText.map((item, index) => {
                return (
                    <h2 key={index}>{item}</h2>
                )
            })}</div>
        </div>
    )
}

export default CardHome