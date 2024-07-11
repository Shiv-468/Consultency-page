import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MJH4 from '../assets/images/svg/MJH4.svg'
import Chatting from '../assets/images/svg/chatting.svg'
import AnalysisEllipse from '../assets/images/webp/AnalysisEllipse.webp'
import SliderEllipse from '../assets/images/webp/SliderEllipse.webp'
import { NextArrow, PrevArrow } from '../common/Icon';
import { Autoplay } from 'swiper/modules';
const Analysis = () => {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: '0px' }} className='custom-dots'> {dots} </ul>
      </div>
    ),
  };
  return (
    <section className=' relative overflow-hidden'>
      <img src={AnalysisEllipse} alt="AnalysisEllipse" className=' absolute top-[-40%] left-[-20%] lg:left-0 hidden md:block lg:top-[-52.2%]' />
      <div className=" max-w-[1164px] px-3 mx-auto pt-12 sm:pt-[80px] md:pt-[230px] lg:pt-[300px] pb-[80px] md:pb-[120px] lg:pb-[186px] relative">
        <div className=" absolute right-5 xl:right-0 top-[8.5%] xl:top-14 hidden md:block">
            <img src={MJH4} alt="MJH4" className=' relative' />
      <p className=' absolute top-[-20%] left-[20%] rotate-[270deg] font-Poppins font-[300] text-[20px] leading-[34px]'>MJH</p>
            <div className=" absolute flex items-end bottom-[-2%] right-[100%]">
       <p className=' text-[24px] leading-[30.9px] font-Helvetica font-normal uppercase'>analysis</p>
       <p className=' font-normal font-Helvetica text-[40px] leading-[51.5px] rotate-[-270deg]'>04</p>
       </div>
        </div>
        <div className=" flex flex-wrap -mx-3">
          <div className="w-full lg:w-[50%] xl:w-[41.66%] px-3 md:pe-0 xl:ps-[6px] flex flex-col items-center lg:items-start pb-6 lg:pb-0"  data-aos="fade-right">
            <h4 className='text-[24px] sm:text-[29.3px] leading-[37.8px] font-Helvetica font-normal pt-9'>THE FOUR PHASES OF</h4>
            <h2 className='text-[33px] leading-[39px] sm:text-[52px] sm:leading-[62.4px] font-Helvetica font-normal lg:max-w-[327px] text-center md:text-start'>SEPARATION <span className='text-[#F77B0B]'>MINDSET</span></h2>
            <p className=' text-base leading-[25.6px] font-Poppins font-normal pt-5 max-w-[484px] '>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
            <button class="bg-gradient-to-tr from-blue-500 to-purple-500 hover:shadow-BtnShadow duration-300 ease-in-out w-full font-medium mt-9 sm:max-w-[452px] rounded-[63px] p-[1.7px]">
              <span class="flex gap-1 items-center py-[5px] ps-[9px] pe-4 w-full bg-white text-black rounded-[63px] ">
                <img src={Chatting} alt="Chatting" />
                <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] sm:inline-block text-transparent capitalize bg-clip-text text-start font-Inter font-medium text-[16px] leading-[24px]">Book a non-binding initial consultation now</span>
              </span>
            </button>
          </div>
          <div className=" w-full lg:w-[50%] xl:w-[58.33%] px-3 flex flex-col justify-end" data-aos="fade-left">

            <Slider {...settings}>
              <div className=' max-w-[608px] relative z-20 mx-auto lg:mr-0 lg:!ml-auto py-12 px-4 min-h-[350px] sm:min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
              <img src={SliderEllipse} alt="SliderEllipse"  className=' absolute z-0 bg-transparent right-0 bottom-0'/>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>1st phase</h5>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>"The not-wanting-to-be-true"</h5>
                <p className=' font-Poppins text-base leading-[25.6px] font-normal text-white max-w-[363px] text-center pt-4'>This phase is characterized by denial and ignoring the final separation.</p>
              </div>
              <div className=' max-w-[608px] relative z-20 mx-auto lg:mr-0 lg:!ml-auto py-12 px-4 min-h-[350px] sm:min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
              <img src={SliderEllipse} alt="SliderEllipse"  className=' absolute z-0 bg-transparent right-0 bottom-0'/>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>2nd phase</h5>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>"The emotional chaos"</h5>
                <p className=' font-Poppins text-base leading-[25.6px] font-normal text-white max-w-[363px] text-center pt-4'>The second phase is characterized by strong mode swings and disorientation</p>
              </div>
              <div className=' max-w-[608px] relative z-20 mx-auto lg:mr-0 lg:!ml-auto py-12 px-4 min-h-[350px] sm:min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
              <img src={SliderEllipse} alt="SliderEllipse"  className=' absolute z-0 bg-transparent right-0 bottom-0'/>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>3rd phase</h5>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>"The reconstruction"</h5>
                <p className=' font-Poppins text-base leading-[25.6px] font-normal text-white max-w-[363px] text-center pt-4'>apart from occasional setbacks, you now begin to actively take control of your life again.</p>
              </div>
              <div className=' max-w-[608px] relative z-20 mx-auto lg:mr-0 lg:!ml-auto py-12 px-4 min-h-[350px] sm:min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
              <img src={SliderEllipse} alt="SliderEllipse"  className=' absolute z-0 bg-transparent right-0 bottom-0'/>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>4th phase</h5>
                <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>"The new concept of life"</h5>
                <p className=' font-Poppins text-base leading-[25.6px] font-normal text-white max-w-[363px] text-center pt-4'>through the breakup you have learned to find your strengths. you develop a new concept of love and partnership. you have now gained the freedom to be yourself and live your life.</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Analysis