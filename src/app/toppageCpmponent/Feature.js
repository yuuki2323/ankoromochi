import Image from "next/image";
import React from "react";
import src from "/public/feature.png";
import sumahosrc from "/public/disSumaho.jpg"
const Feature = () => {
  return (
    <section className="">
      <div className=" w-screen h-auto relative -z-10 ">
        <Image
          src={src}
          alt="topimage"
          width={1920}
          height={1280}
          className=" w-screen relative aspect-video object-cover hidden md:block"
        />
        <Image
          src={sumahosrc}
          alt="topimage"
          width={1920}
          height={1280}
          className=" w-screen relative object-cover  md:hidden"
        />
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 ">
          <h2 className=" text-center text-white  text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            男性様もご利用可能な完全個室の<br/>プライベートサロン
          </h2>
          <p className="text-white text-sm md:text-base lg:text-lg xl:text-2xl tracking-wide leading-relaxed">
            癒し処あんころもちでは決まったお施術はありません。
            <br /><br/>
            お客様おひとりおひとりに合わせた完全オーダーメイドでの極上オイルマッサージをご提供致します。<br/><br/>あなただけの癒しの空間で心身ともにリフレッシュできるひとときをお過ごし頂けます。その他ヘッドスパやオイルを使わないボディトリートメント等、様々なメニューもございます。
            <br /><br/>
            ワンフロア一戸のマンションとなっており、他のお客様とお会いすることもございません。
            <br />
            日々頑張るあなたへのご褒美へ、あなただけの特別な癒しのお時間をお過ごしくださいませ。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
