import React from 'react';
import { Button, Sidebar } from '../components'
import { shortenAdd } from "../utils/shortenAdd";

import './Contract.css'
import { ReactComponent as SolanaLogo } from '../images/solanaWhite.svg';

const optionns = ['BSC', 'Bitcoin', 'Ethereum', 'Solana', 'JUJU Token']

function Contract() {

  return (
    <div className="relative">
      <Header />
      <div className="flex pt-20 items-center justify-center">
        <Sidebar />

        <div className="mainContainer">
          <div className="formCont mt-10">

            <div className="flex flex-col justify-center items-center">
              <div className="w-5/6">
                <h2 className="mb-5 text-bold text-2xl">Swap</h2>
                <div className="bg-white rounded-2xl shadow-sm px-7 py-10">
                  <p className="text-sm ">From</p>
                  <div className="flex flex-row mt-10 items-center">
                    <div className="flex">
                      <input type="number" className="contractInput" placeholder='0.0' />
                    </div>
                    <div className="flex">
                      <select name="" id="" className="selecToken">
                        <option>Select Token</option>
                        {optionns.forEach((option, index) => (
                          <option value={`${option}`} key={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex">
                      <select name="" id="" className="selecToken hideArrow">
                        <option>SOLANA</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl mt-10 shadow-sm px-7 py-10">
                  <p className="text-sm ">To</p>
                  <div className="flex flex-row mt-10 items-center">
                    <div className="flex">
                      <input type="number" readOnly className="contractInput" placeholder='0.0' />
                    </div>
                    <div className="flex">
                      <select name="" id="" className="selecToken">
                        <option>Select Token</option>
                        {optionns.forEach((option, index) => (
                          <option value={`${option}`} key={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex">
                      <select name="" id="" className="selecToken hideArrow">
                        <option>SOLANA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

const Header = () => {
  const [walletConnected, setwalletConnected] = React.useState(false);
  let address = '0x52EdB5dFCE4640644AD366b660ee9b78872b16c3'
  return (
    <div className="gradient-bg-welcome flex w-full px-20 h-20 shadow-xl fixed z-10">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="md:flex-[0.5] justify-center items-center">
          <img src={require('../images/logo.png')} className="w-32 cursor-pointer" alt="" />
        </div>
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

export default Contract;
