import React from 'react';
import { Header, Sidebar } from '../../components'
import { shortenAdd } from '../../utils/shortenAdd'



const Dashboard = () => {
  let address = '0x52EdB5dFCE4640644AD366b660ee9b78872b16c3'
  return (
    <div className="relative">
      <Header />
      <div className="flex pt-20 items-center justify-center">
        <Sidebar />

        <div className="mainContainer">
          <div className="formCont mt-10">


            <div className="flex flex-col justify-center items-center">
              <div className="w-5/6 mainCont">
                <h2 className="mb-5 text-bold text-2xl text-left heading">Dashboard</h2>
                <div className="bg-white rounded-2xl shadow-sm px-7 py-10">
                  <h5>Latest Transactions</h5>
                  <div className="flex justify-center items-center flex-col">
                    <img src="/wallet.gif" width="200" alt="wallet" />
                    <p>Connect Your Wallet to get Started</p>
                  </div>
                  {/* <div className="table-responsive overflow-x-auto">
                    <table className="transactionTable mt-5">
                      <thead className="jCUfmF">
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                        <th>Time Stamp</th>
                      </thead>
                      <tbody className="kAJryw">
                        <tr>
                          <td className="gUEunp">{shortenAdd(address)}</td>
                          <td className="gUEunp">{shortenAdd(address)}</td>
                          <td className="gUEunp">0.2 SOL</td>
                          <td className="gUEunp">23/02/2020, 6:22:24 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}

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
