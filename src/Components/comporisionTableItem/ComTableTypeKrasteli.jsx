import React from 'react'

export default function ComTableTypeKrasteli({filterArr}) {
  return (
    <>
      <tr className=''>
      <td className='min-w-[130px] w-[130px]'>Вес</td>
      {filterArr.map((item, idx) => (
        <td key={idx} className='min-w-[220px] w-[220px]'>
          {item.Вес ? item.Вес : <i className="fa-solid fa-minus"></i>}
        </td>
      ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Срок хранения</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Срок_хранения ? item.Срок_хранения : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Расход</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Расход ? item.Расход : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Время высыхания</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Время_высыхания ? item.Время_высыхания : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}

