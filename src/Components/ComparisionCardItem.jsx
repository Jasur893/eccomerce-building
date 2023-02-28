export default function ComparisionCardItem(props) {
  return (
    <div className='relative w-[200px] bg-gray-600  rounded-md p-2'>
      <div className='flex justify-center'>
        <img src={props.comparisionCard01} className='w-[80px] h-[80px]' alt='img' />
      </div>
        <p className='text-[14px] text-white'>Эмаль Condor ПФ-115 жёлтая 1,8 кг</p>
        <span className='text-white'>500 ₽</span>
        <div className='absolute bottom-2 right-2 text-orange-700'>
          <i className='fa-solid fa-cart-shopping'></i>
        </div>
    </div>
  )
}
