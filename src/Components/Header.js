// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.png'

export default function Header() {
  return (
    <Navbar style={{background: "#212526"}} className="p-0" expand="lg">
      <div className='container mx-auto'>
        <Nav className='flex justify-between w-full'>
          <Navbar.Brand href="#home" className='flex justify-center'>
            <img
              alt="logo-foto"
              src={Logo}
              width="70"
              height="40"
              className=""
            />
          </Navbar.Brand>

          
          <Navbar className='h-full '>
            
            <Nav className="ms-auto flex justify-center gap-px lg:h-14 w-full">
              <div className='hidden lg:flex justify-around w-4/6'>
                <div className='flex flex-col pl-4 justify-center mr-7'>
                  <span className='text-white leading-4 '>Время работы: 10:00–20:00</span>
                </div>
                <div className='flex flex-col pl-4 justify-center mr-7'>
                  <span className='text-white leading-4 '>+7 495 120-32-14</span>
                  <span className='text-red-600 text-xs underline cursor-pointer'>Заказать звонок</span>
                </div>
              </div>
              <Nav.Link className='text-white bg-zinc-700 hover:bg-orange-700 ' href="#home"><i className="p-2 text-xl align-middle fa-regular fa-heart"></i></Nav.Link>
              <Nav.Link className='text-white bg-zinc-700 hover:bg-orange-700' href="#link"><i className="p-2 text-xl fa-solid fa-chart-simple"></i></Nav.Link>
              <Nav.Link className='text-white bg-zinc-700 hover:bg-orange-700' href="#link"><i className="p-2 text-xl fa-regular fa-circle-user"></i></Nav.Link>
              <Nav.Link className='text-white bg-zinc-700 hover:bg-orange-700' href="#link"><i className="p-2 text-xl fa-solid fa-cart-shopping"></i></Nav.Link>
              <div className='flex flex-col pl-4 justify-center w-36'>
                <span className='text-white leading- 3 text-xs'>Товаров на сумму</span>
                <span className='text-white'>2 000 ₽</span>
              </div>
            </Nav>
          </Navbar>
        </Nav>
      </div>
    </Navbar>
  )
}

