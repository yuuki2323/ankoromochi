import React from "react";

const Reservation = () => {
  return (
    
      <div className="bg-amber-200 w-screen  py-8 md:py-14 lg:py-20 px-12 md:px-12 lg:px-24 xl:px-28">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            ご予約について
          </h2>
          <p className="mt-2 text-xs md:text-sm lg:text-base xl:text-lg border-y border-black text-center w-28 md:w-48 lg:w-60 xl:w-72 py-1">
            reservation
          </p>
        </div>
        <p className="mt-6">当サロンは、アロマトリートメントを中心とした完全予約制のプライベートサロンです。ご予約については、SNS、メール、お問い合わせフォームから受け付けております。お問い合わせ、ご予約いただいた際には、必ずお返事をさせていただきます。ご不明な点などがございましたら、お気軽にご相談ください。</p>
        <div>
          <div className="mt-6">
            <h3 className="border-l-4 border-black pl-2">お問い合わせフォーム</h3>
           
          </div>

        </div>
      </div>

  );
};

export default Reservation;
