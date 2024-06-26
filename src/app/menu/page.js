import React from "react";
import Header from "../toppageCpmponent/Header";
import SalonFooter from "../toppageCpmponent/SalonFooter";
import MenuListDiv from "./components/MenuListDiv";
import MenuOption from "./components/MenuOption";

const page = () => {
  return (
    <>
      <Header />
      <div className="bg-orange-100 border-b border-brown-900">
        <h2 className="text-center  py-2 text-3xl lg:text-4xl xl:text-4xl">
          - 料金・メニュー -
        </h2>
        <div className="md:flex flex-wrap justify-center">
          <MenuListDiv
            title="オイルトリートメント"
            titleId="oil"
            src="/oil.jpg"
            disc="オリジナルブレンドの肌に残りにくい水溶性オイルを使用。お好みの香りでのオイルで筋肉の張りやむくみを和らげます。全身の血行促進やリンパの流れを良くし老廃物の排出を促すデトックスメニュー。"
            min={["60分", "90分", "120分"]}
            price={[
              "¥13,000/会員価格¥10,000",
              "¥18,000/会員価格¥15,000",
              "¥21,000/会員価格¥18,000",
            ]}
          />
          <MenuListDiv
            title="ボディトリートメント"
            titleId="body"
            src="/body.jpg"
            disc="オイルを使用せずウェアを着用のまま揉みほぐしていくメニュー。筋肉のコリや張りを和らげ、疲労回復効果が得られます。しっかりとほぐされたい方やオイルが苦手な方におすすめのメニュー。"
            min={["30分", "60分", "90分", "120分"]}
            price={[
              "¥8,000/会員価格¥5,000",
              "¥12,000/会員価格¥9,000",
              "¥16,000/会員価格¥13,000",
              "¥20,000/会員価格¥17,000",
            ]}
          />
          <MenuListDiv
            title="ストレッチ"
            titleId="st"
            src="/st.jpg"
            disc="オイルを使用せずウェアを着用のまま身体を伸ばしていくメニュー。普段ご自身では伸ばせない深い筋肉をセラピストが時間をかけてゆっくりと伸ばし、全身を弛めることで血行の促進を促し爽快感が得られます。"
            min={["30分", "60分", "90分", "120分"]}
            price={[
              "¥8,000/会員価格¥5,000",
              "¥12,000/会員価格¥9,000",
              "¥16,000/会員価格¥13,000",
              "¥20,000/会員価格¥17,000",
            ]}
          />
          <MenuListDiv
            title="ドライセット(ストレッチ & ボディ)"
            src="/body.jpg"
            disc="ストレッチと揉みほぐしの組み合わせ。ドライメニュー1番人気！"
            min={["60分", "90分", "120分"]}
            price={[
              "¥10,000/会員価格¥9,000",
              "¥14,000/会員価格¥13,000",
              "¥18,000/会員価格¥17,000",
            ]}
          />
          <MenuListDiv
            title="オーダーメイドコース"
            src="/oil.jpg"
            disc="貴方だけの特別メニュー。選ぶのはお時間のみ、お好きなメニューの組み合わせ。"
            min={[ "180分", "210分", "240分", "270分", "300分"]}
            price={["¥27,000", "¥32,000", "¥36,000", "¥41,000", "¥45,000"]}
          />
          <MenuOption />
        </div>
      </div>

      <SalonFooter />
    </>
  );
};

export default page;
