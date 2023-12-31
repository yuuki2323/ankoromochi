import Image from 'next/image';
import React from 'react'

const MenuListDiv = (props) => {
  return (
    <div className="w-11/12 mx-auto bg-slate-50 mb-8 pb-1">
    <div className="w-11/12 mx-auto">
      <h3 className="text-center py-1 text-lg">{props.title}</h3>
      <h4 className="text-center pb-1">施術内容</h4>
      <Image
        src={props.src}
        alt="oil"
        width={336}
        height={200}
        className=" w-full mx-auto "
      />
      <p className='py-4'>
        {props.disc}
      </p>
      <ul>
      {props.min.map((minItem, index) => (
        <li className="flex justify-between border-b py-1" key={index}>
          <p>{minItem}</p>
          <p>{props.price[index]}</p>
        </li>
      ))}

      </ul>
      <button className='block ml-auto border border-slate-800 rounded-md p-1 my-4' >ご予約はこちら</button>
    </div>
  </div>
  )
}

export default MenuListDiv;