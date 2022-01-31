import React from 'react';

import Headerinfo from './Headersinfo'

const roadmaps = [
  {
    date: "1 January 2022",
    title: "SOLONA CHARITY",
    lists: ['Solona Charity Development.', 'Airdrops.']
  },
  {
    date: "February 2022",
    title: "FIRST MAINNET SWAP",
    lists: ['10,000,000 $GAP will be available for claim.', 'More Airdrop for submitting bugs.']
  },
  {
    date: "March 2022",
    title: "COMMUNITY CAMPAIGN",
    lists: ['Ambassadors program.', '$SOLCHARITY token distribution to pre-sale investors.', 'Airdrop distributing to community members.', 'NFT to top 1000 holders.']
  },
  {
    date: "September 2022",
    title: "EXCHANGE LISTING",
    lists: ['Dexlab Listing.', 'CoinGecko Listing.', 'Serum Dex (Raydium) Listing.', 'SolApe Listing.', 'Coinmarketcap Listing.']
  },
  {
    date: "October 2022",
    title: "MAIN DEX APPLICATION",
    lists: ['Launching Bridge App.', 'Mobile App Launching.']
  }
]



export default function Roadmap() {
  return (
    <section id="Roadmap">
      <Headerinfo sectionName="Map" sectionTitle="Our roadmap" />
      <div className="flex flex-1 md:p-20 py-12 px-4 mt-20">
        <div className="timeline">
          {roadmaps.map((roadmap, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card p-12 js--fadeInLeft">

                <h2 className="font-bold -ml-5">{roadmap.title}</h2>
                <div className="date">{roadmap.date}</div>
                <ul className="list-disc">
                  {roadmap.lists.map((listing, index) => (
                    <li key={index} className="font-light">{listing}</li>
                  ))}

                </ul>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
}
