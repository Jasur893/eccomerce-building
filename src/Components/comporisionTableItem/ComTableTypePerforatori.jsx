import React from 'react'

export default function ComTableTypePerforatori({filterArr}) {
  return (
    <>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Мощность</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Мощность ? item.Мощность : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Max сила удара</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Max_сила_удара ? item.Max_сила_удара : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
       <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Страна изготовитель</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Страна_изготовитель ? item.Страна_изготовитель : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}
