"use client";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
const PcPhoto = () => {
  return (
    <>
      <Splide options={ {autoplay:true, interval:4000,type:"loop",speed:1200,arrows:false,pagination:false} } aria-label="main-photo">
        <SplideSlide>
          <Image
            src="/topphoto.jpg"
            alt="topimage"
            width={1920}
            height={1280}
            className=' w-screen h-auto aspect-video hidden md:block'
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/yoko1.jpg"
            alt="topimage"
            width={1920}
            height={1280}
            className=' w-screen h-auto aspect-video hidden md:block'
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/yoko2.jpg"
            alt="topimage"
            width={1920}
            height={1280}
            className=' w-screen h-auto aspect-video hidden md:block'
          />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default PcPhoto;
