import Card from 'react-bootstrap/Card'
import CaruselCards from './CaruselCards'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, showFavorite, hideFavorite, addComparision } from '../redux/actions'

export default function CardItem(props) {
  const cart = useSelector((state) => state.products1.cart)
  const dispatch = useDispatch()
  const {mark, id, productImage, productTittle, price, isLiked} = props?.data

  let className = 'setmark'
  if (props.data?.mark === 'Новинка') {
    className += ' color_purple'
  } else if (props.data?.mark === 'Акция') {
    className += ' color_oranged'
  } else {
    className += ' '
  }

  const cartShowAdd = cart?.find(item => item.id === id)
  const cartIsAdd = !cartShowAdd ? cartShowAdd :  Object(cartShowAdd).isAdded
  
  return (
    <Card className='relative min-h-[360px] border-0 flex flex-col transition ease-in-out delay-150 hover:translate-y-1'>
      <div className='flex justify-between align-center p-2 h-[40px]'>
        <span className={className}>{mark}</span>
        <div className='pl-2 pr-1 flex justify-end align-center leading-none'>
          <span onClick={() => dispatch(addComparision(props?.data, id))} className='text-gray-300 hover:text-green-400 pr-4 cursor-pointer'>
            <i className='fa-solid fa-chart-simple'></i>
          </span>

          <div className='relative w-[16px] h-[16px]'>
            <span
              className='absolute top-0 right-0 left-0 w-[18px] h-[18px] cursor-pointer'
              onClick={() => (!isLiked ? dispatch(showFavorite(id)) : dispatch(hideFavorite(id)))}
            ></span>
            {isLiked ? (
              <i className='text-[18px] text-red-500 fa-solid fa-heart'></i>
            ) : (
              <i className='text-[18px] text-gray-300 fa-sharp fa-regular fa-heart'></i>
            )}
          </div>
        </div>
      </div>

      <CaruselCards fotos={productImage} />

      <div className='p-2'>
        <Link
          to={`/about-card/${id}`}
          className='no-underline hover:text-orange-700 text-gray-900 text-sm mb-1'
        >
          <p className=' leading-[15px] mb-1'>
            {String(productTittle).slice(0, 28) + '...'}
          </p>
        </Link>
        <div className='w-[90%]'>
          <div className='flex justify-start items-center flex-wrap'>
            <span className='text-xl font-semibold pr-2'>{price} ₽</span>
            {/* <span className='text-[14px] line-through text-gray-300 pr-3'>
                720 ₽
              </span> */}
            <span className='text-xs md:text-sm whitespace-nowrap text-green-700'>
              <i className='fa-solid fa-check'></i> в наличии
            </span>
            <div
              onClick={() => !cartIsAdd ? dispatch(addToCart(props?.data, id)) :  dispatch(removeFromCart(id))}
              className={`${cartIsAdd ? 'bg-orange-700' : 'bg-white'} absolute bottom-0 right-0 border-orange-700 border-2 rounded-br-md flex justify-center align-center p-1 lg:p-2 text-xs cursor-pointer`}
            >
              {cartIsAdd ? (
                <i className='text-base lg:text-xl text-white leading-none px-[2px] fa-regular fa-circle-check'></i>
                ) : (
                <i className='text-base lg:text-xl leading-none text-orange-700 fa-solid fa-cart-shopping'></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
