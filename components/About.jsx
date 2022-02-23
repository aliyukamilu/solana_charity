import React, { Component } from 'react';
import { TiTick } from 'react-icons/ti'

import Headerinfo from './Headersinfo'

export class About extends Component {
  render() {
    return (
      <section id="About">
        <Headerinfo sectionName="About" sectionTitle="About Angel" />
        <div className="flex flex-col justify-between lg:flex-row md:p-20 py-12 px-4">
          <div className="flex flex-1 flex-col px-5">
            <p className="mb-5" style={{ lineHeight: 2 }}>
              The Angel team believe that digital assets will drive the global financial
              system in the near future as <b>NFTs</b> and the <b>multiverse</b> has been the interest of users today
              and also changing the global market as we know it. Angel's solution is built on top of the strongest 
              technological foundation in the industry, allowing it to provide users
              with an integrated solution for digital assets that mitigates risk and optimizes capital efficiency.
            </p>
            {['Scalabilty', 'Secured', 'Capital efficiency', 'Composability'].map((feauture, index) => (
              <div key={index} className="mb-3">
                <p className="w-100 flex flex-row">
                  <TiTick fontSize={24} className="text-[#2CB7BF]" /> <span>{feauture}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-1">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1jzROE6EhxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
