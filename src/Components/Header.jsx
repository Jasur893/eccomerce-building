// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Logo from '../img/logo.png'

export default function Header() {
  let isAactiveStyle = {
    backgroundColor: 'rgb(249 115 22)',
  }

  return (
    <Navbar className='header_content py-0 bg-dark'>
      <div className='container_content flex  justify-between w-full'>
        <Nav className='flex justify-between w-full'>
          <NavLink
            to='/#'
            className='flex justify-center items-center py-0'
          >
            <img
              alt='logo-foto'
              src={Logo}
              width='70'
              height='40'
              className=''
            />
          </NavLink>
          <div className='hidden md:flex justify-end w-4/6'>
            <div className='flex flex-col pl-4 justify-center align-center mr-7'>
              <span className='text-white leading-4'>
                Время работы:  10:00–20:00
              </span>
            </div>
            <div className='flex flex-col pl-4 justify-center mr-7'>
              <span className='text-white leading-4 w-32'>+7 495 120-32-14</span>
              <span className='text-red-600 text-xs underline cursor-pointer'>
                Заказать звонок
              </span>
            </div>
          </div>

          <div className='h-full '>
            <div className='ms-auto flex justify-center cursor-pointer py-0 gap-px lg:h-14 w-full'>
              <NavLink style={({isActive}) => (isActive ? isAactiveStyle : undefined)} to='/favorites'
                className='no-underline flex flex-col justify-center h-full text-white bg-zinc-700 transition duration-700 hover:bg-orange-700 '
              >
                <i className='px-3 py-2 text-xl fa-regular fa-heart'></i>
              </NavLink>
              <NavLink style={({isActive}) => (isActive ? isAactiveStyle : undefined)} to='/comparison'
                className='no-underline flex flex-col justify-center h-full text-white bg-zinc-700 transition duration-700 hover:bg-orange-700'
              >
                <i className='px-3 py-2 text-xl fa-solid fa-chart-simple'></i>
              </NavLink>
              <NavLink style={({isActive}) => (isActive ? isAactiveStyle : undefined)}
                to='/lichniy-kabinet'
                className='flex flex-col justify-center h-full text-white bg-zinc-700 transition duration-700 hover:bg-orange-700'
              >
                <i className='px-3 py-2 text-xl fa-regular fa-circle-user'></i>
              </NavLink>
              <NavLink style={({isActive}) => (isActive ? isAactiveStyle : undefined)}
                to='/basket'
                className='flex flex-col justify-center h-full text-white bg-zinc-700 transition duration-700 hover:bg-orange-700'
              >
                <i className='px-3 py-2 text-xl fa-solid fa-cart-shopping'></i>
              </NavLink>
            </div>
          </div>
        </Nav>
      </div>
    </Navbar>
  )
}
