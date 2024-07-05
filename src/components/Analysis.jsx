import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MJH4 from '../assets/images/svg/MJH4.svg'
import AnalysisEllipse from '../assets/images/webp/AnalysisEllipse.png'
const Analysis = () => {
    var settings = {
        dots: true,
        infinite: true,
        fade:true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
  return (
   <section className=' relative overflow-hidden'>
    <img src={AnalysisEllipse} alt="AnalysisEllipse" className=' absolute top-[-52.2%]' />
    <div className=" max-w-[1164px] px-3 mx-auto  pt-[300px] pb-[186px] relative">
      <img src={MJH4} alt="MJH4" className=' absolute right-0 top-2' />
        <div className=" flex flex-wrap">
            <div className="w-[50%]">
                <h4 className=' text-[29.3px] leading-[37.8px] font-Helvetica font-normal pt-9'>THE FOUR PHASES OF</h4>
                <h2 className='text-[52px] leading-[62.4px] font-Helvetica font-normal max-w-[327px]'>SEPARATION <span className='text-[#F77B0B]'>MINDSET</span></h2>
                <p className=' text-base leading-[25.6px] font-Poppins font-normal pt-5 '>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
            </div>
            <div className=" w-[50%]">
            <Slider {...settings}>
      <div className=' max-w-[608px] min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
        <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>1st phase</h5>
        <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>"The not-wanting-to-be-true"</h5>
        <p className=' font-Poppins text-base leading-[25.6px] font-normal text-white max-w-[363px] text-center pt-4'>This phase is characterized by denial and ignoring the final separation.</p>
      </div>
      <div className=' max-w-[608px] min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
        <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>2nd phase</h5>
        <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>"The emotional chaos"</h5>
        <p className=' font-Poppins text-base leading-[25.6px] font-normal text-white max-w-[363px] text-center pt-4'>The second phase is characterized by strong mode swings and disorientation</p>
      </div>
      <div className=' max-w-[608px] min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
        <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>3rd phase</h5>
        <h5 className=' text-white text-center text-[20px] leading-[32px] font-Poppins font-medium'>"The reconstruction"</h5>
        <p className=' font-Poppins text-base leading-[25.6px] font-normal text-white max-w-[363px] text-center pt-4'>apart from occasional setbacks, you now begin to actively take control of your life again.</p>
      </div>
      <div className=' max-w-[608px] min-h-[448px] bg-[#003E92] !flex flex-col items-center justify-center'>
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