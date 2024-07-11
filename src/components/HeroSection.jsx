import React, { useState,useEffect } from 'react'
import MJH1 from '../assets/images/svg/MJH1.svg'
import Chatting from '../assets/images/svg/chatting.svg'
import PhoneCall from '../assets/images/svg/PhoneCall.svg'
import HeroEllipse from '../assets/images/webp/HeroEllipse.webp'
import { Sling as Hamburger } from 'hamburger-react'
const HeroSection = () => {
  const [data, setData] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (data) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [data]);

  const toggleMenu = () => {
    setData(!data);
  };
  const handleLinkClick = () => {
    document.body.classList.remove('overflow-hidden');
    setData(false);
  };
  return (
    <section className=' max-xl:min-h-screen md:bg-HeroBG bg-white flex bg-cover bg-no-repeat bg-center xl:!min-h-[810px] relative'>
      <img src={HeroEllipse} alt="HeroEllipse" className=' absolute top-0  hidden sm:block' />
      <div className=" max-w-[1164px] px-3 mx-auto w-full flex relative flex-col">
       <div className=" absolute bottom-[-14%] xl:bottom-[-18%] hidden md:block" data-aos="fade-down-right">
       <img src={MJH1} alt="MJH1" className=' relative' />
       <p className=' absolute top-[-18%] left-[-70%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
       <div className=" absolute flex items-end bottom-[-4%] left-[100%]">
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[270deg]'>01</p>
       <p className=' font-normal font-Helvetica text-[24px] leading-[30.9px] uppercase'>fault</p>
       </div>
       </div>
        <nav>
          <div className=" flex items-center justify-end pt-6">
            <ul className={`${data ? "right-0":"right-[-100%]"} menuicon flex items-center gap-10 z-50 max-md:bg-[#003E92] max-md:fixed max-md:h-full max-md:w-full max-md:top-0 max-md:flex-col max-md:justify-center max-md:duration-300`}>
              <li><a href="#Benifits" className=' text-base lg:text-white leading-[20.6px] font-Helvetica font-normal md:hover:text-black duration-300 ease-linear' onClick={handleLinkClick}>Benifits</a></li>
              <li><a href="#Testimonials" className=' text-base lg:text-white leading-[20.6px] font-Helvetica font-normal md:hover:text-black duration-300 ease-linear' onClick={handleLinkClick}>Testimonials</a></li>
              <li><button className=' text-nowrap flex items-center justify-center max-w-[235px] px-[28.2px] text-white w-full min-h-[56px] bg-gradient-to-br from-[#0C5FD1] to-[#8703C5]'>Book consultation now</button></li>
            </ul>
              <div onClick={toggleMenu} className=" md:hidden z-50">
              <Hamburger  onClick={toggleMenu} toggled={isOpen} toggle={setOpen} />
              </div>
          </div>
        </nav>
        <div className=" w-full flex flex-grow max-md:justify-center max-md:items-center">
        <div className=" flex flex-wrap -mx-3 md:items-center md:justify-center md:flex-grow h-full">
          <div className=" w-full md:w-[50%] px-3 flex flex-col justify-end md:justify-center " data-aos="fade-right">
            <p className=' text-[18.8px] leading-[24.2px] text-[#F77B0B] font-Helvetica capitalize '>Marc joachim hubrich</p>
            <h1 className='text-[58px] leading-[57.2px] sm:text-[60px] sm:leading-[77.2px] max-w-[517px] font-normal font-Helvetica uppercase pb-1'>Now I let you go!</h1>
            <p className=' font-Poppins text-base leading-[25.6px] font-normal max-w-[517px] opacity-70'>For women who do not want to be completely dragged down by a SEPARATION.</p>
            <p className=' font-Poppins text-base leading-[25.6px] font-normal max-w-[517px] opacity-70'>How to let go of your EX so you can leave him behind without having to run to a therapist right away.</p>
       <div className=" flex items-center gap-2 xl:gap-4 pt-[32px]">
       <button class="bg-gradient-to-tr from-blue-500 to-purple-500 max-w-[452px] hover:shadow-BtnShadow duration-300 ease-in-out lg:max-w-[452px] text-white font-medium md:max-w-[280px] rounded-[63px] p-[1.7px]">
              <span class="flex gap-1 items-center py-[5px] ps-[9px] pe-[16px] xl:!pe-[48px] w-full bg-white text-black rounded-[63px]  font-Inter font-medium text-[16px] leading-[24px] ">
                <img src={Chatting} alt="Chatting" />
                <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-start text-transparent bg-clip-text">Book a non-binding initial consultation now</span>
              </span>
            </button>
            <a href="tel:+4733378901">
            <img src={PhoneCall} alt="PhoneCall" />
            </a>
       </div>
          </div>
          <div className=" w-full md:w-[50%] px-3 md:justify-end flex flex-col pt-6 md:pt-0 md:h-full" data-aos="fade-left">
            <div className=" flex md:pb-[45.8px] md:justify-center ps-5">
              <div className=" flex flex-col sm:flex-row justify-between max-w-[367px] border-l-[2px] border-[#9800B0]">
                <p className=' md:text-white ps-[13px] font-Helvetica text-base leading-[27.2px] font-normal sm:max-w-[165px]'>Die wichtigsten Aspekte einer Trennung:</p>
                <div className=" flex flex-col">
                  <ul className=' ps-8'>
                    <li className=' font-Poppins font-medium text-base leading-[25.6px] md:text-white list-disc'>physische Trennung</li>
                    <li className=' font-Poppins font-medium text-base leading-[25.6px] md:text-white list-disc'>mentale Trennung</li>
                  </ul>
                </div>
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