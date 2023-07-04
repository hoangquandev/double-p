import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='mt-[39px]'>
      <div className='relative'>
        <div className='absolute w-[446px] h-[124px] rotate-[20deg]'>
          <Image
            src={"/say.png"}
            fill
            alt='say'
            priority
          />
        </div>
        <div className='relative w-[760px] h-[382px]'>
          <Image
            src={"/hello.png"}
            fill
            alt='hello'
            style={{
              top: "60px"
            }}
            priority
          />
        </div>

        <div className='background absolute w-[60%] aspect-video top-[106px] right-0 p-[20px] font-third text-base font-light'>
          <h2 className='font-primary font-bold text-3xl'>DROP ME A MESSAGE</h2>
          <p className='mt-[80px] min-w-[1920px]:mt-[122px] mb-[24px]'>Let&apos;s create great work. Together.</p>
          <p>
            Are you searching for a professional designer and creative strategist to effectively transform your brand? Let&apos;s team up and make it happend!Say goodbye to long meetings, over budget, grumpy process when working with agencies. My network and I can provide more effective communication. Deliver a better product, and simply faster.To discover how I can assist you, please explore my services here.Get in touch with me at  caosonwork@gmail.com or drop me a line on Instagram. I&apos;ll respond promptly.</p>

          <div className='flex justify-between items-center mt-[80px] min-w-[1920px]:mt-[122px]'>
            <ul>
              <li>
                <a href="mailto:caosonwork@gmail.com">caosonwork@gmail.com</a>
              </li>
              <li>
                <a href='tel:+84 972 091 245'>+84 972 091 245</a>
              </li>
            </ul>
            <ul>
              <li>FACEBOOK
              </li>
              <li>BEHANCE
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact