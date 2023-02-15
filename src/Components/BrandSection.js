import SwipperCarusel from './SwipperCarusel';
import brend01 from '../img/brands/brend01.png'
import brend02 from '../img/brands/brend02.png'
import brend03 from '../img/brands/brend03.png'
import brend04 from '../img/brands/brend04.png'

const brandArr = [brend01, brend02, brend03, brend04, brend01, brend02, brend03, brend04]


export default function BrandSection() {
  return (
    <div className='bg-black pt-3 pb-4'>
      <div className='container_content'>
        <p className='text-lg md:text-2xl  lg:text-3xl mb-0 pb-3 text-white'>Наши бренды</p> 
        <SwipperCarusel brandArr={brandArr} />
      </div>
    </div>
  )
}