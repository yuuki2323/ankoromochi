
import React from 'react'

const Option = () => {
  return (
    <div className="w-11/12 mx-auto bg-slate-50 mb-8">
    <div className="w-11/12 mx-auto">
      <h3 className="text-center">オプションメニュー</h3>


      <ul>
        <p>クリームヘッドスパ </p>
        <li className="flex justify-between border-b" >
          <p>30分</p>
          <p>&yen;6000</p>
        </li>
        <li className="flex justify-between border-b" >
          <div>
          <p>30分</p>
          </div>

          <p>&yen;6000</p>
        </li>

      </ul>
    </div>
  </div>
  )
}

export default Option;