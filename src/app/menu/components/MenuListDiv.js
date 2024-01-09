import Image from 'next/image';
import React from 'react'

const MenuListDiv = (props) => {
  return (
    <div className="w-11/12 mx-auto bg-slate-50 mb-8">
    <div className="w-11/12 mx-auto">
      <h3 className="text-center">{props.title}</h3>
      <h4 className="text-center">施術内容</h4>
      <Image
        src={props.src}
        alt="oil"
        width={336}
        height={200}
        className=" w-full mx-auto "
      />
      <p>
        {props.disc}
      </p>
      <ul>
      {props.min.map((minItem, index) => (
        <li className="flex justify-between border-b" key={index}>
          <p>{minItem}</p>
          <p>{props.price[index]}</p>
        </li>
      ))}

      </ul>
    </div>
  </div>
  )
}

export default MenuListDiv;