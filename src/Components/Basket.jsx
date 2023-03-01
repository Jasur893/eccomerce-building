import { Link } from 'react-router-dom'
import foto from '../img/comparisionCard/comparisionCard01.png'

export default function Basket() {
  return (
    <div className='bg-slate-100 pt-3'>
      <div className='container_content'>
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
          <div className='hover:drop-shadow-xl grid grid-cols-6 bg-white align-center px-1 sm:px-3 py-1 sm:py-3'>
            <div className='flex gap-x-2 col-span-2'>
              <img
                src={foto}
                className='w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]'
                alt='img'
              />
              <div className='pt-1 text-[10px] md:text-[16px]'>
                Эмаль Condor ПФ-115
              </div>
            </div>

            <div className='flex justify-around col-span-3 '>
              <div className='text-[10px] sm:text-[16px] text-center pt-2'>
                500 ₽{' '}
                <sup className='text-gray-400 line-through text-[8px] sm:text-[12px]'>
                  620 ₽
                </sup>
              </div>
              <div className='text-[10px] sm:text-[16px] flex justify-center align-center gap-2'>
                <button className='hover:text-orange-700'>
                  <i className='fa-solid fa-minus'></i>
                </button>
                <p className='w-[30px] border-r-2 border-l-2 text-center mb-0 pt-[10px]'>
                  2
                </p>
                <button className='hover:text-orange-700'>
                  <i className='fa-solid fa-plus'></i>
                </button>
              </div>
            </div>

            <div className='flex justify-around col-span-1'>
              <div className='text-[10px] sm:text-[16px] pt-2'>1000 ₽</div>
              <div className=' pt-2'>
                <i className='hover:text-gray-900 text-gray-300 fa-solid fa-xmark'></i>
              </div>
            </div>
          </div>

          <div className='hover:drop-shadow-xl grid grid-cols-6 bg-white align-center px-1 sm:px-3 py-1 sm:py-3'>
            <div className='flex gap-x-2 col-span-2'>
              <img
                src={foto}
                className='w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]'
                alt='img'
              />
              <div className='pt-1 text-[10px] md:text-[16px]'>
                Эмаль Condor ПФ-115
              </div>
            </div>

            <div className='flex justify-around col-span-3 '>
              <div className='text-[10px] sm:text-[16px] text-center pt-2'>
                500 ₽{' '}
                <sup className='text-gray-400 line-through text-[8px] sm:text-[12px]'>
                  620 ₽
                </sup>
              </div>
              <div className='text-[10px] sm:text-[16px] flex justify-center align-center gap-2'>
                <button className='hover:text-orange-700'>
                  <i className='fa-solid fa-minus'></i>
                </button>
                <p className='w-[30px] border-r-2 border-l-2 text-center mb-0 pt-[10px]'>
                  2
                </p>
                <button className='hover:text-orange-700'>
                  <i className='fa-solid fa-plus'></i>
                </button>
              </div>
            </div>

            <div className='flex justify-around col-span-1'>
              <div className='text-[10px] sm:text-[16px] pt-2'>1000 ₽</div>
              <div className=' pt-2'>
                <i className='hover:text-gray-900 text-gray-300 fa-solid fa-xmark'></i>
              </div>
            </div>
          </div>

          <div className='flex justify-end'>
            <div>
              <div className='flex justify-between border-b-2 py-2 text-[10px] sm:text-[16px]'>
                <span>Сумма</span>
                <span>2550 ₽</span>
              </div>
              <div className='flex justify-between text-gray-300 border-b-2 py-2 text-[10px] sm:text-[16px]'>
                <span>Скидка</span>
                <span>— 250 ₽</span>
              </div>
              <div className='flex justify-between text-xl mb-2  py-2 font-semibold text-[13px] sm:text-[20px]'>
                <span>К оплате</span>
                <span className='text-orange-700'>2250 ₽</span>
              </div>
              <Link
                to='/ordering'
                className='text-[10px] sm:text-[16px] px-2 py-1 no-underline rounded-md hover:bg-orange-800 bg-orange-700 text-white'
              >
                ПЕРЕЙТИ К ОФОРМЛЕНИЮ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
