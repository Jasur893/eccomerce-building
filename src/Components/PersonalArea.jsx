import { NavLink, Route, Routes } from 'react-router-dom';
import HistoryOfOrders from './HistoryOfOrders';
import PersonalInformation from './PersonalInformation';

export default function PersonalArea() {
  let isActiveStyle = {
    color: 'orangered'
  }

  return (
    <div className='bg-slate-100'>
      <div className='container_content'>
        <h3 className='text-3xl pt-3'>Личный кабинет</h3>
        <div className='grid grid-cols-12 gap-3 pb-3'>
          <div className='col-span-12 md:col-span-3'>
            <div className='flex flex-col rounded-md bg-dark overflow-hidden'>
              <NavLink style={({isActive}) => isActive ? isActiveStyle : undefined} to='history-of-orders' className='hover:text-gray-200 text-gray-100 p-2 border-b-[1px] border-gray-600  no-underline'>История заказов</NavLink>
              <NavLink style={({isActive}) => isActive ? isActiveStyle : undefined} to='personal-information' className='hover:text-gray-200 text-gray-100 p-2  no-underline'>Личная информация</NavLink>
            </div>
          </div>
          <div className='col-span-12 md:col-span-9'>
            <div className='mb-4'>
              <Routes>
                <Route path='history-of-orders' element={<HistoryOfOrders/>} />
                <Route path='personal-information' element={<PersonalInformation/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}