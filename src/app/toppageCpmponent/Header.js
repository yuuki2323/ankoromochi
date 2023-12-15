import Image from "next/image";
import React from "react";
import logo from "../../public/logo2.png";
import Link from "next/link";

import SumahoMenu from "./topUI/SumahoMenu";
import { FiDivideCircle } from "react-icons/fi";

const Header = () => {
  const navi = [
    { href: "#", nav: "メニューリスト" ,en:"menu list" },
    { href: "#", nav: "料金一覧" ,en:"price list"},
    { href: "#", nav: "店舗情報" ,en:"shop"},
    { href: "#", nav: "スタッフ紹介" ,en:"staff"},
    { href: "#", nav: "はじめての方へ" ,en:"beginner"},
  ];

  return (
    <>
    <header className=" sticky top-0 bg-white">
      <div className=" container py-2">
      <div className="flex justify-between items-center mx-12 md:mx-12 lg:mx-24 xl:mx-28 gap-4">
        <h1 className="w-16 md:w-24 ">
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
