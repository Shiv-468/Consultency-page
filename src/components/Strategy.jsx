import React from 'react'
import Chatting from '../assets/images/svg/chatting.svg'
const Strategy = () => {
  return (
   <section className=' bg-[#F2F8FF]'>
    <div className=" max-w-[1164px] px-3 mx-auto pt-[71px] pb-[59px] ">
        <div className=" flex flex-wrap -mx-3">
            <div className=" w-full md:w-[58.33%] px-3">
                <h2 className=' text-[30px] leading-[39px] md:text-[52px] md:leading-[66.9px] font-Helvetica font-normal uppercase '>Request your</h2>
                <h2 className=' text-[30px] leading-[39px] md:text-[52px] md:leading-[66.9px] font-Helvetica font-normal uppercase '><span className=' text-[#F77B0B]'>non-binding</span> strategy</h2>
                <h2 className=' text-[30px] leading-[39px] md:text-[52px] md:leading-[66.9px] font-Helvetica font-normal uppercase '>meeting now!</h2>
            </div>
            <div className=" w-full md:w-[41.66%] px-3 flex items-center justify-end">
             <div className=" flex gap-[14px]">
                <div className=" bg-[#9800B0] w-[2px]"></div>
                <p className=' text-base leading-[25.6px] font-Poppins font-normal md:max-w-[398px] '>Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: </p>
             </div>
            </div>
        </div>
    </div>
    <div className=" bg-StrategyBG bg-cover bg-no-repeat bg-center md:min-h-[848px]">
        <div className=" max-w-[1164px] px-3 mx-auto pt-16 md:pt-[111px]">
            <div className=" flex flex-wrap sm:flex-nowrap justify-center gap-6 lg:gap-0" data-aos="flip-down">
                <div className=" max-w-[250px] md:min-h-[200px] py-12 flex md:pt-[61px] justify-center bg-[#FFFFFF26] w-full hover:bg-[#003E92] duration-300 ease-linear ">
                    <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[173px] text-white'>How do I let go of my EX so I can finally leave him behind?</p>
                </div>
                <div className=" max-w-[250px] md:min-h-[200px] py-12 flex md:pt-[61px] justify-center bg-[#FFFFFF26] w-full hover:bg-[#003E92] duration-300 ease-linear ">
                    <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[173px] text-white'>How does the divorce process work?</p>
                </div>
               <div className=" hidden md:block w-full max-w-[250px]">
               <div className=" max-w-[250px] md:min-h-[200px] py-12 h-full flex md:pt-[61px] justify-center bg-[#FFFFFF26] w-full hover:bg-[#003E92] duration-300 ease-linear ">
                    <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[173px] text-white'>Do I need a lawyer?</p>
                </div>
               </div>
            </div>
            <div className=" flex flex-wrap justify-center pt-6 md:pt-[34px] gap-6 lg:gap-0" data-aos="flip-down">
                <div className=" max-w-[250px] md:min-h-[200px] py-12 flex md:pt-[61px] justify-center bg-[#FFFFFF26] w-full hover:bg-[#003E92] duration-300 ease-linear ">
                    <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[173px] text-white'>How much will the divorce cost?</p>
                </div>
                <div className=" max-w-[250px] md:min-h-[200px] py-12 flex md:pt-[61px] justify-center bg-[#FFFFFF26] w-full hover:bg-[#003E92] duration-300 ease-linear ">
                    <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[173px] text-white'>What will happen to my children?</p>
                </div>
                <div className=" max-w-[250px] md:min-h-[200px] py-12 flex md:pt-[61px] justify-center bg-[#FFFFFF26] w-full hover:bg-[#003E92] duration-300 ease-linear ">
                    <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[173px] text-white'>What does my future as a single person look like now?</p>
                </div>
                <div className=" max-w-[250px] md:min-h-[200px] py-12 flex md:pt-[61px] justify-center bg-[#FFFFFF26] w-full hover:bg-[#003E92] duration-300 ease-linear ">
                    <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[173px] text-white'>How do I rebuild my self-esteem?</p>
                </div>
            </div>
          <div className=" flex items-center justify-center pt-6 md:pt-[58px] pb-16 md:pb-[186px]">
          <button class="bg-gradient-to-tr from-blue-500 to-purple-500 hover:shadow-BtnShadowWhite duration-300 ease-in-out font-medium max-w-[452px] rounded-[63px] p-[1.7px]" data-aos="zoom-in">
              <span class="flex gap-1 items-center py-[5px] ps-[9px] pe-[48px] w-full bg-white text-black rounded-[63px]  font-inter font-medium text-[16px] leading-[24px] ">
                <img src={Chatting} alt="Chatting" />
                <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text">Book a non-binding initial consultation now</span>
              </span>
            </button>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Strategy