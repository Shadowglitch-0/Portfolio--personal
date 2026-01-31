"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Carousel_002 } from '@/components/ui/skiper-ui/skiper48';
import React, { useState } from 'react'


const SuffelCard = () => {
  const [cIn, setcIn] = useState(0);
  const images = [
    {
      src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
      alt: "FAV FOOD",
    },
    {
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400",
      alt: "FAV PLACE",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      alt: "FAV HOBBY",
    },
    {
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
      alt: "FAV MUSIC",
    },
    {
      src: "https://images.unsplash.com/photo-1461896836934- voices-b9ba1e?w=400",
      alt: "FAV SPORT",
    },
    // Update these with your actual favorites!
  ];
  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
      }}
      className=' w-full flex  pt-10  ' >
      <div className=' w-full grid grid-cols-3 ' >
        <ShimmerText className=' text-7xl' text={images[cIn].alt.split(" ")[0]} />
        <Carousel_002
          className=' '
          cIndex={(i) => { setcIn(i) }}
          images={images}
          showPagination={true}
          showNavigation={true}
          loop={true}
          //autoplay={true}
          spaceBetween={40}
        />

        <ShimmerText className=' text-amber-300 text-7xl' text={images[cIn].alt.split(" ")[1]} />
      </div>


    </div>
  )
}

export default SuffelCard
