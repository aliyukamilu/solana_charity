import React from 'react';
import { Navbar, Welcome, Sliders, About, Token, Roadmap, Footer } from "../components";

function Home() {
  return (
    <>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <About />
      <Token />
      <Sliders />
      <Roadmap />
      <Footer />
    </>
  )
}

export default Home;
