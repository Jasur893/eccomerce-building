import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import CardCharacteristic from './CardCharacteristic'
import CardDelivery from './CardDelivery'
import CardDescription from './CardDescription'
import CardReview from './CardReview'
import { query, onSnapshot, getDoc, doc } from 'firebase/firestore';
import { db } from '../FirebaseConfigs/firebaseConfig'; 
import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function AboutCardItem() {
  const { nameId, typeId } = useParams()
  const [productId, setProductId] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [errosMsg, setErrorMsg] = useState('')

  console.log(productId)

  useEffect(() => {
    const getProduct = async() => {
      const docRef = doc(db, `products-${typeId.toUpperCase()}`, nameId);
      const docSnap = await getDoc(docRef)
      setProductId(docSnap.data())
    }
    getProduct()
  },[])


  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? '#000' : undefined,
    }
  }

  return (
    <div className='pt-3 pb-3 bg-slate-100'>
      <div className='container_content'>
        <div className=' mt-5 bg-white'>
          {productId ? (
            <>
              <div className='py-3 grid grid-cols-1 md:grid-cols-2'>
                <div className='h-[300px] flex justify-center'>
                  <img className='h-full' src={productId?.productImage} alt='card' />
                </div>
              <div className='px-2'>
                <p className='pt-2 text-3xl'>
                  {productId?.productTittle}
                </p>
                <p className='text-[14px] text-green-300'>В наличии</p>
                <p className='w-[70%]'>
                  {productId?.description}
                </p>
                <span className='text-2xl font-semibold pr-2'>{productId?.price} ₽</span>
                <span className='text-base line-through text-gray-300 pr-6'>
                  720 ₽
                </span>
                <div className='flex justify-start align-center gap-3 pt-3'>
                  <span className='cursor-pointer py-2 px-3 bg-orange-700 rounded-md text-white'>
                    В КОРЗИНУ
                  </span>
                  <div className='cursor-pointer flex flex-col justify-center text-gray-300'>
                    <i className='text-xl fa-solid fa-chart-simple'></i>
                  </div>
                  <div className='cursor-pointer flex flex-col justify-center text-gray-300'>
                    <i className='text-xl  align-middle fa-regular fa-heart'></i>
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
                    <Route index path='opisaniye' element={<CardDescription product={productId?.description} />} />
                    <Route path='xarakteristika' element={<CardCharacteristic product={productId?.brand}/>} />
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
