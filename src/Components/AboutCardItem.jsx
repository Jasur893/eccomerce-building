import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import CardCharacteristic from './CardCharacteristic'
import CardDelivery from './CardDelivery'
import CardDescription from './CardDescription'
import CardReview from './CardReview'
import Loader from './Loader'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export default function AboutCardItem() {
  const {value1, value2, value3, value8, value9} = useContext(ProductContext);
  const productsAll = value1
  const addToCart = value2;
  const cart = value3
  const showFavorite = value8
  const hideFavorite = value9
  const { nameId} = useParams()

  const productItem = productsAll.find(item => item.id === nameId)

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? '#000' : undefined,
    }
  }

  const cartShowAdd = cart.find(item => item.id === nameId)
  const cartIsAdd = !cartShowAdd ? cartShowAdd :  Object(cartShowAdd).isAdded

  return (
    <div className='pt-3 pb-3 bg-slate-100'>
      <div className='container_content'>
        <div className=' mt-5 bg-white'>

          {productItem ? (
            <>
              <div className='py-3 grid grid-cols-1 md:grid-cols-2'>
                <div className='h-[300px] flex justify-center'>
                  <img
                    className='h-full'
                    src={productItem?.productImage}
                    alt='card'
                  />
                </div>
                <div className='px-2'>
                  <p className='pt-2 text-3xl'>{productItem?.productTittle}</p>
                  <p className='text-[14px] text-green-300'>В наличии</p>
                  <p className='w-[70%]'>{productItem?.description}</p>
                  <span className='text-2xl font-semibold pr-2'>
                    {productItem?.price} ₽
                  </span>
                  <span className='text-base line-through text-gray-300 pr-6'>
                    720 ₽
                  </span>
                  <div className='flex justify-start align-center gap-3 pt-3'>
                    <span onClick={() => addToCart(productItem, nameId)} 
                      className={`${cartIsAdd ? 'bg-green-600' : 'bg-orange-700'} cursor-pointer py-2 px-3  rounded-md text-white`}>
                      В КОРЗИНУ
                    </span>
                    <div className='cursor-pointer flex flex-col justify-center text-gray-300'>
                      <i className='text-xl fa-solid fa-chart-simple'></i>
                    </div>
                    <div className='cursor-pointer flex flex-col justify-center text-gray-300'>
                      <div className='relative w-[16px] h-[16px]'>
                        <span
                          className='absolute top-0 right-0 left-0 w-[18px] h-[18px] cursor-pointer'
                          onClick={() => !productItem.isLiked ? showFavorite(nameId) : hideFavorite(nameId) }
                        ></span>
                        {productItem.isLiked ? (
                          <i className='text-[18px] text-red-500 fa-solid fa-heart'></i>
                        ) : (
                          <i className='text-[18px] text-gray-300 fa-sharp fa-regular fa-heart'></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className='pl-3 py-3 flex justify-start align-center flex-wrap gap-3 sm:gap-4'>
                  <NavLink
                    to='opisaniye'
                    style={navLinkStyle}
                    className='hover:text-black no-underline text-[17px] sm:text-xl text-gray-400'
                  >
                    Описание
                  </NavLink>
                  <NavLink
                    to='xarakteristika'
                    style={navLinkStyle}
                    className='hover:text-black no-underline text-[17px] sm:text-xl text-gray-400'
                  >
                    Характеристики
                  </NavLink>
                  <NavLink
                    to='dostavka'
                    style={navLinkStyle}
                    className='hover:text-black no-underline text-[17px] sm:text-xl text-gray-400'
                  >
                    Доставка
                  </NavLink>
                  <NavLink
                    to='otziv'
                    style={navLinkStyle}
                    className='hover:text-black no-underline text-[17px] sm:text-xl text-gray-400'
                  >
                    Отзывы
                  </NavLink>
                </div>

                <div className='pl-3 py-4'>
                  <Routes>
                    <Route index path='opisaniye' element={<CardDescription product={productItem?.description} />}/>
                    <Route path='xarakteristika' element={<CardCharacteristic product={productItem?.brand} />}/>
                    <Route path='dostavka' element={<CardDelivery />} />
                    <Route path='otziv' element={<CardReview />} />
                  </Routes>
                </div>
              </div>
            </>
          ) : (
            <div className='text-center py-4 '>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
