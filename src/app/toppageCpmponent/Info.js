import Link from "next/link";
import React from "react";

const Info = () => {
  const news = [
    { date: "2023/12/05", href: "#", title: "記事のタイトル入れます" },
    { date: "2023/12/05", href: "#", title: "記事のタイトル入れます" },
    { date: "2023/12/05", href: "#", title: "記事のタイトル入れます" },
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
      <div className="flex justify-center items-center my-4 md:my-6">
      <Link href="#" className="border border-black py-2 px-1 lg:py-4 lg:px-2 lg:text-xl rounded-md">お知らせ一覧</Link>
      </div>
      
    </section>
  );
};

export default Info;
