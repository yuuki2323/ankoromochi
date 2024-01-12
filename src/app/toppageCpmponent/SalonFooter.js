import React from "react";
import logo from "/public/logo2.png";
import Image from "next/image";
import Link from "next/link";
import insta from "/public/Instagram_Glyph_Gradient.png";
import line from "/public/LINE_APP_iOS.png";

const SalonFooter = () => {
  return (
    <>
      <div className=" bg-orange-100   py-6 md:py-8 lg:py-12px-12 md:px-12 lg:px-24 xl:px-28  ">
        <div className="container md:flex justify-center mx-auto">
          <div className="flex flex-col  items-center">
            <h1 className="w-16 md:w-24 ">
              <Image src={logo} alt="logo" />
            </h1>
            <p className="text-center">
              三宮駅より徒歩10分の
              <br />
              プライベートサロン(完全個室・予約制)
            </p>
          </div>
          <div className="flex flex-col mx-6 mt-4">
            <div>
              <p>
                〒651-0088
                <br/>
                兵庫県神戸市中央区小野柄通3-1-19 Y&apos;s house 三宮Ⅱ 201
              </p>
              <div className="flex  gap-4 mt-1">
                <p className="flex ">
                  <span className="block text-center py-1 w-12 bg-slate-300 mr-2">
                    TEL
                  </span>
                  <a
                    href="tel:078-894-3629"
                    className="block py-1 md:pointer-events-none text-blue-700 md:text-black border-b border-blue-700 md:border-none"
                  >
                    078-894-3629
                  </a>
                </p>
                <p className="flex  item-center">
                  <span className="block text-center py-1 w-12 bg-slate-300 mr-2">
                    OPEN
                  </span>
                  <span className="block text-center py-1 w-18  mr-2">
                    10:00-20:00
                  </span>
                </p>
              </div>
            </div>
            <div className="mdflex justify-center my-4 border-t border-black ">
              <p>
              ご予約は公式LINE、またはお電話にて承っております。<br/>施術中はお電話をお受けすることができかねますのでご了承ください。
              </p>
            </div>
            <div className="flex gap-4 ">
              <Link
                href="https://instagram.com/ancoromochi.iyashi?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener"
              >
                <Image src={insta} width={48} height={48} alt="insta" />
              </Link>
              <Link
                href="https://page.line.me/ancoromochi_iyashi"
                target="_blank"
                rel="noopener"
              >
                <Image src={line} width={48} height={48} alt="line" />
              </Link>
            </div>
          </div>
        </div>

        <footer className=" pt-4 pb-2">
          <div className="flex items-center justify-center">
            <small>Copyright © あんころもち All rights reserved.</small>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SalonFooter;
