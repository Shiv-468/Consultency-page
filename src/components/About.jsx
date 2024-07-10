import React from 'react'
import MenWithBeard from '../assets/images/webp/MenWithBeard.webp'
import BtnArrow from '../assets/images/svg/BtnArrow.svg'
import AboutEllipse from '../assets/images/webp/AboutEllipse.webp'
import MJH5 from '../assets/images/svg/MJH5.svg'
import MJH6 from '../assets/images/svg/MJH6.svg'
const About = () => {
  return (
   <section className='relative' id='Benifits'>
        <img src={AboutEllipse} alt="AboutEllipse" className=' absolute 2xl:w-full 2xl:max-w-[738px] right-0 2xl:left-[48.5%] bottom-[17%] hidden lg:block' />
    <div className=" pt-[80px] md:pt-[239px] pb-12 sm:pb-[80px] md:pb-[202px] px-3 max-w-[1164px] mx-auto relative">
        <div className=" absolute top-3 hidden md:block">
        <img src={MJH5} alt="MJH5" className=' relative' />
        <div className=" absolute flex items-end bottom-[-2%] left-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[270deg]'>05</p>
       <p className=' font-normal font-Helvetica text-[24px] leading-[30.9px] uppercase'>about</p>
       </div>
        </div>
        <div className=" absolute right-5 xl:right-0 bottom-[-4%] hidden md:block">
            <img src={MJH6} alt="MJH6" className=' relative' />
      <p className=' absolute top-[-20%] left-[20%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
            <div className=" absolute flex items-end bottom-[-4%] right-[105%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[-270deg]'>06</p>
       </div>
        </div>
        <div className=" flex flex-wrap -mx-3">
            <div className=" w-full md:w-[50%] px-3 flex justify-center" data-aos="fade-right">
                <img src={MenWithBeard} alt="MenWithBeard" className=' w-full max-w-[560px]' />
            </div>
            <div className=" w-full md:w-[50%] px-3 flex justify-center md:justify-start items-end flex-col  pt-6 md:pt-0" data-aos="fade-left">
               <div className=" flex flex-col items-center max-w-[500px] md:items-start">
               <h2 className=' text-[43px] leading-[44.9px] lg:text-[52px] lg:leading-[66.9px] font-Helvetica font-normal text-center md:text-start'>LAWYER <span className=' text-[#F77B0B]'>&</span> DIVORCE COACH</h2>
                <p className=' text-[26px] sm:text-[32.9px] leading-[32px] sm:leading-[37.6px] font-Helvetica font-normal uppercase text-center md:text-start '><span className=' text-[#F77B0B]'>M</span>arc <span className=' text-[#F77B0B]'>J</span>oachim <span className=' text-[#F77B0B]'>H</span>ubrich</p>
                <p className=' text-[20px] leading-7 pt-2 md:pt-[30px] font-Helvetica font-normal capitalize text-center !md:text-start'>About the mindset agency coach</p>
                <p className=' text-base leading-[25.6px] font-Poppins font-normal opacity-70 pb-4 sm:pb-[35px] text-center md:text-start'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                <button class="bg-gradient-to-tr from-[#0C5FD1] to-[#8703C5] hover:shadow-BtnShadow duration-300 ease-in-out rounded-[63px] text-white font-medium max-w-[452px]rounded-[63px] p-[1.7px]">
              <span class="flex gap-1 items-center min-h-[56px] py-[5px] px-[32.5px] w-full bg-white text-black rounded-[63px]  font-inter font-medium text-[16px] leading-[24px] ">
                <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text">Learn more about the agency</span>
                <img src={BtnArrow} alt="BtnArrow" />
              </span>
            </button>
               </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About