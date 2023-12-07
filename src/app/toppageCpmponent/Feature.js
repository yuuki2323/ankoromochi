import Image from "next/image";
import React from "react";

const Feature = () => {
  const dammy =
    "https://placehold.jp/24px/f09b4c/ffffff/1980x1078.png?text=%E3%82%B5%E3%83%AD%E3%83%B3%E7%94%BB%E5%83%8F";

  return (
    <section className="">
      <div className=" w-screen h-auto relative">
        <Image
          src={dammy}
          alt="topimage"
          width={1920}
          height={1280}
          className=" w-screen relative"
        />
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2>男性様もご利用可能な、完全個室のプライベートサロン</h2>
        </div>
      </div>
    </section>
  );
};

export default Feature;
