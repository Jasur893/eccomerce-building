import Card from 'react-bootstrap/Card'
import CaruselCards from './CaruselCards'
import { Link } from 'react-router-dom'

export default function CardItem(props) {
  // props.data?.mark === 'Новинка' ? 'bg-purple-900 text-white leading-none p-1' : 'p-0'

  let className = 'setmark';
  if(props.data?.mark === 'Новинка'){
    className += ' color_purple'
  }else if(props.data?.mark === 'Акция') {
    className += ' color_oranged'
  } else{
    className += ' '
  }

  return (
      <Card className='relative border-0 flex flex-col transition ease-in-out delay-150 hover:translate-y-1'>
        <div className='flex justify-between align-center p-2'>
          <span className={className}>
            {props.data?.mark}
          </span>
          <div className='pl-2 pr-1 flex justify-end align-center leading-none'>
            <span className='text-gray-300 pr-2'>
              <i className='fa-solid fa-chart-simple'></i>
            </span>
            <span>
              <i className='text-gray-300 align-middle fa-regular fa-heart'></i>
            </span>
          </div>
        </div>

        <CaruselCards fotos={props.data?.productImage} />

        <div className='p-2'>
          <Link to={`/about-card/${props.data?.id}/${props.data?.productType}/*`} className='no-underline hover:text-orange-700 text-gray-900 text-sm mb-1'>
            <p className=' leading-[15px] mb-1'>{props.data?.productTittle.slice(0, 29) + '...'}</p>
          </Link>
          <div className='w-[90%]'>
            <div className='flex justify-start items-center flex-wrap'>
              <span className='text-xl font-semibold pr-2'>{props.data?.price} ₽</span>
              {/* <span className='text-[14px] line-through text-gray-300 pr-3'>
                720 ₽
              </span> */}
              <span className='text-xs md:text-sm whitespace-nowrap text-green-700'>
                <i className='fa-solid fa-check'></i> в наличии
              </span>
              <div className='absolute bottom-0 right-0 border-2 border-orange-700 rounded-br-md flex justify-center align-center p-1 lg:p-2 text-xs'>
                <i className='text-base lg:text-xl leading-none fa-solid fa-cart-shopping'></i>
              </div>
            </div>
          </div>
        </div>
      </Card>
  )
}
