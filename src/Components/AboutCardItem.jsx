import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CardCharacteristic from './CardCharacteristic'
import CardDescription from './CardDescription'
import CardReview from './CardReview'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addComparision, addToCart, hideFavorite, showFavorite } from '../redux/actions'

export default function AboutCardItem() {
  const productsAll = useSelector((state) => state.products1.productsAll)
  const cart = useSelector((state) => state.products1.cart)
  const dispatch = useDispatch()
  const { nameId} = useParams()
  const [activeTab, setActivwTab] = useState('tab1')

  const productItem = productsAll?.find(item => item.id === nameId)
  
  const cartShowAdd = cart?.find(item => item.id === nameId)
  const cartIsAdd = !cartShowAdd ? cartShowAdd :  Object(cartShowAdd).isAdded

  //handleShowTab
  const handleShowTab = () => {
    if(activeTab === 'tab1'){
      return <CardDescription product={productItem.description} />
    } else if(activeTab === 'tab2'){
      return <CardCharacteristic characteristic={productItem.characteristic} />
    } else if(activeTab === 'tab3') {
      return <CardReview nameId={nameId} />
    }
  }


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
                    src={productItem.productImage}
                    alt='card'
                  />
                </div>
                <div className='px-2'>
                  <p className='pt-2 text-3xl'>{productItem.productTittle}</p>
                  <p className='text-base'>Бренд : <span className='font-semibold font-mono text-lg'>{productItem.brand}</span></p>
                  <p className='text-[14px] text-green-300'>В наличии</p>
                  <p className='w-[70%]'>{productItem.description}</p>
                  <span className='text-2xl font-semibold pr-2'>
                    {productItem.price} ₽
                  </span>
                  <div className='flex justify-start align-center gap-3 pt-3'>
                    <span onClick={() => dispatch(addToCart(productItem, nameId))} 
                      className={`${cartIsAdd ? 'bg-green-600' : 'bg-orange-700'} cursor-pointer py-2 px-3  rounded-md text-white`}>
                      В КОРЗИНУ
                    </span>
                    <div 
                      onClick={() => dispatch(addComparision(productItem, nameId))}
                      className='cursor-pointer flex flex-col justify-center text-gray-300 hover:text-green-400'>
                      <i className='text-xl fa-solid fa-chart-simple'></i>
                    </div>
                    <div className='cursor-pointer flex flex-col justify-center text-gray-300'>
                      <div className='relative w-[16px] h-[16px]'>
                        <span
                          className='absolute top-0 right-0 left-0 w-[18px] h-[18px] cursor-pointer'
                          onClick={() => !productItem.isLiked ? dispatch(showFavorite(nameId)) : dispatch(hideFavorite(nameId))}
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
                <ul className='pl-3 py-3 flex justify-start align-center flex-wrap gap-3 sm:gap-4'>
                  <li
                    onClick={() => setActivwTab('tab1')}
                    className={`${activeTab === 'tab1' ? 'text-gray-900' : ''} cursor-pointer hover:text-black no-underline text-[17px] sm:text-xl text-gray-400`}
                  >
                    Описание
                  </li>
                  <li
                    onClick={() => setActivwTab('tab2')}
                    className={`${activeTab === 'tab2' ? 'text-gray-900' : ''} cursor-pointer hover:text-black no-underline text-[17px] sm:text-xl text-gray-400`}
                  >
                    Характеристики
                  </li>
                  <li
                    onClick={() => setActivwTab('tab3')}
                    className={`${activeTab === 'tab3' ? 'text-gray-900' : ''} cursor-pointer hover:text-black no-underline text-[17px] sm:text-xl text-gray-400`}
                  >
                    Отзывы
                  </li>
                </ul>

                <div className='px-3 py-4 h-full'>
                  {handleShowTab()}
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
