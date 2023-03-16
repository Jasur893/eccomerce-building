import { NavLink } from 'react-router-dom'
import SearchPanel  from './SearchPanel'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function HeaderNav() {
  const {value1} = useContext(ProductContext)
  const productsAll = value1
 
  let activeStyle = {
    border: '1px solid #F05A00',
    borderRadius: '6px',
    transition: 'all .7s ease'
  }

  return (
    <div className='bg-black'>
      <div className='container_content flex justify-center align-middle pt-2 pb-2'>
        <div className='w-full py-2 flex justify-between flex-wrap gap-x-1 gap-y-1 sm:gap-x-2.5'>
          <NavLink 
            style={({ isActive }) => isActive ? activeStyle : undefined}
             to='/catalog' className='no-underline border-[1px] rounded-md transition duration-700 hover:border-orange-700 border-black'>
            <div className='p-2 text-white'>
              <i className='pr-2 fa-solid fa-align-left'></i>
              <span>Каталог товаров</span>
            </div>
          </NavLink>
          <NavLink
            style={({ isActive }) => isActive ? activeStyle : undefined}
            to='/about-company' className='border-[1px] rounded-md transition duration-700 hover:border-orange-700 border-black no-underline'>
            <div 
             className='p-2 text-white '>О компании</div>
          </NavLink>
          <NavLink
            style={({ isActive }) => isActive ? activeStyle : undefined}
            to='/promotion'
            className='border-[1px] border-black rounded-md transition duration-700 hover:border-orange-700 no-underline'>
            <div className='p-2 text-white'>Акции</div>
          </NavLink>
          <NavLink
            style={({ isActive }) => isActive ? activeStyle : undefined}
            to='/hit-season'
            className='border-[1px] border-black rounded-md transition duration-700 hover:border-orange-700  no-underline'>
            <div className='p-2 text-white'>Хиты сезона</div>
          </NavLink>
          <div className='hidden md:block p-2'>
            <div className=''>
              <span className='cursor-pointer px-1'>
                <i className='border bg-white text-dark rounded-full p-1 fa-brands fa-instagram'></i>
              </span>
              <span className='cursor-pointer px-1'>
                <i className='border bg-white text-dark rounded-full p-1 fa-brands fa-vk'></i>
              </span>
              <span className='cursor-pointer px-1'>
                <i className='border bg-white text-dark rounded-full p-1 fa-brands fa-facebook'></i>
              </span>
            </div>
          </div>
          <SearchPanel data={productsAll} />
        </div>
      </div>
    </div>
  )
}
