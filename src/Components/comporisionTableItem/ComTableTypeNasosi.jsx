import React from 'react'

export default function ComTableTypeNasosi({filterArr}) {
  return (
    <>
      <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Размеры (мм)</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Размеры_мм ? item.Размеры_мм : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Напряжение (В)</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Напряжение_В ? item.Напряжение_В : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Макс_мощность двигателя (В0)</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Макс_мощность_двигателя_Вт ? item.Макс_мощность_двигателя_Вт : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Давление</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Давление ? item.Давление : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Аккумуляторная платформа</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Аккумуляторная_платформа ? item.Аккумуляторная_платформа : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}
