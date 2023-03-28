import { Link } from 'react-router-dom'
import BasketItem from './BasketItem'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useSelector } from 'react-redux'

export default function Basket() {
  const cart = useSelector((state) => state.cart)
  const total = useSelector((state) => state.total)
  const {userValue4} = useContext(AuthContext);
  
  return (
    <div className='bg-slate-100 pt-3'>
      <div className='container_content'>
        <div className=''>
          <div className='relative mb-2'>
            <h3 className='mb-0 text-xl sm:text-3xl'>Корзина</h3>
            <button className='text-[10px]  sm:text-[15px] absolute top-0 right-0 py-2 px-3 border'>
              ПРОДОЛЖИТЬ ПОКУПКИ
            </button>
          </div>

          <div className='grid grid-cols-7 text-[10px] sm:text-[16px]'>
            <div className='col-span-2'>Название</div>
            <div className='col-span-2 text-center'>Стоимость</div>
            <div className='flex justify-evenly col-span-3'>
              <div className=' text-center'>Количество</div>
              <div className='text-center pr-3'>Итого</div>
            </div>
          </div>

          <div className='flex flex-col gap-y-[2px] mt-2 pb-3'>
            {cart.length > 0 ? (
              cart.map((item) => (
                <BasketItem key={item.id} data={item}/>
              ))
            ) : (
              <div className=''>
                <p className='text-xl mb-0 text-center font-semibold'>Ваша корзина пуста</p>
              </div>
            )}          
          </div>
        </div>

        <div className='flex justify-end pb-2'>
          <div className='min-w-max'>
            <div className='flex justify-between border-b-2 py-2 text-[10px] sm:text-[16px]'>
              <span>Сумма</span>
              <span>{parseFloat(total).toFixed(2)} ₽</span>
            </div>
            <div className='flex justify-between text-xl py-2 font-semibold '>
              <span className='text-[13px] sm:text-[20px]'>К оплате</span>
              <span className='text-orange-700 text-[13px] sm:text-[20px]'>{parseFloat(total).toFixed(2)} ₽</span>
            </div>
            {userValue4?.uid !== null ?  null  : <p className='text-red-500 mb-1 text-[12px] md:text-base'>у вас нет аккаунта!</p>}
            {!cart.length > 0 && <p className='text-green-600 mb-1 text-[12px] md:text-base'>выберите хотя бы один продукт</p>}
            <Link
              to={`${cart.length > 0 && userValue4?.uid !== null ? '/ordering' : '/basket'}`}
              className='text-[10px] sm:text-[16px] px-2 py-1 no-underline rounded-md hover:bg-orange-800 bg-orange-700 text-white'
            >
              ПЕРЕЙТИ К ОФОРМЛЕНИЮ
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}
