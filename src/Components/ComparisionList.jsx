import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import ComparisionCardItem from './ComparisionCardItem';
import comparisionCard01 from '../img/comparisionCard/comparisionCard01.png'

export default function ComparisionList() {
  const [showOne, setShowOne] = useState(true)
  const [showTwo, setShowTwo] = useState(false)

  return (
    <div className=''>
      <div className='flex gap-4 lg:justify-end'>
        <ComparisionCardItem comparisionCard01={comparisionCard01} />
        <ComparisionCardItem comparisionCard01={comparisionCard01} />
        <ComparisionCardItem comparisionCard01={comparisionCard01} />
        <ComparisionCardItem comparisionCard01={comparisionCard01} />
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
      <div onClick={() => setShowTwo(!showTwo)} className='flex justify-between px-3 cursor-pointer font-medium'>
        <p  className=''>Дополнительные характеристики</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {showTwo && <Table striped>
        <tbody className='border'>
          <tr>
            <td>Тип</td>
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
          <tr>
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