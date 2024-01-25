import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex flex-row align-center justify-center pt-[40px] px-32'>
        <Image 
            src="/react.svg"
            width={100} 
            height={32}
            alt="react-logo"/>
        <div className='flex flex-row flex-1 justify-center align-center gap-[58px]'>
            <div className='text-[#0A142F] text-[18px] font-medium'>About Us</div>
            <div className='text-[#0A142F] text-[18px] font-medium'>What We Do</div>
            <div className='text-[#0A142F] text-[18px] font-medium'>Our work</div>
            <div className='text-[#0A142F] text-[18px] font-medium'>Blog</div>
            <div className='text-[#0A142F] text-[18px] font-medium'>Say hi</div>
        </div>
        <Image 
            src="/ham.svg"
            width={28} 
            height={24}
            alt="react-logo"/>
    </div>
  )
}

export default Navbar