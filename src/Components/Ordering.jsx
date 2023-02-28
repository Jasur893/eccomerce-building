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
        <h3 className='mb-0 text-xl sm:text-3xl'>Оформление заказа</h3>

        <div className='bg-white rounded-tr-md grid rounded-tl-md grid-cols-12'>
          <div className='px-3 col-span-9'>
            <div className='flex gap-5 py-3 text-xl'>
              <NavLink
                style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
                className='hover:text-current text-gray-300 no-underline'
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
          </div>

          <div className='col-span-3'>2</div>
        </div>
      </div>
    </div>
  )
}
