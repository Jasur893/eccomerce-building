import React from 'react'

export default function ComTableTypeMontajniy({filterArr}) {
  return (
    <>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Вид</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Вид ? item.Вид : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}
