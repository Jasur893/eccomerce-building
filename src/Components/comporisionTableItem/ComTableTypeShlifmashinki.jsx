import React from 'react'

export default function ComTableTypeShlifmashinki({filterArr}) {
  return (
    <>
      <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Число оборотов</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Число_оборотов ? item.Число_оборотов : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Напряжение</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Напряжение ? item.Напряжение : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Защита</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Защита ? item.Защита : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Мощность</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Мощность ? item.Мощность : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}
