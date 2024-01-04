import React from "react";
import Header from "../toppageCpmponent/Header";
import SalonFooter from "../toppageCpmponent/SalonFooter";
import Image from "next/image";
const page = () => {
  return (
    <>
      <Header />
      <div className="bg-orange-100">
        <h2 className="text-center">料金・メニュー</h2>
        <div className="w-11/12 mx-auto bg-slate-50">
          <div className="w-11/12 mx-auto">
            <h3 className="text-center">オイルトリートメント</h3>
            <h4 className="text-center">施術内容</h4>
            <Image
              src="/oil.jpg"
              alt="oil"
              width={336}
              height={200}
              className=" aspect-video w-full mx-auto "
            />
            <p>
              オリジナルブレンドの肌に残りにくい水溶性オイルを使用。お好みの香りでのオイルで筋肉の張りやむくみを和らげます。全身の血行促進やリンパの流れを良くし老廃物の排出を促すデトックスメニュー。
            </p>
            <ul>
              <li className="flex">
                <p>60分</p>
                <p>&yen;13,000/会員価格&yen;10,000</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SalonFooter />
    </>
  );
};

export default page;
