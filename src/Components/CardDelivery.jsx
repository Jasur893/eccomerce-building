import { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function CardDelivery() {
  const [show, setShow] = useState(null)

  const handleShow = (e) =>  setShow(e.target.id);
 
  const showText = () => {
    if(show === 'Доставка курьером') {
      return (
        <div className='pr-2'>
          <p className='mb-1'>Курьером до клиента</p>
          <p className='mb-1'> — В заказе только мелкие товары — 500 ₽.;</p>
          <p className='mb-1'> — В заказе есть крупные товары — 1 500 ₽.;</p>
          <p className='mb-1'> — В заказе есть габаритный товар — 3 000 ₽;</p>
          <p className='mb-1'> — Общая стоимость товаров менее 2000 - + 100 ₽;</p>
        </div>
      )
    } else if (show === 'Самовывоз'){
      return (
        <div className='pr-2'>
          <p className='mb-1'>Доставка бесплатно до пункта выдачи</p>
          <p className='mb-1'>Ближайшая дата доставки — 10 февраля. Срок хранения заказа 14 дней</p>
        </div>
      )
    } else {
      return
    }
  }

  return (
    <div>
      <p className='w-[80%]'>Мы доставим вашу покупку в любую точку Российской Федерации. Чтобы узнать подробности доставки, выберите один из пунктов. Приведённый ниже расчёт стоимости доставки носит информационный характер. Точную информацию о стоимости товара или заказа в целом можно увидеть при оформлении заказа.</p>
      <div className=' flex justify-start flex-wrap pr-2 gap-3 sm:gap-5'>
        {
          ['Доставка курьером', 'Самовывоз'].map((el, idx) => (
            <label key={idx} htmlFor={el}>
              <input onChange={handleShow} type="radio" name="el" value={el} id={el}/> {el}
            </label>
          ))        
        }
      </div>

      <p className='mb-1 mt-3 font-bold'>Выберите населённый пункт</p>

      <div className='mb-3 pr-2 w-full sm:w-[40%]'>
        <Form.Select size="sm" aria-label="Default select example">
          {['Санкт-Петербург', 'Мурманск', 'Владивосток', 'Иркутск', 'Тверь', 'Ростов на Дону', 'Калининград'].map((el, idx) =>
            <option key={idx} value={idx}>{el}</option>
          )}
        </Form.Select>
      </div>
        
      <div>
        {showText()}
      </div>
       
    </div>
  )
}