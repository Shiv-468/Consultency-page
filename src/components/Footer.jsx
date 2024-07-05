import React from 'react'
import { Email, Facebook, Instagram, Twitter } from '../common/Icon'

const Footer = () => {
  return (
    <section className=' bg-FooterBG bg-no-repeat bg-cover bg-center min-h-[343px]'>
        <div className=" max-w-[1164px] px-3 pt-[94px] pb-[94px] mx-auto flex justify-end">
            <div className=" flex flex-col items-center justify-end w-full">
                <h4 className=' text-base leading-[25.6px] font-normal text-white max-w-[264px] text-center font-Poppins'>(c)2022 MARC JOACHIM HUBRICH
                All Rights Reserved</h4>
            </div>
            <ul className=' flex flex-col gap-3'>
                <li><a className=' inline-block' href="https://www.facebook.com/" target='_blank'><Facebook/></a></li>
                <li><a className=' inline-block' href="https://x.com/?lang=en" target='_blank'><Twitter/></a></li>
                <li><a className=' inline-block' href="https://mail.google.com/mail/u/0/#inbox" target='_blank'><Email/></a></li>
                <li><a className=' inline-block' href="https://www.instagram.com/" target='_blank'><Instagram/></a></li>
            </ul>
        </div>

    </section>
  )
}

export default Footer