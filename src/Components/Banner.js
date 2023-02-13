import banner01 from '../img/banner01.jpg'
import banner02 from '../img/banner02.jpg'
import banner03 from '../img/banner03.jpg'
import banner04 from '../img/banner04.jpg'

export default function Banner() {
  return (
    <div className='py-6 bg-dark'>
      <div className="container mx-auto  grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2">
          <div className='w-full h-full relative rounded-md overflow-hidden'>
            <img src={banner01} className="object-cover w-full h-full" alt="banner" />
            <p className='absolute z-10 top-5 w-full text-center text-white  sm:text-4xl text-2xl'>DeWALT - Инструмент<br/> настоящим характером</p>
            <div className='hover_link cursor-pointer absolute z-10 bottom-0 left-0 w-10 h-10 text-white flex justify-center items-center'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
       
        <div className="row-span-2">
          <div className='h-full relative rounded-md overflow-hidden'>
            <img src={banner02} className="object-cover w-full h-full" alt="banner" />
            <p className='absolute z-10 top-2 w-full text-start pl-5 text-white text-xl'>Акции</p>
            <div className='hover_link cursor-pointer absolute z-10 bottom-0 left-0 w-10 h-10 text-white flex justify-center items-center'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className='h-full relative rounded-md overflow-hidden'>
            <img src={banner03} className="object-cover w-full h-full" alt="banner" />
            <p className='absolute z-10 top-2 w-full text-start pl-5 text-white text-xl'>Новое поступление</p>
            <div className='hover_link cursor-pointer absolute z-10 bottom-0 left-0 w-10 h-10 text-white flex justify-center items-center'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className='h-full relative rounded-md overflow-hidden'>
            <img src={banner04} className="object-cover w-full h-full" alt="banner" />
            <p className='absolute z-10 top-2 w-full text-start pl-5 text-white text-xl'>Акции на сверла</p>
            <div className='hover_link cursor-pointer absolute z-10 bottom-0 left-0 w-10 h-10 text-white flex justify-center items-center'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


<i class="fa-solid fa-arrow-right"></i>