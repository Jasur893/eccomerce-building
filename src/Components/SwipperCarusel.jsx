import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function SwipperCarusel(props) {
  return (
    <div className='w-full px-2 h-full'>
      <div>
        <Swiper 
          modules={[Navigation, Scrollbar, A11y]}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ hide: false }}
          spaceBetween={50}
          slidesPerView={6}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {props.brandArr?.map((el, idx) => (
            <SwiperSlide key={idx}>
              <img className='d-block w-100' src={el} alt='1 slide' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
