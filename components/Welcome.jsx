import React from "react";

import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'

import Button from './Button'
import Image from 'next/image'

const Welcome = () => {

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 mt-20">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            SOLANA CHARITY <br /> <span className="text-2xl">The Future Of Bridging On Solana Ecosystem</span>
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Making Swapping and Cross-chain bridging easy and fun with a unique GUI for swift transactions.
          </p>
          <div className="flex flex-row mt-10">
            <Button title="Launch GAP DEX" customClass="mr-10 bg-primary" />
            <Button title="Join Presale 🔥" customClass="mr-10 bg-primary" />
          </div>
          <div className="flex flex-row mt-10">
            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <Image width={500} height={350} src="/solanaGap.png" alt="welcomeImage" className="w-100 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
};

const IconsClass = "text-white bg-secondary mr-10 rounded-full cursor-pointer px-2 py-3"
const SocialIcons = () => {
  return (
    <>
      <FaFacebookF fontSize={40} className={IconsClass} />
      <FaTwitter fontSize={40} className={IconsClass} />
      <FaTelegramPlane fontSize={40} className={IconsClass} />
      <FaDiscord fontSize={40} className={IconsClass} />
    </>
  )
}
export default Welcome;
