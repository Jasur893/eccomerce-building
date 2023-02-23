import { useState } from 'react'
import ReviewItem from './ReviewItem'

export default function CardReview() {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <div className='relative pr-3'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
      <div className='text-center mt-3 '>
        <button
          onClick={handleShow}
          className='hover:bg-orange-800 bg-orange-700 text-white rounded-md py-2 px-3'
        >
          ОСТАВИТЬ ОТЗЫВ
        </button>
      </div>

      {showModal && (
        <div className='absolute top-0 right-0  left-0 w-full h-full modal_window'>
          <div className=' w-full h-full flex justify-center'>
            <div className='relative px-4 py-2 w-[440px] h-[310px] bg-white top-[25%]'>
                <h4 className='text-center text-lg'>Оставить отзыв</h4>
                <div className='mt-3 flex justify-between'>
                  <span className='text-xs sm:text-base font-medium'>Ваше имя</span>
                  <input className='text-[12px] w-[60%] border-b focus:outline-none' type="text" name="name" placeholder='Ваше имя' />
                </div>
                <div className='mt-3 flex justify-between gap-5'>
                  <span className='text-xs sm:text-base font-medium'>Оставьте свой<br/>комментарий</span>
                  <textarea className='border text-[12px] w-[60%] h-[100px] focus:outline-none resize-none' name="comments" placeholder='Ваш комментарий'></textarea>
                </div>
                <div className='relative mt-5'>
                  <p className='text-[9px] w-[50%] mb-0'>Перед отправкой отзыва, пожалуйста, ознакомьтесь с правилами публикации.</p>
                  <button className='absolute bottom-0 right-0 hover:bg-orange-800 bg-orange-700 text-white rounded-md text-xs sm:text-lg py-1 sm:py-2 px-2 sm:px-3'>ОПУБЛИКОВАТЬ</button>
                </div>
                <span onClick={handleClose} className='absolute top-0 right-2 hover:text-black text-gray-600'><i className="fa-solid fa-xmark"></i></span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
