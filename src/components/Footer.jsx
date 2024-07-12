import React from 'react'
import Icons from '../common/Icons';
const Footer = () => {
  const d =  new Date();
    const Year =  d.getFullYear();
  return (
    <section className=' bg-FooterBG bg-no-repeat bg-cover bg-center md:min-h-[343px]'>
        <div className=" max-w-[1164px] px-3 md:py-[94px] py-[64px] mx-auto flex flex-col md:flex-row max-md:items-center justify-center md:justify-end">
            <div className=" flex flex-col items-center justify-end w-full">
                <h4 className=' text-base leading-[25.6px] font-normal text-white max-w-[264px] text-center font-Poppins'>(c){Year} MARC JOACHIM HUBRICH
                All Rights Reserved</h4>
            </div>
            <ul className=' flex md:flex-col gap-3 mt-4 md:mt-0'>
                <li><a className=' inline-block' href="https://www.facebook.com/" target='_blank'><Icons icon="Facebook"/></a></li>
                <li><a className=' inline-block' href="https://x.com/?lang=en" target='_blank'><Icons icon="Twitter"/></a></li>
                <li><a className=' inline-block' href="https://mail.google.com/mail/u/0/#inbox" target='_blank'><Icons icon="Gmail"/></a></li>
                <li><a className=' inline-block' href="https://www.instagram.com/" target='_blank'><Icons icon="Instagram"/></a></li>
            </ul>
        </div>

    </section>
  )
}

export default Footer