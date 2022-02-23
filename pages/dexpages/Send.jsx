import React from 'react';
import { Header, Sidebar, Loader } from '../../components'


const Send = () => {
  const [isSending, setisSending] = React.useState(false);
  const [walletConnected, setwalletConnected] = React.useState(false);

  const connectWallet = () => {

  }

  const handleSubmit = () => {
    if (!walletConnected) {
      alert('connect Wallet')
    } else {
      setisSending(true)
    }
  }

  return (
    <div className="relative">
      <Header />
      <div className="flex pt-20 items-center justify-center">
        <Sidebar />

        <div className="mainContainer">
          <div className="formCont mt-10">

            <div className="flex flex-col justify-center items-center">
              <div className="w-5/6 mainCont">
                <h2 className="mb-5 text-bold text-2xl heading">Send</h2>
                <div className="bg-white rounded-2xl shadow-sm px-7 py-10">
                  <form action="">
                    <div className="flex mb-10">
                      <input type="text" className="contractInput text-base" placeholder='Address To' />
                    </div>
                    <div className="flex">
                      <input type="number" className="contractInput text-base" placeholder='Amount (SOL)' />
                    </div>
                  </form>

                  {isSending ? (
                    <Loader />
                  ) : (
                    <button
                      type='button'
                      onClick={handleSubmit}
                      className="text-white w-6/12 py-5 mt-5 border-[1px] p-2 bg-primary rounded-lg cursor-pointer"
                    >
                      Send Now
                    </button>
                  )}

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Send;
