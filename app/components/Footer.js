import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-[336px] py-[69px] bg-[#111D5E] flex flex-col'>
        <Image
            className='m-auto'
            src="/footer.svg"
            width={175} 
            height={48}
            alt="footer-logo"/>
        <div className='flex flex-row flex-1 gap-8 justify-center mt-[78px]'>
            <Image
                src="/icon1.svg"
                width={24} 
                height={24}
                alt="tw"/>
            <Image
                src="/icon2.svg"
                width={24} 
                height={24}
                alt="ln"/>
            <Image
                src="/icon3.svg"
                width={24} 
                height={24}
                alt="fb"/>
            <Image
                src="/icon4.svg"
                width={24} 
                height={24}
                alt="dr"/>
        </div>
        <div className='text-base text-center text-white'>© 2023 Lemonhive. All rights reserved.</div>
    </div>
  )
}

export default Footer