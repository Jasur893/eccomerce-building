import { useState } from 'react';
import ComparisionCardItem from './ComparisionCardItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

export default function ComparisionList() {
  const comparision = useSelector((state) => state.products1.comparision)
  const {catalogName} = useParams()
  const [showOne, setShowOne] = useState(true)
 
  const filterArr = comparision.filter((el) => el.productType === catalogName)

  return (
    <div className='scroll_position'>
      <p className='text-lg '><span className='font-bold'>{filterArr.length}</span> товаров</p>
      <div className='flex gap-3'>
        <div className='min-w-[130px] w-[130px]'></div>
        {comparision.filter((el) => el.productType === catalogName).map((itemEl) => (
          <ComparisionCardItem key={itemEl.id} {...itemEl} />
        ))}
      </div>
      
      <div onClick={() => setShowOne(!showOne)} className='mt-3 flex justify-between px-3 py-2 items-center cursor-pointer font-medium border mb-2'>
        <p  className='mb-0'>Основные характеристики</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {showOne && <Table striped className='max-w-min'>
        <tbody className='border'>
          {/* --- type ГРУНТОВКА --- */}
          {filterArr[0]?.Вес_кг !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Вес кг</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Вес_кг ? item.Вес_кг : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Вид_работ !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Вид работ</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Вид_работ ? item.Вид_работ :  <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Влагостойкость !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Влагостойкость</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Влагостойкость ? item.Влагостойкость : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Время_высыхания !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Время высыхания</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Время_высыхания ? item.Время_высыхания : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Материал_основания !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Материал основания</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Материал_основания ? item.Материал_основания : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Основа !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Основа</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Основа ? item.Основа : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Расход !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Расход</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Расход ? item.Расход : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Страна_происхождения !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Страна происхождения</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Страна_происхождения ? item.Страна_происхождения : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}

          {/* --- type ДРЕЛИ --- */}
          {filterArr[0]?.Мощность !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Мощность</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Мощность ? item.Мощность : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Регулировка_оборотов !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Регулировка оборотов</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Регулировка_оборотов ? item.Регулировка_оборотов : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Страна_производства !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Страна производства</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Страна_производства ? item.Страна_производства : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Частота_вращения_шпинделя !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Частота вращения шпинделя</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Частота_вращения_шпинделя ? item.Частота_вращения_шпинделя : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Тип_патрона !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Тип патрона</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Тип_патрона ? item.Тип_патрона : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Мощность !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Мощность</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Мощность ? item.Мощность : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Мах_диаметр_сверления_дерево !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Мах диаметр сверления (дерево)</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Мах_диаметр_сверления_дерево ? item.Мах_диаметр_сверления_дерево : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}

          {/* --- type КРАСТЕЛИ --- */}
          {filterArr[0]?.Вес !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Вес</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Вес ? item.Вес : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          {filterArr[0]?.Срок_хранения !== undefined ? <tr className=''>
            <td className='min-w-[130px] w-[130px]'>Срок хранения</td>
            {filterArr.map((item, idx) => (
              <td key={idx} className='min-w-[220px] w-[220px]'>
                {item.Срок_хранения ? item.Срок_хранения : <i className="fa-solid fa-minus"></i>}
              </td>
            ))}
          </tr> : null}
          
          {/* --- type МОНТАЖНЫЙ --- */}


        </tbody>
      </Table>}
    </div>
  )
}

// characteristic