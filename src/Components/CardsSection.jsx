import React, { useState, useEffect } from 'react';
import CardItem from './CardItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
// import Loader from './Loader'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import Loader from './Loader';

export default function CardsSection(props) {
  const {value1} = useContext(ProductContext)
  const productsAll = value1;
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  // const [products, setProducts] = useState([])
  

  // const producAll =  productsAll.find(item => (item.productType === props.elName))
  // console.log(producAll);
  // console.log(props.elName);

  // useEffect(() => {
  //   const getProducts = () => {
  //     const productsArray = []
  //     const path = `products-${props.elName.toUpperCase()}`

  //     getDocs(collection(db, path)).then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         productsArray.push({...doc.data(), id: doc.id, isLiked: false})
  //         // console.log(doc.id, "=>", doc.data());
  //         setProducts(productsArray)
  //       })
  //     }).catch((error)=> {
  //       console.log(error.message);
  //     })
  //   }
  //   getProducts()
  // },[])

  return (
    <div className='mt-5'>
      <div className='flex justify-start align-center flex-wrap gap-x-4 pb-4'>
        <p className='mb-0 text-lg md:text-2xl  lg:text-3xl pt-0'>
          {props.elName}
        </p>
        <div className='flex justify-center align-center gap-3'>
          <span ref={prevRef} className='span_icon text-gray-300 hover:text-black'>
            <i
              style={{ paddingTop: '4px', paddingBottom: '4px' }}
              className='bg-white rounded-full px-2 fa-solid fa-angle-left'
            ></i>
          </span>
          <span ref={nextRef} className='span_icon text-gray-300 hover:text-black'>
            <i
              style={{ paddingTop: '4px', paddingBottom: '4px' }}
              className='bg-white rounded-full px-2 fa-solid fa-angle-right'
            ></i>
          </span>
        </div>
      </div>
        {productsAll.length !== 0 ? (
          <Swiper
            className='pb-2'
            modules={[Navigation, Scrollbar, A11y]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swipper) => {
              swipper.params.navigation.prevEl = prevRef.current
              swipper.params.navigation.nextEl = nextRef.current
              swipper.navigation.init()
              swipper.navigation.update()
            }}
            pagination={{ clickable: true }}
            scrollbar={{ hide: false }}
            spaceBetween={15}
            slidesPerView={2}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                // spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
            }}
          >
            {productsAll.filter((itemFilter) => itemFilter.productType === props.elName).map((product)=> (
              <SwiperSlide 
                key={product.id}>
                {<CardItem data={product}/>}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loader />
        )}
    </div>
  )
}