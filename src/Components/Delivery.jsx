import { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Delivery(props) {
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [nextDeliveryDate, setNextDeliveryDate] = useState('')
  const [frame, setFrame] = useState('')
  const [house, setHouse] = useState('')
  const [apartment, setApartment] = useState('')
  const [shippingAmount, setShippingAmount] = useState('')
  
  const showText = () => {
    if (props.show === 'Доставка курьером') {
      return (
        <div>
          <p className='font-bold mb-2'>Введите адрес доставки</p>

          <div className='grid grid-cols-2 gap-4 md:gap-14 mb-2'>
            <div className='px-3 col-span-2 md:col-span-1'>
              <label htmlFor='city' className='w-full text-xs text-gray-600'>
                Город
              </label>
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className='border-b-2 focus:outline-0 mb-2 w-[90%]'
                type='text'
                name='city'
                id='city'
              />
              <label htmlFor='street' className='w-full text-xs text-gray-600'>
                Улица
              </label>
              <input
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                className='border-b-2 focus:outline-0 mb-2 w-[90%]'
                type='text'
                name='street'
                id='street'
              />
              <label
                htmlFor='next-delivery-date'
                className='w-full text-xs text-gray-600'
              >
                Ближайшая дата доставки
              </label>
              <input
                onChange={(e) => setNextDeliveryDate(e.target.value)}
                value={nextDeliveryDate}
                className='border-b-2 focus:outline-0 mb-2 w-[90%]'
                type='text'
                name='next-delivery-date'
                id='next-delivery-date'
              />
            </div>

            <div className='px-3 col-span-2 md:col-span-1'>
              <label htmlFor='frame' className='w-full text-xs text-gray-600'>
                Корпус
              </label>
              <input
                onChange={(e) => setFrame(e.target.value)}
                value={frame}
                className='border-b-2 focus:outline-0 mb-2 w-[90%]'
                type='text'
                name='frame'
                id='frame'
              />
              <div className='flex justify-between gap-3 w-[90%]'>
                <div>
                  <label
                    htmlFor='house'
                    className='w-full text-xs text-gray-600'
                  >
                    Дом
                  </label>
                  <input
                    onChange={(e) => setHouse(e.target.value)}
                    value={house}
                    className='border-b-2 focus:outline-0 mb-2 w-[100%]'
                    type='text'
                    name='house'
                    id='house'
                  />
                </div>
                <div>
                  <label
                    htmlFor='apartment'
                    className='w-full text-xs text-gray-600'
                  >
                    Квартира
                  </label>
                  <input
                    onChange={(e) => setApartment(e.target.value)}
                    value={apartment}
                    className='border-b-2 focus:outline-0 mb-2 w-[100%]'
                    type='text'
                    name='apartment'
                    id='apartment'
                  />
                </div>
              </div>
              <label
                htmlFor='shipping-amount'
                className='w-full text-xs text-gray-600'
              >
                Сумма доставки
              </label>
              <input
                onChange={(e) => setShippingAmount(e.target.value)}
                value={shippingAmount}
                className='border-b-2 focus:outline-0 mb-2 w-[90%]'
                type='text'
                name='shipping-amount'
                id='shipping-amount'
              />
            </div>
          </div>
        </div>
      )
    } else if (props.show === 'Самовывоз') {
      return (
        <div>
          <p className='font-bold mb-2'>Выберите пункт доставки</p>

          <div className='mb-3 pr-2 w-full sm:w-[45%]'>
            <Form.Select size='sm' aria-label='Default select example'>
              {[
                'Санкт-Петербург',
                'Мурманск',
                'Владивосток',
                'Иркутск',
                'Тверь',
                'Ростов на Дону',
                'Калининград',
              ].map((el, idx) => (
                <option key={idx} value={idx}>
                  {el}
                </option>
              ))}
            </Form.Select>
            <p className='mt-2'>Доставка бесплатно до пункта выдачи</p>
            <p>Дата доставки в пункт выдачи ориентировочно — 10 февраля.</p>
            <p>Срок хранения заказа 14 дней</p>
          </div>
        </div>
      ) 
    }
  }

  return (
    <div>
      <p>Выберите подходящий вам вариант доставки:</p>

      <div className=' flex justify-start flex-wrap pr-2 gap-3 sm:gap-5 mb-2'>
        {['Доставка курьером', 'Самовывоз'].map((el, idx) => (
          <label key={idx} htmlFor={el}>
            <input
              onChange={props.handleShow}
              type='radio'
              name='el'
              value={el}
              id={el}
            />{' '}
            {el}
          </label>
        ))}
      </div>

      <div>{showText()}</div>
    </div>
  )
}
