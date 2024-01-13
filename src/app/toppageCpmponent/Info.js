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

      <div className="container mx-auto ">
        {news.map((news) => {
          return (
            <dl key={news.title} className="flex  gap-8 py-2 md:py-4 lg:py-8 md:gap-12 lg:gap-20 xl:gap-28 text-sm md:text-base lg:text-xl xl:text-2xl border-b border-black">
              <dt>{news.date}</dt>
              <Link href={news.href}>
                <dd>{news.title}</dd>
              </Link>
            </dl>
          );
        })}
      </div>
      
     <h3 className="text-center text-xl pt-8">お知らせはまだございません。</h3>
    </section>
  );
};

export default Info;
