import React from 'react'

export default function ComTableTypeSuxiyeSmesi({filterArr}) {
  return (
    <>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Вид работ</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Вид_работ ? item.Вид_работ : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Вес</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Вес ? item.Вес : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Влагостойкость</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Влагостойкость ? item.Влагостойкость : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Тип помещения</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Тип_помещения ? item.Тип_помещения : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Основа</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Основа ? item.Основа : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}