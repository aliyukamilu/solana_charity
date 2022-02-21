import React from "react";
import {Link} from "react-router-dom"
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'

import Button from './Button'

const Welcome = () => {

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 mt-20">
        <div className="flex flex-1 items-center text-center flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient">
            SOLANA ANGEL <br /> <span className="text-2xl">A Community built on Trust</span>
          </h1>
          <p className="text-left mt-5 text-white text-center font-light md:w-9/12 w-11/12 text-base">
          Angel enables users to navigate the complex landscape of digital assets with a connected, compliant, and secure suite of solutions across all platform without fear.          </p>
          <div className="flex flex-row mt-10">
            <Link to="Dashboard">
            <Button title="ANGEL DEX" customClass="mr-10 bg-primary" />
            </Link>
            <Button title="PRESALE 🔥" customClass="mr-10 bg-primary" />
          </div>
          <div className="flex flex-row mt-10 ml-6">
            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <img src={require('../images/solanaGap.png')} alt="welcomeImage" className="w-100 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
};

const IconsClass = "text-white bg-primary mr-14 rounded-full cursor-pointer px-2 py-3"
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
