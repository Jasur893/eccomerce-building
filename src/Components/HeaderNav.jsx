import { NavLink } from 'react-router-dom'
import SearchPanel  from './SearchPanel'
import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function HeaderNav() {
  const productsAll = useSelector((state) => state.productsAll)
 
  let activeStyle = {
    border: '1px solid #F05A00',
    borderRadius: '6px',
    transition: 'all .7s ease'
  }

  return (
    <Navbar expand="md" className='bg-black py-0'>
      <div className='container_content flex justify-center items-center pt-2 pb-2 w-full'>
        <div className='flex justify-center md:justify-between items-center flex-wrap w-full gap-y-2'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white' />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='py-2 flex justify-between flex-wrap flex-grow gap-x-1 gap-y-1 sm:gap-x-2.5'>
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
                to='/stock'
                className='border-[1px] border-black rounded-md transition duration-700 hover:border-orange-700 no-underline'>
                <div className='p-2 text-white'>Акции</div>
              </NavLink>
              <NavLink
                style={({ isActive }) => isActive ? activeStyle : undefined}
                to='/new'
                className='border-[1px] border-black rounded-md transition duration-700 hover:border-orange-700  no-underline'>
                <div className='p-2 text-white'>Новинки</div>
              </NavLink>
              <div className='p-2'>
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
            </div>
          </Navbar.Collapse>
          <div className='search_panel'>
            <SearchPanel data={productsAll} />
          </div>
        </div>
      </div>
    </Navbar>
  )
}
