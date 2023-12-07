import React from "react";
import logo from "public/logo2.png";
import Image from "next/image";

const SalonFooter = () => {
  return (
    <div className=" bg-orange-100 w-screen  py-8 md:py-14 lg:py-20 px-12 md:px-12 lg:px-24 xl:px-28 flex justify-center">
      <div className="flex flex-col  items-center">
        <h1 className="w-16 md:w-24 ">
          <Image src={logo} alt="logo" />
        </h1>
        <p className="text-center">
          〇〇駅より徒歩1分の
          <br />
          プライベートサロン(完全個室・予約制)
        </p>
      </div>
      <div className="flex flex-col  items-center">
        <address>
          <p>
            〒651-0088
            <br />
            兵庫県神戸市中央区小野柄通3-1-19 Y's house 三宮Ⅱ 201
          </p>
          <div className="flex items-center gap-4 mt-1">
            <p className="flex items-center">
              <span className="block text-center py-1 w-16 bg-slate-300 mr-2">
                TEL
              </span>
              <a
                href="tel:090-1234-5678"
                className="block py-1 md:pointer-events-none text-blue-700 md:text-black border-b border-blue-700 md:border-none"
              >
                090-1234-5678
              </a>
            </p>
            <p className="flex  item-center">
              <span className="block text-center py-1 w-16 bg-slate-300 mr-2">
                OPEN
              </span>
              <span className="block text-center py-1 w-16  mr-2">
                10:00~20:00
              </span>
            </p>
          </div>
        </address>
      </div>
    </div>
  );
};

export default SalonFooter;
