import React from 'react'
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
        <div className="relative mt-[90px] bg-white flex flex-col justify-center items-center">
            <div className="pt-12 px-12 text-[#111D5E] text-[140px] text-center font-bold leading-[140px] bg-[url('/heroTop.svg')] bg-no-repeat">
                React <br/>
                <span className='-ml-[400px]'>Conference</span>
            </div>
            <img className='absolute -z-50 top-[6%] left-[45%]' src="/dotline.svg"/>
            <div className='w-[515px] m-auto text-lg'>
                Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </div>
            <div className='px-6 py-4 rounded-full -ml-[230px] my-4 flex justify-center items-center bg-yellow w-[290px]'>
                Buy Tickets <Image className="ml-2" src="./arrow.svg" height={14} width={14}/>
            </div>
        </div>

        <div className='flex flex-row justify-evenly bg-white'>
            <div className='mr-48 -mt-32'>
                <img className='' src="/1.jpeg" alt="static image"/>
            </div>
            <div className='-mr-52 -mt-64'>
                <img src="/2.jpeg" alt="static image"/>
            </div>
        </div>
    </>
  )
}

export default HeroSection