import React from 'react';
import MarrieJames from '../assets/images/webp/MarrieJames.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

const SwipeSlide = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <>
            {!isSmallScreen ? (
               <Swiper
               direction={'vertical'}
               loop={true}
               pagination={{
                   clickable: true,
                   el: '.custom-pagination',
                   bulletClass: 'swiper-pagination-bullet',
                   bulletActiveClass: 'swiper-pagination-bullet-active'
               }}
               modules={[Pagination, Autoplay,]}
               autoplay={{ delay: 2000 }}
               
               className="mySwiper h-[800px] md:h-[570px]"
           >
                    {[...Array(3)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className=' max-w-[820px] mx-auto px-3 mt-[60px]'>
                                <div className=" shadow-SliderShadow px-12 pb-8 pt-14 relative">
                                    <img src={MarrieJames} alt="MarrieJames" className=' absolute max-w-[86px] top-[-20%] left-[50%] translate-x-[-50%]' />
                                    <p className=' text-center font-Poppins text-base leading-[25.6px] opacity-70'>
                                        Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.
                                    </p>
                                    <p className=' text-center pt-4 font-Poppins text-base leading-[25.6px] font-medium'>Marrie James-CEO</p>
                                    <p className=' text-center font-Poppins text-base leading-[25.6px] opacity-70'>Limana Enterprises, CA</p>
                                </div>
                                <div className=' flex flex-wrap -mx-[10px] mt-5'>
                                    <div className=" w-full md:w-[50%] px-[10px]">
                                        <div className=" shadow-SliderShadow px-9 pt-6 pb-8">
                                            <p className=' text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' pt-5 text-center text-base font-Poppins leading-[25.6px] font-medium'>Ralph Edwards-CEO</p>
                                            <p className=' text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                    <div className=" w-full md:w-[50%] px-[10px] mt-6 md:mt-0">
                                        <div className=" shadow-SliderShadow px-9 pt-6 pb-8">
                                            <p className='text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' pt-5 text-center text-base font-Poppins leading-[25.6px] font-medium'>Darrell Steward-Head</p>
                                            <p className='text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-pagination right-0 -mx-2 z-50 absolute gap-3 flex flex-col"></div>
                </Swiper>
            ) : (
                <div className=' max-w-[820px] mx-auto px-3 mt-[60px]'>
                    <div className=" shadow-SliderShadow px-6 sm:px-12 pb-8 pt-14 relative">
                        <img src={MarrieJames} alt="MarrieJames" className=' absolute max-w-[86px] top-[-15%] left-[50%] translate-x-[-50%]' />
                        <p className=' text-center font-Poppins text-base leading-[25.6px] opacity-70'>
                            Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.
                        </p>
                        <p className=' text-center pt-4 font-Poppins text-base leading-[25.6px] font-medium'>Marrie James-CEO</p>
                        <p className=' text-center font-Poppins text-base leading-[25.6px] opacity-70'>Limana Enterprises, CA</p>
                    </div>
                    <div className=' flex flex-wrap -mx-[10px] mt-5'>
                        <div className=" w-full md:w-[50%] px-[10px]">
                            <div className=" shadow-SliderShadow px-9 pt-6 pb-8">
                                <p className=' text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=' pt-5 text-center text-base font-Poppins leading-[25.6px] font-medium'>Ralph Edwards-CEO</p>
                                <p className=' text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Limana Enterprises, CA</p>
                            </div>
                        </div>
                        <div className=" w-full md:w-[50%] px-[10px] mt-6 md:mt-0">
                            <div className=" shadow-SliderShadow px-9 pt-6 pb-8">
                                <p className='text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                <p className=' pt-5 text-center text-base font-Poppins leading-[25.6px] font-medium'>Darrell Steward-Head</p>
                                <p className='text-center text-base font-Poppins leading-[25.6px] font-normal opacity-70'>Limana Enterprises, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SwipeSlide;