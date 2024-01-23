"use client";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
const sumahoPhoto = () => {
  return (
    <>
      <Splide options={ {autoplay:true, interval:4000,type:"loop",speed:1200} } aria-label="main-photo">
        <SplideSlide>
          <Image
            src="/tate0.jpg"
            alt="topimage"
            width={1920}
            height={1280}
            className=" w-screen h-auto md:hidden"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/tate1.jpg"
            alt="topimage"
            width={1920}
            height={1280}
            className=" w-screen h-auto md:hidden"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/tate2.jpg"
            alt="topimage"
            width={1920}
            height={1280}
            className=" w-screen h-auto md:hidden"
          />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default sumahoPhoto;
