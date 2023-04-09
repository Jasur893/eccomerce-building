import React from 'react'

export default function ComTableTypeObuv({filterArr}) {
  return (
    <>
      <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Материал</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Материал ? item.Материал : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Размеры</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Размеры ? item.Размеры : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Цвет</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Цвет ? item.Цвет : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}
