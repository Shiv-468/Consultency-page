import React from 'react'
import MJH1 from '../assets/images/svg/MJH1.svg'
import Chatting from '../assets/images/svg/chatting.svg'
import PhoneCall from '../assets/images/svg/PhoneCall.svg'
import HeroEllipse from '../assets/images/webp/HeroEllipse.png'
const HeroSection = () => {
  return (
    <section className=' max-xl:min-h-screen bg-HeroBG flex bg-cover bg-no-repeat bg-center xl:!min-h-[810px] relative'>
      <img src={HeroEllipse} alt="HeroEllipse" className=' absolute top-0' />
      <div className=" max-w-[1164px] px-3 mx-auto w-full flex relative flex-col">
       <div className=" absolute bottom-[-20%] xl:bottom-[-22%]">
       <img src={MJH1} alt="MJH1" className=' relative' />
       <p className=' absolute top-[-18%] left-[-70%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
       <div className=" absolute flex items-end bottom-[-4%] left-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[270deg]'>01</p>
       <p className=' font-normal font-Helvetica text-[24px] leading-[30.9px] uppercase'>fault</p>
       </div>
       </div>
        <nav>
          <div className=" flex items-center justify-end pt-6">
            <ul className=' flex items-center gap-10'>
              <li><a href="">Benifits</a></li>
              <li><a href="">Testimonials</a></li>
              <li><button className=' text-nowrap flex items-center justify-center max-w-[235px] px-[28.2px] text-white w-full min-h-[56px] bg-gradient-to-br from-[#0C5FD1] to-[#8703C5]'>Book consultation now</button></li>
            </ul>
          </div>
        </nav>
        <div className=" flex flex-wrap -mx-3 w-full flex-grow justify-center">
          <div className=" w-[50%] px-3 flex flex-col justify-center ">
            <p className=' text-[18.8px] leading-[24.2px] text-[#F77B0B] font-Helvetica capitalize '>Marc joachim hubrich</p>
            <h1 className=' text-[60px] leading-[77.2px] max-w-[517px] font-normal font-Helvetica uppercase pb-1'>Now I let you go!</h1>
            <p className=' font-Poppins text-base leading-[25.6px] font-normal max-w-[517px] opacity-70'>For women who do not want to be completely dragged down by a SEPARATION.</p>
            <p className=' font-Poppins text-base leading-[25.6px] font-normal max-w-[517px] opacity-70'>How to let go of your EX so you can leave him behind without having to run to a therapist right away.</p>
       <div className=" flex items-center gap-4 pt-[32px]">
       <button class="bg-gradient-to-tr from-blue-500 to-purple-500 text-white font-medium max-w-[452px] rounded-[63px] p-[1.7px]">
              <span class="flex gap-1 items-center py-[5px] ps-[9px] pe-[48px] w-full bg-white text-black rounded-[63px]  font-inter font-medium text-[16px] leading-[24px] ">
                <img src={Chatting} alt="Chatting" />
                <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text">Book a non-binding initial consultation now</span>
              </span>
            </button>
            <img src={PhoneCall} alt="PhoneCall" />
       </div>
          </div>
          <div className=" w-[50%] px-3 justify-end flex flex-col">
            <div className=" flex pb-[45.8px] justify-center ">
              <div className=" flex justify-between max-w-[367px] border-l-[2px] border-[#9800B0]">
                <p className=' text-white ps-[13px] font-Helvetica text-base leading-[27.2px] font-normal max-w-[165px]'>Die wichtigsten Aspekte einer Trennung:</p>
                <div className=" flex flex-col">
                  <ul>
                    <li className=' font-Poppins font-medium text-base leading-[25.6px] text-white list-disc'>physische Trennung</li>
                    <li className=' font-Poppins font-medium text-base leading-[25.6px] text-white list-disc'>mentale Trennung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection