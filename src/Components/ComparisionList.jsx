import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import ComparisionCardItem from './ComparisionCardItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ComparisionList() {
  const comparision = useSelector((state) => state.products1.comparision)
  const {catalogId, catalogName} = useParams()
  console.log(catalogId, catalogName);
  const [showOne, setShowOne] = useState(true)

  return (
    <div className='scroll_position'>
      <div className='flex gap-3'>
        {comparision.filter((el) => el.productType === catalogName).map((ItemEl) => (
          <ComparisionCardItem key={ItemEl.id} {...ItemEl} />
        ))}
      </div>
      
      <div onClick={() => setShowOne(!showOne)} className='mt-3 flex justify-between px-3 cursor-pointer font-medium'>
        <p  className=''>Основные характеристики</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {showOne && <Table striped>
        <tbody className='border'>
          <tr className=''>
            <td className=''>Тип</td>
            <td>Эмаль</td>
            <td>Эмаль</td>
            <td>Эмаль</td>
            <td>Краска</td>
          </tr>
          <tr>
            <td>Наименование</td>
            <td>Эмаль</td>
            <td>Эмаль</td>
            <td>Эмаль</td>
            <td>Краска</td>
          </tr>
          <tr className=''>
            <td>Назначение</td>
            <td>для фасадов, для стен, для потолков, для кухонных/ванных комнат, для детских комнат</td>
            <td>для окон и дверей, для металлических изделий, для деревянных изделий, для цоколей, для лоджий, для ограждений</td>
            <td>для металлических изделий, для деревянных изделий, для цоколей, для лоджий, для ограждений</td>
            <td>для фасадов, для стен</td>
          </tr>
          <tr>
            <td>Тип работ</td>
            <td>внутренние, наружные</td>
            <td>внутренние, наружные</td>
            <td>внутренние</td>
            <td>наружные</td>
          </tr>
          <tr>
            <td>Основа</td>
            <td>акриловая</td>
            <td>акриловая</td>
            <td>акриловая</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Разбавитель</td>
            <td>вода</td>
            <td>вода</td>
            <td>вода</td>
            <td>вода</td>
          </tr>
          <tr>
            <td>Цвет</td>
            <td>Красный</td>
            <td>Красный</td>
            <td>Красный</td>
            <td>Красный</td>
          </tr>
          <tr>
            <td>Степень глянца</td>
            <td>матовая</td>
            <td>полуглянцевая</td>
            <td>матовая</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Вес</td>
            <td>1 кг</td>
            <td>3 кг</td>
            <td>5 кг</td>
            <td>1 кг</td>
          </tr>
          <tr>
            <td>Расход</td>
            <td>0,1 кг/м2</td>
            <td>0,4 кг/м2</td>
            <td>04 кг/м2</td>
            <td>0,1 кг/м2</td>
          </tr>
        </tbody>
      </Table>}
    </div>
  )
}