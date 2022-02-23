import React from 'react';
import { Header, Sidebar } from '../../components'
// import Swap from "@project-serum/swap-ui";

const optionns = ['BSC', 'Bitcoin', 'Ethereum', 'Solana', 'JUJU Token']
import Comingsoon from './Comingsoon'


const Swapping = () => {
  return (
    <div className="relative">
      <Header />
      <div className="flex pt-20 items-center justify-center">
        <Sidebar />

        <div className="mainContainer">
          <div className="formCont mt-10">

            <div className="flex flex-col justify-center items-center">
              <div className="w-5/6 mainCont">
                <h2 className="mb-5 text-bold text-2xl heading">Swap</h2>
                <div className="bg-white rounded-2xl shadow-sm px-7 py-10">
                  <div className="flex justify-center">
                    <Comingsoon />
                  </div>
                </div>
                {/* <Swap provider={provider} tokenList={tokenList} /> */}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Swapping;
