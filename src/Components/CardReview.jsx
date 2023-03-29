import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../FirebaseConfigs/firebaseConfig'
import ReviewItem from './ReviewItem'
import { useSelector } from 'react-redux'

export default function CardReview({nameId}) {
  const userSession = useSelector((state) => state.userSession)
  const [reviews, setReviews] = useState([])
  const [userName, setUserName] = useState('')
  const [comment, setComment] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  
  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  //get comments
  useEffect(()=> {
    const getAllComments = async() => {
      const commentArray = []
      await getDocs(collection(db, `rewiew-${nameId}`)).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commentArray.push({...doc.data()})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      setReviews(commentArray)
    }
    getAllComments()
  },[nameId])

  //add comment
  const addComment = async() => {
    setIsLoading(true)
    if(userName === '' || userName === ' '){
      setIsLoading(true)
      return setErrorMsg('не должно быть пробелов')
    }
    if(comment === '' || comment === ' '){
      setIsLoading(true)
      return setErrorMsg('не должно быть пробелов')
    }

    try {
      await addDoc(collection(db, `rewiew-${nameId}`), {name: userName, comment: comment, createAdt: new Date().getTime()})
      setUserName('')
      setComment('')
      setShowModal(false)
      setIsLoading(false)
    } catch (error) {
      setErrorMsg('не удалось ')
    }
    setIsLoading(false)
        
  }

  return (
    <div className='relative'>
      <div className='min-h-[280px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          {reviews.length > 0 ? <ReviewItem reviews={reviews}/> : <p className='text-center text-xl col-span-2'>В данный момент нет отзывы</p>}
      </div>
      </div>
      <div className='text-center mt-3 '>
        {userSession?.uid ? null : <p className='mb-0 text-green-400'>вы должны войти в систему</p> }
        <button
          onClick={handleShow}
          disabled={userSession?.uid ? false : true}
          className='hover:bg-orange-800 bg-orange-700 text-white rounded-md py-2 px-3'
        >
          ОСТАВИТЬ ОТЗЫВ
        </button>
      </div>

      {showModal && (
        <div className='absolute top-0 right-0  left-0 h-full modal_window'>
          <div className='h-full flex justify-center'>
            <div className='relative px-4 py-2 w-[440px] h-[310px] bg-white top-[3%]'>
            {errorMsg && <h5>{errorMsg}</h5>}
              <h4 className='text-center text-lg'>Оставить отзыв</h4>
              <div className='mt-3 flex justify-between'>
                <span className='text-xs sm:text-base font-medium'>
                  Ваше имя
                </span>
                <input
                  onChange={(e)=> setUserName(e.target.value)}
                  value={userName}
                  className='text-[12px] w-[60%] border-b focus:outline-none'
                  type='text'
                  name='name'
                  placeholder='Ваше имя'
                />
              </div>
              <div className='mt-3 flex justify-between gap-5'>
                <span className='text-xs sm:text-base font-medium'>
                  Оставьте свой
                  <br />
                  комментарий
                </span>
                <textarea
                  onChange={(e)=> setComment(e.target.value)}
                  value={comment}
                  className='border text-[12px] w-[60%] h-[100px] focus:outline-none resize-none'
                  name='comments'
                  placeholder='Ваш комментарий'
                ></textarea>
              </div>
              <div className='relative mt-5'>
                <p className='text-[9px] w-[50%] mb-0'>
                  Перед отправкой отзыва, пожалуйста, ознакомьтесь с правилами
                  публикации.
                </p>
                {userName.length > 0 && comment.length > 0 ? (<button
                  onClick={ addComment}
                  disabled={isLoading}
                  className={`${isLoading ? 'bg-orange-800' : 'bg-orange-700'} absolute bottom-0 right-0 hover:bg-orange-800 bg-orange-700 text-white rounded-md text-xs sm:text-lg py-1 sm:py-2 px-2 sm:px-3`}
                >
                  ОПУБЛИКОВАТЬ
                </button>) : null}
              </div>
              <span
                onClick={handleClose}
                className='absolute top-0 right-2 hover:text-black text-gray-600 cursor-pointer'
              >
                <i className='fa-solid fa-xmark'></i>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
