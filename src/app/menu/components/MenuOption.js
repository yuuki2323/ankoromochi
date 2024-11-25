import React from "react";

const MenuOption = () => {
  return (
    <>
      <a className="pt-[84px] -mt-[84px] block" id="oprion"></a>
      <div className="w-11/12 md:w-1/3 lg:w-1/4 mx-auto md:mx-4 bg-slate-50 pb-4 mb-8 text-base">
        <div className="w-11/12 mx-auto">
          <h3 className="text-center py-1 text-lg  lg:text-xl xl:text-2xl">オプションメニュー</h3>

          <ul>
            <p>・リフレクソロジー</p>
            <p className="text-xs">台湾式の足ツボのメニュー。</p>
            <li className="flex justify-between border-b ">
              <p>30分</p>
              <p>&yen;5,000</p>
            </li>
            <li className="flex justify-between border-b mb-2">
              <p>60分</p>
              <p>&yen;10,000</p>
            </li>
            <p>・フェイシャル</p>
            <p className="text-xs">天然系保湿オイルを使用。オールハンドで表情筋からデコルテまでをほぐします。</p>
            <li className="flex justify-between border-b mb-2">
              <p>30分</p>
              <div className=" text-right">
                <p>&yen;5,000</p>
                <p>パック別途&yen;2,000</p>
              </div>
            </li>
            <p>・バウエルトリートメント</p>
            <p className="text-xs">オイルを使用し固くなった大腸、小腸、骨盤まわりを揉みほぐします。</p>
            <li className="flex justify-between border-b mb-2">
              <p>10分</p>
              <p>&yen;2,000</p>
            </li>
            <p >・クリームヘッドスパ </p>
            <p className="text-xs">お客様のお好みに合わせて5種類の中からお選び頂いたクリームを使う頭皮・髪・首までのトリートメント。</p>
            <li className="flex justify-between border-b mb-2">
              <p>30分</p>
              <p>&yen;6,000</p>
            </li>
            <p>・炭酸ヘッドスパ</p>
            <li className="flex justify-between border-b mb-2">
              <p>30分</p>
              <p>&yen;5,000</p>
            </li>
            <p>・スカルプヘッドスパ</p>
            <li className="flex justify-between border-b mb-2">
              <p>30分</p>
              <p>&yen;6,000</p>
            </li>
            <p>・ドライヘッドスパ</p>
            <li className="flex justify-between border-b mb-2">
              <p>30分</p>
              <p>&yen;5,000</p>
            </li>
            <p>・オイルプール</p>
            <p className="text-xs">オイルのプールに浸かっているような新感覚のオイルマッサージ</p>
              <p className="text-right border-b mb-2">&yen;2,000</p>
            
            <p>各延長</p>
            <li className="flex justify-between border-b">
              <p>10分</p>
              <p>&yen;2,000</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuOption;
