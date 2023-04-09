import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import "swiper/css/pagination";
import CardItem from './CardItem'
import Loader from './Loader'
import { useSelector } from 'react-redux'

export default function FilterPromotion() {
  const productsAll = useSelector((state) => state.products1.productsAll)

  return (
    <div className='w-full px-2 py-3 h-full'>
      <div>
        {productsAll?.length > 0 ? (
          <Swiper
          className='p-3'
          modules={[Navigation, Scrollbar, A11y, Pagination]}
          navigation={true}
          pagination={{ 
            dynamicBullets: true,
          }}
          scrollbar={{ hide: false }}
          spaceBetween={25}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {productsAll?.filter(item => item.mark === 'Акция').map((mark, idx)=> (
            <SwiperSlide key={idx}>
              <CardItem data={mark} />
            </SwiperSlide>
          ))}
        </Swiper>
        ) : (
          <div className='flex justify-center py-3'><Loader /></div>
        )}
      </div>
    </div>
  )
}