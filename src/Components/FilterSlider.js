import { NavLink, Route, Routes } from 'react-router-dom'
import FilterNew from './FilterNew'
import FilterStock from './FilterStock'
import FilterHitSale from './FilterHitSale'

export default function FilterSlider() {
  let activeStyle = {
    color: 'white',
  }

  return (
    <>
      <div className='bg-black py-3 '>
        <div className='container_content flex gap-x-3 lg:gap-x-8 text-start text-lg lg:text-xl'>
          <NavLink
            className='no-underline text-gray-600 hover:text-white'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/'
          >
            Новинки
          </NavLink>
          <NavLink
            className='no-underline text-gray-600 hover:text-white'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/stock'
          >
            Акции
          </NavLink>
          <NavLink
            className='no-underline text-gray-600 hover:text-white'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/hit-sale'
          >
            Хиты продаж
          </NavLink>
        </div>
      </div>
      <div className='bg-dark'>
        <div className='container_content text-center'>
          <Routes>
            <Route path='/' element={<FilterNew />} />
            <Route path='/stock' element={<FilterStock />} />
            <Route path='/hit-sale' element={<FilterHitSale />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
