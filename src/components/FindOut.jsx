import React from 'react'

const FindOut = () => {
  return (
    
    <section className=' bg-FindoutBG bg-no-repeat bg-cover bg-left lg:bg-center min-h-[517px] flex flex-col justify-center'>
        <div className=" px-3 flex items-center justify-center">
            <div className=" max-w-[778px] min-h-[305px] backdrop-blur-[5px] flex flex-col items-center bg-[#FFFFFF26] border border-[#FFFFFF26] w-full px-6 py-10 sm:pt-[50px] sm:pb-[42.8px]" data-aos="zoom-out">
                <h2 className=' text-[40px] leading-[40.2px] sm:text-[52px] sm:leading-[62.4px] font-Helvetica font-normal text-white text-center uppercase '>Are you over your EX?</h2>
                <p className=' text-base text-white leading-[25.6px] max-w-[558px] text-center font-Poppins pt-2'>Most women don't even realize how their past experiences affect their lives today. Assisting you to overcome this situation is what we do.</p>
                <button className=' flex items-center max-w-[193px] rounded-[68px] mt-5 sm:mt-[31px] min-h-[56px] justify-center w-full  bg-gradient-to-r from-[#0C5FD1] to-[#8703C5]'>
                <span className='text-white'>Let’s find it out</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default FindOut