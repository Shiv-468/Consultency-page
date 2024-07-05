import React from 'react'
import Flower1 from '../assets/images/webp/Flower1.png'
import Chatting from '../assets/images/svg/chatting.svg'
import MJH3 from '../assets/images/svg/MJH3.svg'
const GetGoal = () => {
  return (
   <section>
    <div className=" max-w-[1164px] px-3 mx-auto pb-[124px] relative">
        <img src={MJH3} alt="MJH3" className=' absolute bottom-5' />
        <div className=" flex items-start">
        <div className=" flex gap-3">
            <div className=" flex flex-col">
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
                <button className=' flex max-w-[452xp] border items-center'>
                        <img src={Chatting} alt="Chatting" />
                        Book a non-binding initial consultation now
                    </button>
                </div>
            </div>

        </div>
    </div>
   </section>
  )
}

export default GetGoal