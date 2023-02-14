// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../img/logo.png'

export default function Header() {
  return (
    <Navbar className='py-0 bg-dark'>
      <div className='container_content flex  justify-between w-full'>
        <Nav className='flex justify-between w-full'>
          <Navbar.Brand
            href='#home'
            className='flex justify-center items-center py-0'
          >
            <img
              alt='logo-foto'
              src={Logo}
              width='70'
              height='40'
              className=''
            />
          </Navbar.Brand>
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
            <div className='ms-auto flex justify-center py-0 gap-px lg:h-14 w-full'>
              <Nav.Link
                className='text-white bg-zinc-700 hover:bg-orange-700 '
                href='#home'
              >
                <i className='p-2 text-xl align-middle fa-regular fa-heart'></i>
              </Nav.Link>
              <Nav.Link
                className='text-white bg-zinc-700 hover:bg-orange-700'
                href='#link'
              >
                <i className='p-2 text-xl fa-solid fa-chart-simple'></i>
              </Nav.Link>
              <Nav.Link
                className='text-white bg-zinc-700 hover:bg-orange-700'
                href='#link'
              >
                <i className='p-2 text-xl fa-regular fa-circle-user'></i>
              </Nav.Link>
              <Nav.Link
                className='text-white bg-zinc-700 hover:bg-orange-700'
                href='#link'
              >
                <i className='p-2 text-xl fa-solid fa-cart-shopping'></i>
              </Nav.Link>
            </div>
          </div>
        </Nav>
      </div>
    </Navbar>
  )
}
