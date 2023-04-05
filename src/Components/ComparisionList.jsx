import { useState } from 'react';
import ComparisionCardItem from './ComparisionCardItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

export default function ComparisionList() {
  const comparision = useSelector((state) => state.products1.comparision)
  const {catalogId, catalogName} = useParams()
  // console.log(catalogId, catalogName);
  const [showOne, setShowOne] = useState(true)
 
  const filterArr = comparision.filter((el) => el.productType === catalogName)

  // const newArr = filterArr.map((item) => (
  //   <div key={item.id} className='border flex'>
  //     {<p>{item.Вес_кг}</p>}
  //   </div>
  // ))
  // console.log(newArr);

  return (
    <div className='scroll_position'>
      <div className='flex gap-3'>
        <div className='min-w-[130px] w-[130px]'>hello</div>
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


        </tbody>
      </Table>}
    </div>
  )
}

// characteristic