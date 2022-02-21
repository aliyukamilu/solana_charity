import React from 'react';
import { Header, Sidebar } from '../../components'


const optionns = ['BSC', 'Bitcoin', 'Ethereum', 'Solana', 'JUJU Token']



const Swap = () => {
  return (
    <div className="relative">
      <Header />
      <div className="flex pt-20 items-center justify-center">
        <Sidebar />

        <div className="mainContainer">
          <div className="formCont mt-10">

            <div className="flex flex-col justify-center items-center">
              <div className="w-5/6 mainCont">
                <h2 className="mb-5 text-bold text-2xl">Swap</h2>
                <div className="bg-white rounded-2xl shadow-sm px-7 py-10">
                  <p className="text-sm ">From</p>
                  <div className="flex flex-row mt-10 items-center">
                    <div className="flex">
                      <input type="number" className="contractInput text-4xl" placeholder='0.0' />
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
                      <input type="number" readOnly className="contractInput text-4xl" placeholder='0.0' />
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
};

export default Swap;
