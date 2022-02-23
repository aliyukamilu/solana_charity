import React from 'react';
import { Header, Sidebar, Button } from '../../components'
import { shortenAdd } from '../../utils/shortenAdd'



const Dashboard = () => {
  let address = '0x52EdB5dFCE4640644AD366b660ee9b78872b16c3'
  return (
    <div className="relative">
      <Header />
      <div className="flex pt-20 items-center justify-center">
        <Sidebar />

        <div className="mainContainer">
          <div className="formCont mt-10 mb-20">

            <div className="flex flex-col justify-center items-center">
              <div className="w-5/6 mainCont">
                <h2 className="mb-5 text-bold text-2xl heading">Airdrop</h2>
                <div className="bg-white rounded-2xl shadow-sm px-7 py-10">
                  <h2 className="text-lg">Solana Angel Airdrop #1</h2>
                  <p className="text-[#F3315E]">Ongoing</p>
                  <p className="text-lg mt-3">1,000,000,000 Solana Angels Tokens to be distributed.</p>

                  <div className="flex">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOjAB17nUapWZwu3_H1U0EXEtM6F7aGnUJxdrkE4iNTDqNLg/viewform?usp=sf_link" target="_blank">
                      <Button title="Claim Airdrop 🔥" customClass="bg-primary mt-10" />
                    </a>
                    <a href="https://solscan.io/token/5C9gnZEjaDVpaQjJcRSf54pJv3g1JVACo32jBRvNxpm4" target="_blank">
                      <Button title="View on Solscan" customClass="bg-primary ml-5 mt-10" />
                    </a>
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



export default Dashboard;
