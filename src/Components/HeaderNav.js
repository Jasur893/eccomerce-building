import Form from 'react-bootstrap/Form';

export default function HeaderNav() {
  return (
    <div className='bg-black'>
      <div className='container_content flex justify-center align-middle pt-2 pb-2'>
        <div
          className='w-full py-2 flex justify-between flex-wrap gap-x-1 gap-y-1 sm:gap-x-2.5'
        >
          <div className='nav_border'>
            <div href="/home" className='p-2 text-white'><i className="pr-2 fa-solid fa-align-left"></i><span>Каталог товаров</span></div>
          </div>
          <div className='nav_border'>
            <div className='p-2 text-white'>О компании</div>
          </div>
          <div className='nav_border'>
            <div className='p-2 text-white'>Акции</div>
          </div>
          <div className='nav_border'>
            <div className='p-2 text-white'>Хиты сезона</div>
          </div>
          <div className='hidden md:block p-2'>
            <div className=''>
              <span className='cursor-pointer px-1'><i className="border bg-white text-dark rounded-full p-1 fa-brands fa-instagram"></i></span>
              <span className='cursor-pointer px-1'><i className="border bg-white text-dark rounded-full p-1 fa-brands fa-vk"></i></span>
              <span className='cursor-pointer px-1'><i className="border bg-white text-dark rounded-full p-1 fa-brands fa-facebook"></i></span>
            </div>
          </div>
          <div className='custom_input flex flex-col justify-center'>
            <Form.Control className='py-0' type="email" placeholder="Поиск по каталогу" />
          </div>
        </div>
      </div>
    </div>
  )
}