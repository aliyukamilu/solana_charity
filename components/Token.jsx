import React from 'react';
import ReactEcharts from "echarts-for-react";

import Headerinfo from './Headersinfo'
import Image from 'next/image'

let distributions = [
  {
    title: "INVESTORS/PARTNERS 25%",
    img: "investor.png",
    info: "25,000,000 of $SOLCHARITY supply will be made available for investors and future partnerships."
  },
  {
    title: "LIQUIDITY 25%",
    img: "liquidity.png",
    info: "25,000,000 $SOLCHARITY will be used to supply liquidity into pools for $SOLCHARITY trading."
  },
  {
    title: "AIRDROP/MARKETING 20%",
    img: "airdrop.png",
    info: "20,000,000 $SOLCHARITY will be given out to the Solana community for the marketing of Solana Gap over time."
  },
  {
    title: "FIRST NETWORK ENGAGEMENT 10%",
    img: "connection.png",
    info: "10% of $SOLCHARITY token supply will be made available for early purchase at a price of $0.2."
  },
  {
    title: "TEAM 10%",
    img: "group.png",
    info: "10,000,000 of the $SOLCHARITY token will be allocated to the Solana Gap development team and Ambassadors."
  },
  {
    title: "Burn 10%",
    img: "flame.png",
    info: "10% of the total supply of 100,000,000 will be burnt over time."
  }
]


function Token() {

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '0',
      left: 'center',
      textStyle: {
        color: '#ccc'
      }
    },
    series: [
      {
        name: 'Distribution',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: 'transparent',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'bottom'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 25000000, name: 'Investors/partners' },
          { value: 25000000, name: 'Liquidity' },
          { value: 20000000, name: 'Airdrop/Marketing' },
          { value: 10000000, name: 'First Network Engagement' },
          { value: 10000000, name: 'Team' },
          { value: 10000000, name: 'Burn' }
        ]
      }
    ]
  };
  return (
    <section className="mb-20" id="Tokennomics">
      <Headerinfo sectionName="Token" sectionTitle="TOKENOMICS" />
      <h5 className="text-center mt-20 text-2xl">Distribution</h5>

      <div className="flex flex-col lg:flex-row md:p-20 py-12 px-4 items-center">
        <div className="flex flex-1 p-3">
          <ReactEcharts option={option} style={{ width: '100%', height: 600 }} />
        </div>
        <div className="flex flex-1 flex-col">
          {distributions.map((distribution, index) => (
            <div key={index} className="mb-10">
              <div className="flex flex-row items-center">
                <Image width={48} height={48} src={`/${distribution.img}`} alt="" className="w-12 mr-3" />
                <p className="font-bold">{distribution.title}</p>
              </div>
              <p className="mt-2 text-base">{distribution.info}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fundRaise text-center py-20 mt-32 bg-[#EFEBE0]">
          <p className="text-7xl font-extrabold text-black">$960,000+ </p>
          <p className="text-2xl mt-3 text-black">Fund Raised by Investors</p>
      </div>
    </section>
  );
}

export default Token;
