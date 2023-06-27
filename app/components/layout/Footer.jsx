'use client'

const Footer = () => {
    return (

        <div
            id='contact'
            className='h-[300px] p-[30px] bg-black dark:bg-white rounded-t-[20px] text-white dark:text-black'>
            <div className='text-center'>
                <p className='text-xl font-bold font-primary'>Get In Touch!</p>
            </div>
            <div className='mt-[60px] flex flex-col lg:flex-row justify-between font-secondary text-base font-light'>
                <div className='mb-[30px] lg:mb-0'>
                    <h2 className='text-sm mb-[17px]'>CODE BY HOANG QUAN</h2>
                    <p>lehoangquanit@gmail.com</p>
                    <p>+84394636161</p>
                    <ul className='mt-[17px] flex flex-col lg:flex-row gap-0 lg:gap-[37px]'>
                        <li>FaceBook</li>
                        <li>Github</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
                <div className='mb-[30px] lg:mb-0'>
                    <h2 className='text-sm mb-[17px]'>CODE BY HOANG QUAN</h2>
                    <p>lehoangquanit@gmail.com</p>
                    <p>+84394636161</p>
                    <ul className='mt-[17px] flex flex-col lg:flex-row gap-0 lg:gap-[37px]'>
                        <li>FaceBook</li>
                        <li>Github</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
                <div className='mb-[30px] lg:mb-0'>
                    <h2 className='text-sm mb-[17px]'>VARIAN.VISUAL@GMAIL.COM</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer