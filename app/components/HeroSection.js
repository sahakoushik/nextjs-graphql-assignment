import React from 'react'
import Image from "next/image";

const HeroSection = ({scrollToTimeline}) => {
  return (
    <>
        <div className="relative mt-[90px] bg-white flex flex-col justify-center items-center">
            <div className="pt-12 px-12 text-[#111D5E] text-[48px] lg:text-[140px] text-center font-bold lg:leading-[140px] bg-[url('/heroTop.svg')] bg-no-repeat">
                React <br/>
                <span className='-ml-[130px] lg:-ml-[400px]'>Conference</span>
            </div>
            <img className='absolute -z-50 top-[6%] left-[25%] lg:left-[45%]' src="/dotline.svg"/>
            <div className='w-[515px] m-auto text-lg'>
                Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </div>
            <div className='px-6 py-4 rounded-full -ml-[230px] my-4 flex justify-center items-center bg-yellow w-[290px]'>
                Buy Tickets <Image className="ml-2" src="./arrow.svg" height={14} width={14}/>
            </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row justify-evenly'>
            <div className='mr-48 lg:-mt-32 relative'>
                <img className='' src="/hero1.svg" alt="static image"/>
                <Image width={189} height={189} className='absolute -bottom-[80px] -z-50 -right-[58px]' src="/circle1.svg" alt="circle"/>
            </div>
            <div className='-mr-52 my-8 lg:-mt-64 relative'>
                <img src="/hero2.svg" alt="static image"/>
                <Image width={131} height={131} className='absolute -bottom-[70px] -left-[58px]' src="/star.svg" alt="star"/>
            </div>
        </div>
        <div className='flex justify-center -rotate-90 pl-32 cursor-pointer' onClick={scrollToTimeline}>
            <Image className="mr-4 rotate-90" src="./Ornament.svg" height={12} width={12}/>
            Scroll Down 
        </div>
    </>
  )
}

export default HeroSection