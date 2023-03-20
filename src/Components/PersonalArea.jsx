import HistoryOfOrders from './HistoryOfOrders';
import PersonalInformation from './PersonalInformation';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function PersonalArea() {
  const [activeTab, setActivwTab] = useState('tab2')

  const {userValue4, userValue2} = useContext(AuthContext)
  const userSession = userValue4
  const handleLogOut = userValue2

  return (
    <div className='bg-slate-100 pt-3'>
      <div className='container_content'>
        <div className=' relative'>
          <h3 className='text-lg md:text-3xl'>Личный кабинет</h3>
          <p className='mb-1 text-[13px] lg:text-base'>Привет: {userSession?.email}</p>
          <span onClick={() => handleLogOut()} className='absolute right-0 top-0 cursor-pointer hover:text-orange-500'>
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>
        </div>
        <div className='grid grid-cols-12 gap-3 pb-3'>
          <div className='col-span-12 md:col-span-3'>
            <ul className='flex flex-col rounded-md bg-dark overflow-hidden pl-0'>
              <li
                onClick={() => setActivwTab('tab1')}
                className={`${activeTab === 'tab1' ? 'text-orange-500' : ''} cursor-pointer hover:text-orange-500 text-gray-100 p-2 border-b-[1px] border-gray-600  no-underline`}
              >
                История заказов
              </li>
              <li
                onClick={() => setActivwTab('tab2')}
                className={`${activeTab === 'tab2' ? 'text-orange-500' : ''} cursor-pointer hover:text-orange-500 text-gray-100 p-2  no-underline`}
              >
                Личная информация
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-9'>
            <div className='mb-4'>
              {activeTab === 'tab1' ? (
                <HistoryOfOrders/>
              ) : (
                <PersonalInformation/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



