import React from 'react'
import MenWithBeard from '../assets/images/webp/MenWithBeard.png'
import BtnArrow from '../assets/images/svg/BtnArrow.svg'
const About = () => {
  return (
   <section>
    <div className=" pt-[239px] pb-[202px] px-3 max-w-[1164px] mx-auto">
        <div className=" flex flex-wrap -mx-3">
            <div className=" w-[50%] px-3">
                <img src={MenWithBeard} alt="MenWithBeard" className=' w-full max-w-[560px]' />
            </div>
            <div className=" w-[50%] px-3">
                <h2 className=' text-[52px] leading-[66.9px] font-Helvetica font-normal'>LAWYER <span className=' text-[#F77B0B]'>&</span> DIVORCE COACH</h2>
                <p className=' text-[35.9px] leading-[47.6px] font-Helvetica font-normal uppercase '><span className=' text-[#F77B0B]'>M</span>arc <span className=' text-[#F77B0B]'>J</span>oachim <span className=' text-[#F77B0B]'>H</span>ubrich</p>
                <p className=' text-[20px] leading-7 pt-[30px] font-Helvetica font-normal capitalize'>About the mindset agency coach</p>
                <p className=' text-base leading-[25.6px] font-Poppins font-normal opacity-70 pb-[35px]'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
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