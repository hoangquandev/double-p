

const TextHome = () => {
    const text = "good thing take time "
    const arrText = text.split('')
    return (
        <div className="relative text-6xl  uppercase text-black overflow-hidden dark:text-white">
            {/* <div className="flex justify-center items-center"> */}
            <p className=" whitespace-nowrap w-[2260px] font-primary not-italic text-[101px] font-extrabold animate-infinityText leading-[100px]">
                {arrText.map((item, index) => {
                    return (
                        <span key={index}>{item}</span>
                    )
                })}
                good thing take time



            </p>
            {/* </div> */}

        </div>
    )
}

export default TextHome