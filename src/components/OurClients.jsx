import React from 'react'
import MJH7 from '../assets/images/svg/MJH7.svg'
import SwipeSlide from './SwipeSlide'
const OurClients = () => {

  return (
   <section> 
    <div className=" max-w-[1164px] px-3 pb-[226px]  mx-auto relative">
      <div className=" absolute bottom-4">
      <img src={MJH7} alt="MJH7" className=' relative' />
      <p className=' absolute top-[-16%] left-[-70%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
       <div className=" absolute flex items-end bottom-[-2%] left-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[270deg]'>07</p>
       <p className=' font-normal font-Helvetica text-[24px] leading-[30.9px] uppercase text-nowrap'>take step</p>
       </div>
      </div>
        <h2 className=' text-[52px] leading-[66.9px] font-Helvetica uppercase font-normal text-center'>What our <span className=' text-[#F77B0B]'>clients</span> say</h2>
        <div className=" mt-6">
        <SwipeSlide/>
        </div>
      
    </div>
   </section>
  )
}

export default OurClients