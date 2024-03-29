"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import logo from "/public/logo2.png";

const SumahoMenu = () => {
  const [isOpen, setOpen] = useState(true);
  const handleMenu = () => {
    setOpen(!isOpen);
  };

  const navi = [
    { href: "/", nav: "トップページ" ,en:"top" },
    { href: "/menu", nav: "メニュー・料金一覧" ,en:"menu list" },
    { href: "/staff", nav: "スタッフ紹介" ,en:"staff"},
    { href: "/shop", nav: "店舗情報" ,en:"shop"},
   
 
  ];

  return (
    <>
      <nav className="md:hidden">
        <button onClick={handleMenu} className={`absolute top-4 right-12 `}>
          <FiMenu size={52} />
        </button>
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 opacity-0 transition-all duration-200 ease-linear invisible w-screen h-screen"
              : " fixed top-0 left-0 opacity-100 transition-all duration-200 ease-linear bg-white w-screen h-screen visible"
          }
        >
          <button className={`fixed top-4 right-12 `} onClick={handleMenu}>
            <RxCross2 size={52} />
          </button>

          <div className=" my-8 flex flex-col items-center">
          <h1 className="w-16 md:w-24">
            <Image src={logo} alt="logo" />
          </h1>

          <ul className="my-12 flex flex-col items-center ">
            {navi.map((navi) => {
              return (
                <li key={navi.nav} className="border-b">
                  <Link
                    href={navi.href}
                    className=" flex flex-col items-center w-screen py-4 "
                    onClick={handleMenu}
                  >
                    <p className=" font-semibold text-brown-800 text-base">
                      {navi.nav}
                    </p>
                    <p className=" font-light text-sm text-brown-500 ">
                      {navi.en}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default SumahoMenu;
