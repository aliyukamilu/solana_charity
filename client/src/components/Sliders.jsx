import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const sliderContents = [

  {
    title: "Slide #1",
    content: "solana.svg"
  },
  {
    title: "Slide #2",
    content: "serum.svg"
  },
  {
    title: "Slide #4",
    content: "coinmarket.svg"
  },
  {
    title: "Slide #5",
    content: "raydium.svg"
  },
  {
    title: "Slide #6",
    content: "dexlab.svg"
  }

]

function Sliders() {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <section id="Partners">
      <div className="bg-whito py-12 pt-20 md:pt-40 flex justify-center">
        <div className="w-8/12">
          <Slider {...settings}>
            {sliderContents.map((sliderContent, index) => (
              <div key={index}>
                <img src={require(`../images/${sliderContent.content}`)} alt="" className="w-24 h-20" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Sliders;
