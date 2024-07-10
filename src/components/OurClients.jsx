import React from 'react'
import MJH7 from '../assets/images/svg/MJH7.svg'
import Semicollen from '../assets/images/webp/Semicollen.webp'
import SwipeSlide from './SwipeSlide'
const OurClients = () => {

  return (
   <section> 
    <div className=" max-w-[1164px] px-3 pb-14 sm:pb-[100px] md:pb-[200px] mx-auto relative">
      <img src={Semicollen} alt="Semicollen" className=' absolute max-w-[100px] right-[5%] top-[15%] 2xl:left-[86%] z-0 hidden lg:block' />
      <div className=" absolute bottom-4 hidden md:block">
      <img src={MJH7} alt="MJH7" className=' relative' />
      <p className=' absolute top-[-16%] left-[-70%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
       <div className=" absolute flex items-end bottom-[-2%] left-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[270deg]'>07</p>
       <p className=' font-normal font-Helvetica text-[24px] leading-[30.9px] uppercase text-nowrap'>take step</p>
       </div>
      </div>
        <h2 className='text-[41px] leading-[44px] sm:text-[52px] sm:leading-[66.9px] font-Helvetica uppercase font-normal text-center'>What our <span className=' text-[#F77B0B]'>clients</span> say</h2>
        <div className=" mt-6 -mx-3" data-aos="zoom-in">
        <SwipeSlide/>
        </div>
      
    </div>
   </section>
  )
}

export default OurClients