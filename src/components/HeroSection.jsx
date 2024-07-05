import React from 'react'

const HeroSection = () => {
  return (
    <section className=' max-xl:min-h-screen bg-HeroBG flex bg-cover bg-no-repeat bg-center xl:!min-h-[810px]'>
        <div className=" max-w-[1164px] px-3 mx-auto w-full flex">
          <div className=" flex flex-wrap -mx-3 w-full flex-grow justify-center">
            <div className=" w-[50%] px-3 flex flex-col justify-center ">
              <p className=' text-[18.8px] leading-[24.2px] text-[#F77B0B] '>Marc joachim hubrich</p>
              <h1 className=' text-[60px] leading-[77.2px] max-w-[400px] font-normal font-Helvetica'>Now I let you go!</h1>
              <p className=' font-Poppins text-base leading-[25.6px] font-normal max-w-[517px]'>For women who do not want to be completely dragged down by a SEPARATION.</p>
              <p className=' font-Poppins text-base leading-[25.6px] font-normal max-w-[517px]'>How to let go of your EX so you can leave him behind without having to run to a therapist right away.</p>
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