import React from 'react'
import MenWithBeard from '../assets/images/webp/MenWithBeard.png'
import BtnArrow from '../assets/images/svg/BtnArrow.svg'
import AboutEllipse from '../assets/images/webp/AboutEllipse.png'
import MJH5 from '../assets/images/svg/MJH5.svg'
import MJH6 from '../assets/images/svg/MJH6.svg'
const About = () => {
  return (
   <section className='relative'>
        <img src={AboutEllipse} alt="AboutEllipse" className=' absolute right-0 bottom-[17%] hidden lg:block' />
    <div className=" pt-[239px] pb-[202px] px-3 max-w-[1164px] mx-auto relative">
        <div className=" absolute top-3">
        <img src={MJH5} alt="MJH5" className=' relative' />
        <div className=" absolute flex items-end bottom-[-2%] left-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[270deg]'>05</p>
       <p className=' font-normal font-Helvetica text-[24px] leading-[30.9px] uppercase'>about</p>
       </div>
        </div>
        <img src={MJH6} alt="MJH6" className=' absolute bottom-[-4%] right-0 hidden md:block' />
        <div className=" flex flex-wrap -mx-3">
            <div className=" w-full md:w-[50%] px-3 flex justify-center">
                <img src={MenWithBeard} alt="MenWithBeard" className=' w-full max-w-[560px]' />
            </div>
            <div className=" w-full md:w-[50%] px-3 flex justify-center flex-col items-center md:items-start">
                <h2 className=' text-[42px] leading-[52.9px] lg:text-[52px] lg:leading-[66.9px] font-Helvetica font-normal'>LAWYER <span className=' text-[#F77B0B]'>&</span> DIVORCE COACH</h2>
                <p className=' text-[35.9px] leading-[47.6px] font-Helvetica font-normal uppercase '><span className=' text-[#F77B0B]'>M</span>arc <span className=' text-[#F77B0B]'>J</span>oachim <span className=' text-[#F77B0B]'>H</span>ubrich</p>
                <p className=' text-[20px] leading-7 pt-[30px] font-Helvetica font-normal capitalize text-center !md:text-start'>About the mindset agency coach</p>
                <p className=' text-base leading-[25.6px] font-Poppins font-normal opacity-70 pb-[35px] text-center md:text-start'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                <button className=' flex items-center gap-3 max-w-[350px] min-h-[56px] justify-center w-full Gradient-Btn'>
                <span className=' bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] bg-clip-text text-transparent'>Learn more about the agency</span>
                <span><img src={BtnArrow} alt="BtnArrow" /></span>
                </button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About