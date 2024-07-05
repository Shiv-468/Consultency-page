import React from 'react'
import Chatting from '../assets/images/svg/chatting.svg'
const Fault = () => {
    return (
        <section className=' pt-[151px] pb-[122px]'>
            <div className=" max-w-[1164px] px-3 mx-auto">
                <h2 className=' font-Helvetica text-[60px] leading-[77.2px]'>IT'S NOT</h2>
                <h2 className=' font-Helvetica text-[60px] leading-[77.2px] -mt-2'><span className=' text-[#F77B0B]'>YOUR</span> FAULT!</h2>


                <p className=' text-center pt-14 pb-[34.8px] font-Helvetica text-[20px] leading-[28px] font-normal'>How would you know when you are busy with completely different things at the moment:</p>
            </div>
            <div className=" bg-FaultBG min-h-[360px] bg-no-repeat bg-cover bg-center ">
              <div className=" max-w-[1164px] px-3 mx-auto">
             <div className=" flex flex-col gap-[29.15px] lg:pe-[91px]">
           <div className=" flex justify-end">
           <div className=" max-w-[750px] w-full flex  min-h-[162px]">
                    {/*======= fault cards ===== */}
                    <div className=" bg-[#003E9233] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[43px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>Your self-esteem is in the basement.</p>
                    </div>
                    <div className=" bg-[#003E9233] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[43px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>You keep asking yourself what you did wrong.
                        </p>
                    </div>
                    <div className=" bg-[#003E9233] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[43px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>The feeling of helplessness is your constant companion.</p>
                    </div>
                </div>
           </div>
                <div className=" max-w-[750px] w-full flex  min-h-[169px]">
                    {/*======= fault cards ===== */}
                    <div className=" bg-[#003E9233] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[45px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>Your self-esteem is in the basement.</p>
                    </div>
                    <div className=" bg-[#003E9233] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[45px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>You keep asking yourself what you did wrong.
                        </p>
                    </div>
                    <div className=" bg-[#003E9233] hover:bg-[#003E92] ease-linear duration-300 flex justify-center pt-[45px] w-[33.33%]">
                        <p className=' text-white max-w-[173px] w-full'>The feeling of helplessness is your constant companion.</p>
                    </div>
                </div>
             </div>
              </div>
            </div>
            <div className=" max-w-[1164px] px-3 mx-auto">
                <p className=' text-center pt-12 pb-5 font-Poppins text-base leading-[25.6px] font-normal'>You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
                <div className=" flex items-center justify-center">
                    <button className=' flex max-w-[452xp] border items-center'>
                        <img src={Chatting} alt="Chatting" />
                        Book a non-binding initial consultation now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Fault