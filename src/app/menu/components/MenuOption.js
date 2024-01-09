import React from "react";

const MenuOption = () => {
  return (
    <div className="w-11/12 mx-auto bg-slate-50 mb-8">
      <div className="w-11/12 mx-auto">
        <h3 className="text-center">オプションメニュー</h3>

        <ul>
          <p>クリームヘッドスパ </p>
          <li className="flex justify-between border-b">
            <p>30分</p>
            <p>&yen;6000</p>
          </li>
          <p>リフレクソロジー</p>
          <li className="flex justify-between border-b">
            <p>30分</p>
            <p>&yen;6000</p>
          </li>
          <li className="flex justify-between border-b">
            <p>60分</p>
            <p>&yen;10,000</p>
          </li>
          <p>フェイシャル</p>
          <li className="flex justify-between border-b">
            <p>30分</p>
            <div className=" text-right">
              <p>&yen;5,000</p>
              <p>パック別途&yen;2,000</p>
            </div>
          </li>
          <p>ドライヘッドスパ</p>
          <li className="flex justify-between border-b">
            <p>10分</p>
            <p>&yen;2,000</p>
          </li>
          <p>パウエルトリートメント</p>
          <li className="flex justify-between border-b">
            <p>10分</p>
            <p>&yen;2,000</p>
          </li>
          <p>ハンドトリートメント</p>
          <li className="flex justify-between border-b">
            <p>10分</p>
            <p>&yen;2,000</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuOption;
