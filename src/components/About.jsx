import React, { Component } from 'react';
import { TiTick } from 'react-icons/ti'

import Headerinfo from './Headersinfo'

export class About extends Component {
    render() {
        return (
            <section id="About">
                <Headerinfo sectionName="About" sectionTitle="What's Solana charity" />
                <div className="flex flex-col justify-between lg:flex-row md:p-20 py-12 px-4">
                    <div className="flex flex-1 flex-col px-5">
                        <p className="mb-5" style={{ lineHeight: 2 }}>Solana Charity is a decentralised  exchange platform created by the Solana Charity Development Team that looks to provide efficient and easy swap on the solana ecosystem. Solana Gap is also a Bridging platform which aims at making bridging to other blockchains easy and fast on Solana Ecosystem.</p>
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
