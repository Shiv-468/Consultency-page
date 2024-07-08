import React from 'react'
import Flower1 from '../assets/images/webp/Flower1.png'
import Chatting from '../assets/images/svg/chatting.svg'
import MJH3 from '../assets/images/svg/MJH3.svg'
import MJH2 from '../assets/images/svg/MJH2.svg'
const GetGoal = () => {
  return (
   <section>
    <div className=" max-w-[1164px] px-3 mx-auto pb-[124px] relative">
        <div className=" absolute right-5 xl:right-0 xl:top-[-22%] top-[-12%] hidden sm:block">
            <img src={MJH2} alt="MJH2" className=' relative' />
      <p className=' absolute top-[-16%] left-[20%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
            <div className=" absolute flex items-end bottom-[-2%] right-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[-270deg]'>02</p>
       </div>
        </div>
        <div className=" absolute bottom-5">
        <img src={MJH3} alt="MJH3" className=' relative' />
       <p className=' absolute top-[-8%] left-[-70%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
       <div className=" absolute flex items-end bottom-[-2%] left-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[270deg]'>03</p>
       <p className=' font-normal font-Helvetica text-[24px] leading-[30.9px] uppercase'>Goal</p>
       </div>
       </div>
        <div className=" flex flex-col max-lg:items-center items-start lg:flex-row">
        <div className=" flex lg:gap-3 max-lg:w-full justify-evenly lg:justify-normal">
            <div className=" flex flex-col ">
                <h2 className=' uppercase text-[52px] leading-[66.9px] pt-7 font-Helvetica font-normal'>what you</h2>
                <h3 className=' uppercase text-[60.6px] leading-[78.1px] -mt-2 font-Helvetica font-normal'>will <span className=' text-[#F77B0B]'>get</span></h3>
            </div>
            <img src={Flower1} alt="Flower1" className=' w-full max-w-[224px]' />
        </div>
        <div className=" border-l-[2px] border-[#9800B0] min-h-[67px] mt-[53px]">
            <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[426px] ps-3'>I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
        </div>
        </div>
        <p className=' text-[20px] leading-[28px] text-center font-Helvetica font-normal pt-12 pb-7'>In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
        <div className=" flex flex-wrap">
            <div className=" w-full  sm:w-[50%] xl:w-[33.33%] flex justify-center sm:justify-end">
                <div className=" max-w-[380px] min-h-[230px] py-16 px-[48.5px]">
                    <p className=' font-Poppins text-base leading-[25.6px] font-normal'>Why does your EX have to disappear from your life forever?</p>
                </div>
            </div> 
             <div className=" w-full  sm:w-[50%] xl:w-[33.33%] flex justify-center md:justify-start">
                <div className=" max-w-[380px] bg-[#F5FAFF] min-h-[230px] py-16 px-[48.5px]">
                    <p className=' font-Poppins text-base leading-[25.6px] font-normal'>What should your everyday life as a single person look like now and how can you cope with the new challenges?</p>
                </div>
            </div>
            <div className=" w-full  sm:w-[50%] xl:w-[33.33%] flex justify-center sm:justify-end">
                <div className=" max-w-[380px] min-h-[230px] py-16 px-[48.5px]">
                    <p className=' font-Poppins text-base leading-[25.6px] font-normal'>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?
                    </p>
                </div>
            </div>
            <div className=" w-full  sm:w-[50%] xl:w-[33.33%] flex justify-center md:justify-start">
                <div className=" max-w-[380px] min-h-[230px] w-full py-16 px-[48.5px]">
                    <p className=' font-Poppins text-base leading-[25.6px] font-normal'>Who are you without your EX?</p>
                </div>
            </div>
            <div className=" w-full  sm:w-[50%] xl:w-[33.33%] flex justify-center sm:justify-end">
                <div className=" max-w-[380px] min-h-[230px] py-16 px-[48.5px]">
                    <p className=' font-Poppins text-base leading-[25.6px] font-normal'>What new dreams and hopes do you want to live? </p>
                </div>
            </div>
            <div className=" w-full  sm:w-[50%] xl:w-[33.33%] flex justify-center md:justify-start">
                <div className=" max-w-[380px] min-h-[230px] py-16 px-[48.5px]">
                <button class="bg-gradient-to-tr from-blue-500 to-purple-500 text-white font-medium rounded-[8px] p-[1.7px]">
              <span class="flex items-center w-full bg-white text-black rounded-[8px] font-Inter font-medium text-[16px] leading-[24px] min-h-[85px] ">
                <img src={Chatting} alt="Chatting" />
                <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block  max-w-[203px] text-transparent bg-clip-text text-start">Book a non-binding initial consultation now</span>
              </span>
            </button>
                </div>
            </div>

        </div>
    </div>
   </section>
  )
}

export default GetGoal