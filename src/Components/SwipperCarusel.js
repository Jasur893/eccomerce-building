import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function SwipperCarusel(props) {
  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)

  const sliderArr = props.brandArr.map((el, idx) => {
    return (
      <SwiperSlide>
        <img key={idx} className='d-block w-100' src={el} alt='1 slide' />
      </SwiperSlide>
    )
  })

  return (
    <div className='flex justify-center align-center w-full px-2 h-full'>
      <div className='pr-2 flex flex-col justify-center'>
        <span
          ref={prevRef}
          className='cursor-pointer text-gray-300 hover:text-black'
        >
          <i
            style={{ paddingTop: '4px', paddingBottom: '4px' }}
            className='bg-white rounded-full px-2 fa-solid fa-angle-left'
          ></i>
        </span>
      </div>
      <div className='w-[95%]'>
        <Swiper 
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
          {sliderArr}
        </Swiper>
      </div>
      <div className='pl-2 flex flex-col justify-center'>
        <span
          ref={nextRef}
          className='cursor-pointer text-gray-300 hover:text-black'
        >
          <i
            style={{ paddingTop: '4px', paddingBottom: '4px' }}
            className='bg-white rounded-full px-2 fa-solid fa-angle-right'
          ></i>
        </span>
      </div>
    </div>
  )
}
