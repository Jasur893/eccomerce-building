import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import "swiper/css/pagination";
import CardItem from './CardItem'
import Loader from './Loader'

export default function FilterNew(props) {
  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)

  return (
    <div className='relative flex justify-center align-center w-full px-2 py-3 h-full'>
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
        {props.data.length > 0 ? (
          <Swiper
          className='p-3'
          modules={[Navigation, Scrollbar, A11y, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ 
            dynamicBullets: true,
          }}
          onInit={(swipper) => {
            swipper.params.navigation.prevEl = prevRef.current
            swipper.params.navigation.nextEl = nextRef.current
            swipper.navigation.init()
            swipper.navigation.update()
          }}
          scrollbar={{ hide: false }}
          spaceBetween={50}
          slidesPerView={4}
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {props.data.filter(item => item.mark === 'Новинка').map((mark, idx)=> (
            <SwiperSlide key={idx}>
              <CardItem data={mark} />
            </SwiperSlide>
          ))}
        </Swiper>
        ) : (
          <div className='flex justify-center py-3'><Loader /></div>
        )}
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