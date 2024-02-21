import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="px-6 md:px-32 relative mt-[90px] flex flex-col justify-center items-center -z-[111]">
        <div className="pt-12 px-12 text-[#111D5E] text-[48px] lg:text-[100px] xl:text-[140px] text-center font-bold lg:leading-[140px] bg-[url('/heroTop.svg')] bg-no-repeat">
          React <br />
          <span className="-ml-[130px] lg:-ml-[270px] xl:-ml-[400px]">
            Conference
          </span>
        </div>
        <img
          className="absolute -z-50 top-[6%] left-[25%] lg:left-[38%] xl:left-[45%]"
          src="/dotline.svg"
        />
        <div className="md:w-[515px] xl:w[485] 2xl:[515px] pt-8 text-md md:text-lg md:-ml-[120px]">
          Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
          fermentum..id fermentum.In quis diam turpis quam id fermentum.
        </div>
        <div className="px-6 py-4 rounded-full md:-ml-[230px] my-4 flex justify-center items-center bg-[#FFC93E] w-[290px]">
          Buy Tickets{" "}
          <Image
            className="ml-2"
            src="./arrow.svg"
            height={14}
            width={14}
            alt="image"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-evenly z-[111] pb-20">
        <div className="ml-6 lg:ml-0 mr-0 lg:mr-80 mt-8 lg:-mt-32 relative">
          <img
            className="w-auto h-auto lg:w-[70%] lg:h-[70%] lg:mt-36 xl:w-[90%] xl:h-[90%] xl:mt-24 2xl:mt-0 2xl:w-auto 2xl:h-auto"
            src="/hero1.svg"
            alt="static image"
          />
          <Image
            width={189}
            height={189}
            className="absolute -bottom-[80px] z-[-1] -right-[58px]"
            src="/circle1.svg"
            alt="circle"
          />
        </div>
        <div className="m-auto lg:m-0 lg:-mr-28 my-8 lg:-mt-64 relative">
          <img
            className="w-auto h-auto lg:w-[70%] lg:h-[70%] lg:mt-36 xl:w-[90%] xl:h-[90%] xl:mt-24 2xl:mt-0 2xl:w-auto 2xl:h-auto"
            src="/hero2.svg"
            alt="static image"
          />
          <img
            width={131}
            height={131}
            className="absolute -bottom-[70px] right-[-58px] lg:-left-[58px] "
            src="/star.svg"
            alt="star"
          />
        </div>
      </div>
      <Link
        className="hidden lg:flex justify-center -rotate-90 pl-32 cursor-pointer"
        href="#timeline-section"
      >
        <Image
          className="mr-4 rotate-90"
          src="./Ornament.svg"
          height={12}
          width={12}
          alt="ornament"
        />
        Scroll Down
      </Link>
    </>
  );
};

export default HeroSection;
