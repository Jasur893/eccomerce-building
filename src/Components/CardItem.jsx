import Card from 'react-bootstrap/Card'
import CaruselCards from './CaruselCards'
import { Link } from 'react-router-dom'
// import {useState} from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'


export default function CardItem(props) {
  const {value2, value8} = useContext(ProductContext)
  const addToCart = value2;
  const toggleFavorite = value8;
  const {mark, id, productImage, productType, productTittle, price, isLiked} = props?.data
  // const isSetFavorited = () => setFavorited(!favorited);
  // const [favorited, setFavorited] = useState(false);


  let className = 'setmark'
  if (props.data?.mark === 'Новинка') {
    className += ' color_purple'
  } else if (props.data?.mark === 'Акция') {
    className += ' color_oranged'
  } else {
    className += ' '
  }

  return (
    <Card className='relative border-0 flex flex-col transition ease-in-out delay-150 hover:translate-y-1'>
      <div className='flex justify-between align-center p-2'>
        <span className={className}>{mark}</span>
        <div className='pl-2 pr-1 flex justify-end align-center leading-none'>
          <span className='text-gray-300 pr-4'>
            <i className='fa-solid fa-chart-simple'></i>
          </span>


            <div className='relative w-[16px] h-[16px]'>
              <span
                className='absolute top-0 right-0 left-0 w-[18px] h-[18px] border cursor-pointer'
                onClick={() => toggleFavorite(id)}
                // checked={favorited}
                // onChange={isSetFavorited}
                // type="checkbox"
                // value='showhide'
              />
              {isLiked ?  (
                  <i className="text-[18px] text-red-500 fa-solid fa-heart"></i>
                ) : (
                  <i className="text-[18px] text-gray-300 fa-sharp fa-regular fa-heart"></i>
              )}
              </div>
        </div>
      </div>

      <CaruselCards fotos={productImage} />

      <div className='p-2'>
        <Link
          to={`/about-card/${id}/${productType}/*`}
          className='no-underline hover:text-orange-700 text-gray-900 text-sm mb-1'
        >
          <p className=' leading-[15px] mb-1'>
            {String(productTittle).slice(0, 28) + '...'}
          </p>
        </Link>
        <div className='w-[90%]'>
          <div className='flex justify-start items-center flex-wrap'>
            <span className='text-xl font-semibold pr-2'>
              {price} ₽
            </span>
            {/* <span className='text-[14px] line-through text-gray-300 pr-3'>
                720 ₽
              </span> */}
            <span className='text-xs md:text-sm whitespace-nowrap text-green-700'>
              <i className='fa-solid fa-check'></i> в наличии
            </span>
            <div 
              onClick={() => addToCart(props?.data, id)}
              className='absolute bottom-0 right-0 border-2 border-orange-700 rounded-br-md flex justify-center align-center p-1 lg:p-2 text-xs cursor-pointer'>
              <i className='text-base lg:text-xl leading-none fa-solid fa-cart-shopping'></i>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

