import React from 'react'
import Chatting from '../assets/images/svg/chatting.svg'
const Fault = () => {
    return (
        <section className=' pt-[151px] pb-[122px]'>
            <div className=" max-w-[1164px] px-3 mx-auto">
               <div className=" flex items-start flex-wrap -mx-3">
         <div className=" w-[58.33%] px-3 flex justify-end">
         <div className=" flex flex-col">
            <h2 className=' font-Helvetica text-[60px] leading-[77.2px]'>IT'S NOT</h2>
            <h2 className=' font-Helvetica text-[60px] leading-[77.2px] -mt-2 ps-16 ms-2'><span className=' text-[#F77B0B]'>YOUR</span> FAULT!</h2>
            </div>
         </div>
          <div className=" w-[41.66%] px-3">
          <div className=" flex gap-[14px] items-center ps-9">
                <div className=" bg-[#9800B0] w-[2px] min-h-[67.8px]"></div>
                <p className=' text-base leading-[25.6px] font-Poppins font-normal max-w-[288px] '>It's not your fault for not knowing how to let go of the partner who no longer made you feel special. </p>
             </div>
          </div>
               </div>

                <p className=' text-center pt-14 pb-[34.8px] font-Helvetica text-[20px] leading-[28px] font-normal'>How would you know when you are busy with completely different things at the moment:</p>
            </div>
            <div className=" bg-FaultBG min-h-[360px] bg-no-repeat bg-cover bg-center  ">
              <div className=" max-w-[1164px] px-3 mx-auto">
             <div className=" flex flex-col gap-[29.15px] lg:pe-[91px]">
           <div className=" flex justify-end">
           <div className=" max-w-[750px] w-full flex  min-h-[162px]">
                    {/*======= fault cards ===== */}
                    <div className=" bg-[#003E9233] backdrop-blur-[4px] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[43px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>Your self-esteem is in the basement.</p>
                    </div>
                    <div className=" bg-[#003E9233] backdrop-blur-[4px] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[43px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>You keep asking yourself what you did wrong.
                        </p>
                    </div>
                    <div className=" bg-[#003E9233] backdrop-blur-[4px] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[43px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>The feeling of helplessness is your constant companion.</p>
                    </div>
                </div>
           </div>
                <div className=" max-w-[750px] w-full flex  min-h-[169px]">
                    {/*======= fault cards ===== */}
                    <div className=" bg-[#003E9233] backdrop-blur-[4px] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[45px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>Your self-esteem is in the basement.</p>
                    </div>
                    <div className=" bg-[#003E9233] backdrop-blur-[4px] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[45px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>You keep asking yourself what you did wrong.
                        </p>
                    </div>
                    <div className=" bg-[#003E9233] backdrop-blur-[4px] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[45px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>The feeling of helplessness is your constant companion.</p>
                    </div>
                </div>
             </div>
              </div>
            </div>
            <div className=" max-w-[1164px] px-3 mx-auto">
                <p className=' text-center pt-12 pb-5 font-Poppins text-base leading-[25.6px] font-normal'>You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
                <div className=" flex items-center justify-center">
                <button class="bg-gradient-to-tr from-blue-500 to-purple-500 text-white font-medium max-w-[452px] rounded-[63px] p-[1.7px]">
              <span class="flex gap-1 items-center py-[5px] ps-[9px] pe-[48px] w-full bg-white text-black rounded-[63px]  font-inter font-medium text-[16px] leading-[24px] ">
                <img src={Chatting} alt="Chatting" />
                <span class="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] inline-block text-transparent bg-clip-text">Book a non-binding initial consultation now</span>
              </span>
            </button>
                </div>
            </div>
        </section>
    )
}

export default Fault