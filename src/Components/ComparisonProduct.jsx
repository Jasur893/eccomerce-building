import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { NavLink, Route, Routes } from 'react-router-dom'
import { getcatalogNames } from '../catalogApi'
import ComparisionList from './ComparisionList'

export default function ComparisonProduct() {
  // const comparision = useSelector((state) => state.products1.comparision)
  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)
  const [active, setActive] = useState(null)

  const catalog = getcatalogNames()

  return (
    <div className='bg-slate-100'>
      <div className='container_content'>
        <div className='relative'>
          <h3 className='text-3xl pt-3'>Сравнение товаров</h3>

          <div className='absolute bottom-0 right-0 flex'>
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
        </div>

        <div className='pt-3 pb-1'>
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
            slidesPerView={5}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {catalog.map((item) => (
              Object.values(item.resources).map((resoEl) => (
                <SwiperSlide key={resoEl.id} onClick={() => setActive(resoEl.id)} className={`comparition_swipper-space ${active === resoEl.id && "active"}`}
                >
                  <NavLink 
                    to={`${resoEl.id}/${resoEl.name}`}
                    className='text-white no-underline min-w-max w-full text-center'
                  >
                    <p className='mb-0 py-2 '>{resoEl.name}</p>
                  </NavLink>
                </SwiperSlide>
              ))
            ))}
          </Swiper>
        </div>
            
          <div className='mt-3 scroll_position' >
            <Routes>
              <Route path=':catalogId/:catalogName' element={<ComparisionList/>} />
            </Routes>
          </div>
        
      </div>
    </div>
  )
}

