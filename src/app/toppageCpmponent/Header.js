import Image from "next/image";
import React from "react";
import logo from "/public/logo2.png";
import Link from "next/link";

import SumahoMenu from "./topUI/SumahoMenu";


const Header = () => {
  const navi = [
    { href: "/", nav: "トップページ" ,en:"top" },
    { href: "/menu", nav: "メニュー・料金一覧" ,en:"menu list" },
    { href: "/shop", nav: "店舗情報" ,en:"shop"},
    { href: "/staff", nav: "スタッフ紹介" ,en:"staff"},
  ];

  return (
    <>
    <header className=" sticky top-0 bg-white border-b border-x-neutral-500">
      <div className=" container py-2 mx-auto">
      <div className="flex justify-between items-center mx-12 md:mx-12 lg:mx-24 xl:mx-28 gap-4">
        <h1 className="w-14 md:w-18 lg:w-20">
          <Image src={logo} alt="logo" />
        </h1>

        {/* パソコンメニュー */}
        <nav className="hidden md:block">
          <ul className=" md:flex md:justify-between md:items-center md:gap-8 lg:gap-12">
            {navi.map((navi) => {
              return (
                <li key={navi.nav}>
                  <Link href={navi.href} className=" py-4  flex flex-col items-center">
                    <p className=" font-semibold text-brown-800 text-sm lg:text-base xl:text-lg">{navi.nav}</p>
                    <p className=" font-light text-sm text-brown-500">{navi.en}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* スマホメニュー */}
        <SumahoMenu/>
      
      </div>
      </div>
      
      
    </header>

    </>
    
  );
};

export default Header;
