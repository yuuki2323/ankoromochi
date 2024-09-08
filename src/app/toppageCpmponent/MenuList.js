import Image from "next/image";
import Link from "next/link";
import React from "react";
const MenuList = () => {
  const menu = [
    {
      href: "/menu#oil",
      img: "/oil.jpg",
      title: "オイルトリートメント",
      p: "オリジナルブレンドの肌に残りにくい水溶性オイルを使用。お好みの香りでのオイルで筋肉の張りやむくみを和らげます。全身の血行促進やリンパの流れを良くし老廃物の排出を促すデトックスメニュー。",
    },
    {
      href: "/menu#body",
      img: "/body.jpg",
      title: "ボディトリートメント",
      p: "オイルを使用せずウェアを着用のまま揉みほぐしていくメニュー。筋肉のコリや張りを和らげ、疲労回復効果が得られます。しっかりとほぐされたい方やオイルが苦手な方におすすめのメニュー。",
    },
    {
      href: "/menu#LED",
      img: "/LED.jpg",
      title: "LED脱毛",
      p: "",
    },
    {
      href: "/menu#wax",
      img: "/wax.jpg",
      title: "ワックス脱毛",
      p: "",
    },
    {
      href: "/menu#LEDwax",
      img: "/LED.jpg",
      title: "W脱毛",
      p: "",
    },
    {
      href: "/menu#st",
      img: "/st.jpg",
      title: "ストレッチ",
      p: "オイルを使用せずウェアを着用のまま身体を伸ばしていくメニュー。普段ご自身では伸ばせない深い筋肉をセラピストが時間をかけてゆっくりと伸ばし、全身を弛めることで血行の促進を促し爽快感が得られます。",
    },
  ];

  return (
    <section className="container mx-auto my-8 md:my-14 lg:my-20 px-12 md:px-12 lg:px-24 xl:px-28">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          メニューリスト
        </h2>
        <p className="mt-2 text-xs md:text-sm lg:text-base xl:text-lg border-y border-black text-center w-28 md:w-48 lg:w-60 xl:w-72 py-1">
          menulist
        </p>
      </div>
      <ul className="flex flex-wrap justify-center items-center mt-4 ">
        {menu.map((menu) => {
          return (
            <li key={menu.title} className="w-hull md:w-1/3 mb-4">
              <Image
                src={menu.img}
                width={336}
                height={280}
                alt="photo"
                className="w-11/12 mx-auto"
              />

              <h3 className="w-11/12 mx-auto text-center text-base md:text-lg lg:text-xl xl:text-2xl py-1 ">
                {menu.title}
              </h3>

              <p className="w-11/12 mx-auto text-xs mb-2">{menu.p}</p>
              <Link href={menu.href} className="block md:hidden">
                <button className="w-11/12 block mx-auto text-sm border border-black rounded-md py-3">
                  詳細はこちら
                </button>
              </Link>
              <Link href="/menu" className="hidden md:block">
                <button className="w-11/12 block mx-auto text-sm border border-black rounded-md py-3">
                  詳細はこちら
                </button>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center items-center my-4 md:my-6">
        <Link
          href="/menu#option"
          className="border border-black py-3 px-1 lg:py-4 lg:px-2 lg:text-xl rounded-md"
        >
          オプションメニューはこちら
        </Link>
      </div>
    </section>
  );
};

export default MenuList;
