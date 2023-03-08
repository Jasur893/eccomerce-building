import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <div className='bg-dark py-8'>
      <div className='container_content grid grid-cols-2 gap-x-5 sm:grid-cols-3'>
        <div className='flex justify-center sm:justify-start'>
          <ul className='text-white text-left text-sm sm:text-base mb-0 pl-0'>
            <li>Малярные товары</li>
            <li className='pt-[2px] sm:pt-3'>Электрооборудование</li>
            <li className='pt-[2px] sm:pt-3'>Спецодежда</li>
            <li className='pt-[2px] sm:pt-3'>Для дома и дачи</li>
            <li className='pt-[2px] sm:pt-3'>Сезонное</li>
            <li className='pt-[2px] sm:pt-3'>Инструмент</li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <ul className='text-white text-left text-sm sm:text-base mb-0 pl-5 sm:pl-0'>
            <li>О компании товары</li>
            <li className='pt-[2px] sm:pt-3'>Контакты</li>
            <li className='pt-[2px] sm:pt-3'>Новинки</li>
            <li className='pt-[2px] sm:pt-3'>Хиты сезона</li>
            <li className='pt-[2px] sm:pt-3'>Распродажи</li>
          </ul>
        </div>
        <div className='col-span-2 sm:col-span-1 mt-2 sm:mt-0 flex justify-center sm:justify-end'>
          <div>
            <img src={logo} alt='logo' />
            <ul className='text-white text-left mb-0 pl-0'>
              <li className='text-sm md:text-lg pt-2'>+7 495 120-32-14</li>
              <li className='text-sm md:text-lg pb-2'>+7 495 120-32-15</li>
              <li className='pb-3 pt-3'>
                <span className='px-1'>
                  <i className='border bg-white text-dark rounded-full p-1 fa-brands fa-instagram'></i>
                </span>
                <span className='px-1'>
                  <i className='border bg-white text-dark rounded-full p-1 fa-brands fa-vk'></i>
                </span>
                <span className='px-1'>
                  <i className='border bg-white text-dark rounded-full p-1 fa-brands fa-facebook'></i>
                </span>
              </li>
              <li className='text-xs pb-1'>Соглашение пользователя</li>
              <li className='text-xs'>«Copyright © Название {new Date().getFullYear()}»</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
