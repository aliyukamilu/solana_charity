import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image'

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
    title: "Slide #3",
    content: "coinmarket.svg"
  },
  {
    title: "Slide #4",
    content: "raydium.svg"
  },
  {
    title: "Slide #5",
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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="Partners">
      <div className="bg-whito py-12 px-5 sm:px-20 pt-20 md:pt-20 flex justify-center">
        <div className="w-full">
          <div className="flex justify-around flex-wrap">
            {sliderContents.map((sliderContent, index) => (
              <div key={index} className="flex-initial">
                <Image width={138} height={108} src={`/${sliderContent.content}`} alt="" className="w-40 h-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sliders;
