import React from 'react'

export default function ComTableTypeSlesarniy({filterArr}) {
  return (
    <>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Тип</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Тип ? item.Тип : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Размер мин</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Размер_мин ? item.Размер_мин : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}
