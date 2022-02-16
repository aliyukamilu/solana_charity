import React from 'react';
import Button from './Button'
import { shortenAdd } from '../utils/shortenAdd';

import { ReactComponent as SolanaLogo } from '../images/solanaWhite.svg';


const Header = () => {
  const [walletConnected, setwalletConnected] = React.useState(false);
  let address = '0x52EdB5dFCE4640644AD366b660ee9b78872b16c3'
  return (
    <div className="gradient-bg-welcome flex w-full px-20 h-20 shadow-xl fixed z-10">
      <div className="flex flex-row justify-between w-full items-center">
        <a href="../" className="md:flex-[0.5] justify-center items-center">
          <img src={require('../images/logo.png')} className="w-32 cursor-pointer" alt="" />
        </a>
        <div className="flex flex-1 justify-end items-center">
          <div className="mr-3">
            <SolanaLogo style={{ width: 100 }} />
          </div>
          {walletConnected ?
            <>
              <div className="flex flex-row items-center">
                <Button title={'0 SOL'} customClass="white-glassmorphism rounded-lg py-2 px-3 mr-3" />
                <Button title={shortenAdd(address)} customClass="bg-primary rounded-lg py-2 px-3" />
              </div>

            </> :
            <>
              <Button title="Connect Wallet" customClass="bg-primary" />
            </>}

        </div>
      </div>
    </div>
  )
}

export default Header;
