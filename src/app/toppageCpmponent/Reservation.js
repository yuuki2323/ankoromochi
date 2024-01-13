import Link from "next/link";
import React from "react";

const Reservation = () => {
  return (
    <div className="w-screen  py-8 md:py-14 lg:py-20 px-12 md:px-12 lg:px-24 xl:px-28 border-y border-x-zinc-700">
      
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            ご予約について
          </h2>
          <p className="mt-2 text-xs md:text-sm lg:text-base xl:text-lg border-y border-black text-center w-28 md:w-48 lg:w-60 xl:w-72 py-1">
            reservation
          </p>
        </div>
        <p className="mt-6 text-center">
          公式LINEより承っております。
          <br />
          お気軽にお問い合わせください。
        </p>
   
        <div className="flex justify-center items-center my-4 md:my-6">
        <Link
          href="https://page.line.me/ancoromochi_iyashi"
          target="_blank"
          rel="noopener"
          className="border border-black py-3 px-2 lg:py-4 lg:px-3 lg:text-xl rounded-md"
        >
          公式LINEはこちら
        </Link>
      </div>

    </div>
  );
};

export default Reservation;
