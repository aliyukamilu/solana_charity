import React from 'react';
import Button from './Button'
import { shortenAdd } from '../utils/shortenAdd';

import Image from 'next/image'
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const Header = ({ wallet }) => {
  const [walletConnected, setwalletConnected] = React.useState(false);
  // const [value, setValue] = useState(null);

  let address = '0x52EdB5dFCE4640644AD366b660ee9b78872b16c3'
  return (
    <div className="gradient-bg-welcome flex w-full px-1 md:px-20 h-20 shadow-xl fixed z-20">
      <div className="flex flex-row justify-between w-full items-center">
        <a href="../" className="md:flex-[0.5] justify-center items-center">
          <Image width={150} height={40} src="/logo.png" className="w-32 cursor-pointer" />
        </a>
        <div className="flex flex-1 justify-end items-center">

          {walletConnected ?
            <>
              <div className="flex flex-row items-center">
                <Button title={'0 SOL'} customClass="white-glassmorphism rounded-lg py-2 px-3 mr-3" />
                <Button title={shortenAdd(address)} customClass="bg-primary rounded-lg py-2 px-3" />
              </div>

            </> :
            <>
              <WalletMultiButton />
              {/* <Button title="Connect Wallet" customClass="bg-primary" /> */}
            </>}

        </div>
      </div>
    </div>
  )
}

export default Header;
