import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'

const GridCarousel = () => {
  const image = [
    "/gallery/photo1.png",
    "/gallery/photo2.jpg",
    "/gallery/photo3.png",
    "/gallery/photo4.jpg",
    "/gallery/photo1.png",
    "/gallery/photo2.jpg",
    "/gallery/photo3.png",
    "/gallery/photo4.jpg",
    "/gallery/photo1.png",
    "/gallery/photo2.jpg",
    "/gallery/photo3.png",
    "/gallery/photo4.jpg",
    "/gallery/photo1.png",
  ];
  return (
    <div>
      <Skiper30 img={image} />
    </div>
  )
}

export default GridCarousel
