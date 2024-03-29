import { useDispatch } from 'react-redux';
import { removeComparision } from '../redux/actions';

export default function ComparisionCardItem(props) {
  const dispatch = useDispatch()
  return (
    <div className='relative min-w-[200px] w-[200px] h-[180px] bg-gray-500  rounded-md p-2'>
      <div className='flex justify-center'>
        <img src={props.productImage} className='w-[80px] h-[80px]' alt='img' />
      </div>
        <p className='text-[14px] text-white'>{props.productTittle.slice(0, 30)}</p>
        <div className='absolute bottom-1 right-0 left-0'>
          <div className='flex justify-between px-2'>
            <p className='text-white mb-0'>{props.price} ₽</p>
            <div
              onClick={() => dispatch(removeComparision(props?.id))}
              className='text-orange-500 cursor-pointer'
            >
              <i className='fa-solid fa-xmark'></i>
            </div>
          </div>
        </div>
    </div>
  )
}
