import React from 'react'

export default function ComTableTypeDreli({filterArr}) {
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
        <td className='min-w-[130px] w-[130px]'>Регулировка оборотов</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Регулировка_оборотов ? item.Регулировка_оборотов : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Страна производства</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Страна_производства ? item.Страна_производства : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Частота вращения шпинделя</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Частота_вращения_шпинделя ? item.Частота_вращения_шпинделя : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Тип патрона</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Тип_патрона ? item.Тип_патрона : <i className="fa-solid fa-minus"></i>}
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
      <tr className=''>
        <td className='min-w-[130px] w-[130px]'>Мах диаметр сверления (дерево)</td>
        {filterArr.map((item, idx) => (
          <td key={idx} className='min-w-[220px] w-[220px]'>
            {item.Мах_диаметр_сверления_дерево ? item.Мах_диаметр_сверления_дерево : <i className="fa-solid fa-minus"></i>}
          </td>
        ))}
      </tr>
    </>
  )
}
