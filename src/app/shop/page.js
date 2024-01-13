import React from "react";
import Header from "../toppageCpmponent/Header";
import SalonFooter from "../toppageCpmponent/SalonFooter";
import MyGoogleMap from "./components/MyGoogleMap";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />
      <div className=" bg-orange-100 pb-6 border-b border-brown-900 ">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl py-2">- 店舗情報 -</h2>
          <div className=" mx-12 md:mx-12 lg:mx-24 xl:mx-28 h-50 ">
            <div className="bg-white p-4">
              <MyGoogleMap />
              <div className="text-right">
                <Link
                  href="https://maps.app.goo.gl/6uV74YH2b1dUXGLU7"
                  target="_blank"
                  rel="noopener"
                  className="  text-blue-700 mx-right border-b border-blue-700"
                >
                  経路はこちら
                </Link>
              </div>
              <table className="table-auto border-collapse text-lg lg:text-xl">
                <tbody className="">
                  <tr>
                    <th className="w-[30%] border-b border-r p-4" >店舗名</th>
                    <td className="border-b border-l p-4">癒し処 あんころもち</td>
                  </tr>
                  <tr>
                    <th className="w-[30%] border-b border-r p-4" >住所</th>
                    <td className="border-b border-l p-4">兵庫県神戸市中央区小野柄通３丁目１−１９ Y's house 三宮Ⅱ 201</td>
                  </tr>
                  <tr >
                    <th className="w-[30%] border-b border-r p-4" >最寄り駅</th>
                    <td className="border-b border-l p-4">JR 三ノ宮駅</td>
                  </tr>
                  <tr>
                    <th className="w-[30%] border-r p-4" >営業時間</th>
                    <td className=" border-l p-4">10:00-20:00</td>
                  </tr>
 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <SalonFooter />
    </>
  );
};

export default page;
