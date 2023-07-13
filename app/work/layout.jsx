import TextHome from "@/components/home/TextHome"
import Container from "@/components/layout/Container"
import Footer from "@/components/layout/Footer"


const layoutWork = ({ children }) => {
    return (
        <div>
            <Container>
                {children}
                <div className='relative h-screen flex items-center justify-center flex-col font-third text-[12px] font-light leading-[24px] italic pt-[165px]'>
                    <div className='flex justify-between items-center lg:w-[1240px] min-[1920px]:w-[1720px] mx-auto'>
                        <div>
                            <a href="mailto:caosonwork@gmail.com">caosonwork@gmail.com</a>
                        </div>
                        <div>
                            Located in Viet Nam
                        </div>
                    </div>
                    <TextHome />
                    <div className='flex justify-between items-center lg:w-[1240px] min-[1920px]:w-[1720px] mx-auto'>
                        <div>
                            © Design by CAO SON
                        </div>
                        <div>
                            2023 © Edition
                        </div>
                        <div>
                            © Code by Hoang Quan
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default layoutWork