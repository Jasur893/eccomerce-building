import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export default function BasketItem(props) {
  const {productImage, productTittle, price, amount, id} = props?.data
  const {value4, value5, value6} = useContext(ProductContext)
  const removeFromCart = value4
  const incrementAmount = value5
  const decrementAmount = value6

  return (
    <div className='basket_shadow grid grid-cols-6 bg-white align-center px-1 sm:px-3 py-1 sm:py-3'>
            <div className='flex gap-x-2 col-span-2'>
              <img
                src={productImage}
                className='w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]'
                alt='foto'
              />
              <div className='pt-1 text-[10px] md:text-[16px]'>
                {String(productTittle).slice(0, 20) + '...' } 
              </div>
            </div>

            <div className='flex justify-around col-span-3 '>
              <div className='text-[10px] sm:text-[16px] text-center pt-2'>
                {+price} ₽
                {/* <sup className='text-gray-400 line-through text-[8px] sm:text-[12px] pl-1'>
                  620 ₽
                </sup> */}
              </div>
              <div className='text-[10px] sm:text-[16px] flex justify-center align-center gap-2'>
                <button onClick={() => decrementAmount(id)} className='hover:text-orange-700'>
                  <i className='fa-solid fa-minus'></i>
                </button>
                <div className='w-[30px] border-r-2 border-l-2 text-center mb-0 pt-[10px]'>
                  {amount}
                </div>
                <button onClick={() => incrementAmount(id)} className='hover:text-orange-700'>
                  <i className='fa-solid fa-plus'></i>
                </button>
              </div>
            </div>

            <div className='flex justify-around col-span-1'>
              <div className='text-[10px] sm:text-[16px] pt-2'>{`${parseFloat(+price * amount).toFixed(2)}`} ₽</div>
              <div onClick={() => removeFromCart(id)} className='cursor-pointer pt-2'>
                <i className='hover:text-gray-900 text-gray-300 fa-solid fa-xmark'></i>
              </div>
            </div>
          </div>
  )
}