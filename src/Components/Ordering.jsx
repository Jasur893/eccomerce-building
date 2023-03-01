import { NavLink, Route, Routes } from 'react-router-dom'
import DataBuyer from './DataBuyer'
import Delivery from './Delivery'
import Payment from './Payment'

export default function Ordering() {
  let isActiveStyle = {
    color: '#000',
  }

  return (
    <div className='bg-slate-100 pt-3'>
      <div className='container_content'>
        <h3 className='mb-3 text-xl sm:text-3xl'>Оформление заказа</h3>

        <div className='bg-white rounded-tr-md grid rounded-tl-md grid-cols-12'>
          <div className='pl-3 pr-3 col-span-12 md:col-span-9'>
            <div className='flex justify-start py-3 gap-x-2 md:gap-x-6 text-[16px] sm:text-xl'>
              <NavLink
                style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
                className='hover:text-current text-gray-300 no-underline '
                to='data-buyer'
              >
                Данные покупателя
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
                className='hover:text-current text-gray-300 no-underline'
                to='delivery'
              >
                Доставка
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
                className='hover:text-current text-gray-300 no-underline'
                to='payment'
              >
                Оплата
              </NavLink>
            </div>

            <div>
              <Routes>
                <Route path='data-buyer' element={<DataBuyer />} />
                <Route path='delivery' element={<Delivery />} />
                <Route path='payment' element={<Payment />} />
              </Routes>
            </div>

            <div className='mt-3 mb-3'>
              <button className='rounded-md py-2 px-4 text-[13px] sm:text-[16px] text-white bg-gray-900'>ПОДТВЕРДИТЬ ЗАКАЗ</button>
            </div>
          </div>

          <div className='col-span-6 md:col-span-3 mb-3'>
            <div className='bg-dark pl-3 pr-3 py-3 rounded-tr-md rounded-br-md rounded-bl-md'>
              <div className='flex justify-between text-white font-semibold text-[13px] sm:text-[20px]'>
                <span>Итого</span>
                <span className='text-orange-700'>3700 ₽</span>
              </div>
              <div className='flex justify-between text-gray-300 pt-1 text-[10px] sm:text-[16px]'>
                <span>11 товаров</span>
                <span>2550 ₽</span>
              </div>
              <div className='flex justify-between text-gray-300 pt-1 text-[10px] sm:text-[16px]'>
                <span>Скидка</span>
                <span> — 250 ₽</span>
              </div>
              <div className='flex justify-between text-gray-300 pt-1 text-[10px] sm:text-[16px]'>
                <span>Доставка</span>
                <span>1500 ₽ ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
