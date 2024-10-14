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
            title="LED脱毛"
            titleId="LED"
            src="/LED.jpg"
            disc=""
            min={[
              "全身脱毛＋ヒゲorVIO",
              "全身脱毛＋ヒゲ＋VIO",
              "ヒゲ",
              "VIO",
              "足＋足の甲＋足指",
              "腕＋手の甲＋手指",
              "胸元全体",
              "お腹",
              "背中＋腰",
              "お尻（Oライン以外）",
              "脇",
              "乳輪周り",
              "おへそ周り（ギャランドゥ）",
              "鼻毛",
            ]}
            price={[
              "¥35,000/会員価格¥32,000",
              "¥42,000/会員価格¥38,000",
              "¥15,000/会員価格¥13,000",
              "¥20,000/会員価格¥18,000",
              "¥16,000",
              "¥12,000",
              "¥7,000",
              "¥6,000",
              "¥12,000",
              "¥6,000",
              "¥3,000",
              "¥3,000",
              "¥4,000",
              "¥2,000",
            ]}
          />
          <MenuListDiv
            title="ワックス脱毛"
            titleId="wax"
            src="/waxm.JPG"
            disc=""
            min={[
              "VIO",
              "胸元",
              "おへそ周り（ギャランドゥ）",
              "乳輪周り",
              "鼻毛",
            ]}
            price={["¥15,000", "¥7,000〜", "¥4,000〜", "¥3,000", "¥2,000"]}
          />
          <MenuListDiv
            title="W脱毛（LED＋ワックス）"
            titleId="LEDwax"
            src="/wax.jpg"
            disc=""
            min={["W脱毛", "W脱毛＋泡パック"]}
            price={["¥35,000/会員価格¥26,000", "¥38,000/会員価格¥29,000"]}
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

          <MenuOption />
        </div>
      </div>

      <SalonFooter />
    </>
  );
};

export default page;
