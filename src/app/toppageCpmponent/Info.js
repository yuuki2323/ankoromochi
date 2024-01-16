import Link from "next/link";
import React from "react";

const Info = () => {
  const news = [
    

  ];
  return (
    <section className="container mx-auto my-8 md:my-14 lg:my-20 px-12 md:px-12 lg:px-24 xl:px-28">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          お知らせ
        </h2>
        <p className="mt-2 text-xs md:text-sm lg:text-base xl:text-lg border-y border-black text-center w-28 md:w-48 lg:w-60 xl:w-72 py-1">
          infomation
        </p>
      </div>
      <p className="pt-3 md:pt-4 lg:pt-5 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
          お知らせはInstagramをご覧ください。
        </p>
      <div className="flex justify-center items-center my-4 md:my-6">
        <Link
          href="https://instagram.com/ancoromochi.iyashi?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener"
          className="border border-black py-3 px-2 lg:py-4 lg:px-3 lg:text-xl rounded-md"
        >
          公式Instagramはこちら
        </Link>
      </div>

    </section>
  );
};

export default Info;
