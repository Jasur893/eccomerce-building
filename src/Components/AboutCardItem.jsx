import { NavLink, Route, Routes } from 'react-router-dom'
import card02 from '../img/caruselcard/card02.png'
import CardCharacteristic from './CardCharacteristic'
import CardDelivery from './CardDelivery'
import CardDescription from './CardDescription'
import CardReview from './CardReview'

export default function AboutCardItem() {
  const navLinkStyle = ({isActive}) => {
    return {
      color: isActive ? '#000' : undefined
    }
  }

  return (
    <div className='pt-3 pb-3 bg-slate-100'>
      <div className='container_content mt-5 bg-white'>
        <div className='py-3 grid grid-cols-2'>
          <div className='flex justify-center'>
            <div className=''>
              <img className='w-full h-full' src={card02} alt="card" />
            </div>
          </div>
          <div>
            <p className='pt-2 text-3xl'>Краска Farbitex Для садовых деревьев</p>
            <p className='text-[14px] text-green-300'>В наличии</p>
            <p className='w-[70%]'>Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка, светостойкая, термостойкая, защита от вредителей</p>
            <span className='text-2xl font-semibold pr-2'>500 ₽</span>
            <span className='text-base line-through text-gray-300 pr-6'>720 ₽</span>
            <div className='flex justify-start align-center gap-3 pt-3'>
              <span className='cursor-pointer py-2 px-3 bg-orange-700 rounded-md text-white'>В КОРЗИНУ</span>
              <div className='cursor-pointer flex flex-col justify-center text-gray-300'><i className='text-xl fa-solid fa-chart-simple'></i></div>
              <div className='cursor-pointer flex flex-col justify-center text-gray-300'><i className='text-xl  align-middle fa-regular fa-heart'></i></div>
            </div>
          </div>
        </div>

        <div>
          <div className='pl-3 py-2 flex justify-start align-center gap-4'>
            <NavLink to='opisaniye' style={navLinkStyle} className='hover:text-black no-underline text-xl text-gray-400' >Описание</NavLink>
            <NavLink to='xarakteristika' style={navLinkStyle} className='hover:text-black no-underline text-xl text-gray-400' >Характеристики</NavLink>
            <NavLink to='dostavka' style={navLinkStyle} className='hover:text-black no-underline text-xl text-gray-400' >Доставка</NavLink>
            <NavLink to='otziv' style={navLinkStyle} className='hover:text-black no-underline text-xl text-gray-400' >Отзывы</NavLink>
          </div>

          <Routes>
            <Route path='opisaniye' element={<CardDescription/>}/>
            <Route path='xarakteristika' element={<CardCharacteristic/>}/>
            <Route path='dostavka' element={<CardDelivery/>}/>
            <Route path='otziv' element={<CardReview/>}/>
          </Routes>

        </div>
        
      </div>
    </div>
  )
}