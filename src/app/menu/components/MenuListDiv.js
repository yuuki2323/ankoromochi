import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuListDiv = (props) => {
  return (
    <>
    <a className="pt-[84px] -mt-[84px] block" id={props.titleId}></a>
      <div className="w-11/12 md:w-1/3 lg:w-1/4 mx-auto md:mx-4 bg-slate-50 pb-4 mb-8 ">
        
        <div className="w-11/12 mx-auto">
          <h3 className="text-center py-1 text-lg  lg:text-xl xl:text-2xl">{props.title}</h3>
          <h4 className="text-center pb-1">施術内容</h4>
          <Image
            src={props.src}
            alt="oil"
            width={336}
            height={200}
            className=" w-full mx-auto "
          />
          <p className="py-4">{props.disc}</p>
          <ul>
            {props.min.map((minItem, index) => (
              <li className="flex justify-between border-b py-1 text-sm" key={index}>
                <p>{minItem}</p>
                <p>{props.price[index]}</p>
              </li>
            ))}
          </ul>
          <button className="block ml-auto border border-slate-800 rounded-md p-1 my-4">
            
            <Link
              href="https://page.line.me/ancoromochi_iyashi"
              target="_blank"
              rel="noopener"
              className=""
            >
              ご予約はこちら
            </Link>
          </button>
        </div>
      </div>
    </>
    
  );
};

export default MenuListDiv;
