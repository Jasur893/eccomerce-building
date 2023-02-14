import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

export default function HeaderNav() {
  return (
    <div className='bg-black'>
      <div className='container_content flex justify-center align-middle pt-2 pb-2'>
        <Nav
          className='w-full justify-between gap-x-2.5'
          activeKey="/home"
        >
          <Nav.Item className='nav_border'>
            <Nav.Link href="/home" className='text-white'><i className="pr-2 fa-solid fa-align-left"></i><span>Каталог товаров</span></Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav_border'>
            <Nav.Link eventKey="link-1" className='text-white'>О компании</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav_border'>
            <Nav.Link eventKey="link-1" className='text-white'>Акции</Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav_border'>
            <Nav.Link eventKey="link-1" className='text-white'>Хиты сезона</Nav.Link>
          </Nav.Item>
          <Nav.Item className='hidden md:block'>
            <Nav.Link className=''>
              <span className='px-1'><i className="border bg-white text-dark rounded-full p-1 fa-brands fa-instagram"></i></span>
              <span className='px-1'><i className="border bg-white text-dark rounded-full p-1 fa-brands fa-vk"></i></span>
              <span className='px-1'><i className="border bg-white text-dark rounded-full p-1 fa-brands fa-facebook"></i></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='custom_input flex flex-col justify-center'>
            <Form.Control className='py-0' type="email" placeholder="Поиск по каталогу" />
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}