import ShimmerText from '@/components/kokonutui/shimmer-text';
import { Carousel_003 } from '@/components/ui/skiper-ui/skiper49';
import React from 'react'

const FavSongs = () => {
  const images = [
    {
      src: "/songs/tera-hua.jpg",
      alt: "Tera Hua",
    },
    {
      src: "/songs/channa-mereya.jpg",
      alt: "Channa Mereya",
    },
    {
      src: "/songs/chogada.jpg",
      alt: "Chogada",
    },
    {
      src: "/songs/shinunoga-ewa.png",
      alt: "Shinunoga E-wa - Fujii Kaze",
    },
    {
      src: "/songs/phir-kabhi.jpg",
      alt: "Phir Kabhi - Arijit Singh",
    },
  ];
  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}
      className='   flex justify-center flex-col pt-10  bg-transparent w-full'>
      <ShimmerText className=' p-3 text-6xl' text={'Current Playlist'} />
      <Carousel_003
        images={images}
        showPagination={true}
        showNavigation={true}
        loop={true}
        autoplay={true}
        spaceBetween={0}
      />

    </div>
  )
}

export default FavSongs
