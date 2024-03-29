import { doc, getDoc, setDoc} from 'firebase/firestore';
import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../FirebaseConfigs/firebaseConfig';

export default function PersonalInformation() {
  const userSession = useSelector((state) => state.session2.userSession)
  const [surName, setSurName] = useState('')
  const [firstName, setFirsName] = useState('')
  const [numberPhone, setnumberPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [frame, setFrame] = useState('')
  const [house, setHouse] = useState('')
  const [apartment, setApartment] = useState('')

  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false) 

  useEffect(() => {
    //get user data and paste data input 
    if(userSession?.uid !== null) {
      const getUserData = async() => {
        const docRef = doc(db, "users", `${userSession?.uid}`);
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const dataUser = docSnap.data()
          // console.log(dataUser)
          setSurName(dataUser.surName)
          setFirsName(dataUser.firstName)
          setnumberPhone(dataUser.numberPhone)
          setEmail(dataUser.email)
          setCity(dataUser.city)
          setStreet(dataUser.street)
          setFrame(dataUser.frame)
          setHouse(dataUser.house)
          setApartment(dataUser.apartment)
        } else {
          console.log("No such document!");
        }
      }
      getUserData()
    }
  },[userSession?.uid])


  // set data user
  const setUserData = useCallback(() => {
    setIsLoading(true)
    setDoc(doc(db, 'users', userSession?.uid), {
      idUser: userSession?.uid,
      surName: surName,
      firstName: firstName,
      numberPhone: numberPhone,
      email: email,
      city: city,
      street: street,
      frame: frame,
      house: house,
      apartment: apartment
    }).then(() => {
      setSuccessMsg('ваши данные успешно установлены')
      
      setTimeout(()=> {
        setSuccessMsg('')
        setIsLoading(false)
      }, 2000)
    }).catch((error) => {
      const errorEr = error.code
      setErrorMsg(errorEr)
      setTimeout(()=> {
        setErrorMsg('')
        
      }, 4000)
    })

  },[surName, firstName, numberPhone, email, city, street, frame, house, apartment, userSession?.uid])

  return (
    <div>
      <div className='bg-white p-4 rounded-md'>
        <p className='text-xl'>Личные данные</p>
        {successMsg?.length > 0 && <span className='bg-green-500 text-white p-2'>{successMsg}</span>}
        {errorMsg?.length > 0 && <span className='bg-red-500 text-white p-2'>{errorMsg}</span>}
        <div className='grid grid-cols-2 gap-4 md:gap-14 mb-2'>
          <div className='px-3 col-span-2 md:col-span-1'>
            <label htmlFor='surname' className='w-full text-xs text-gray-600'>
              Фамилия
            </label>
            <input
              onChange={(e) => setSurName(e.target.value)}
              value={surName}
              className='border-b-2 focus:outline-0 mb-2 w-[90%]'
              type='text'
              name='surName'
              id='surname'
            />

            <label htmlFor='firstName' className='w-full text-xs text-gray-600'>
              Имя
            </label>
            <input
              onChange={(e) => setFirsName(e.target.value)}
              value={firstName}
              className='border-b-2 focus:outline-0 mb-2 w-[90%]'
              type='text'
              name='firstName'
              id='firstName'
            />

            <label htmlFor='phone' className='w-full text-xs text-gray-600'>
              Телефон
            </label>
            <input
              onChange={(e) => setnumberPhone(e.target.value)}
              value={numberPhone}
              className='border-b-2 focus:outline-0 mb-2 w-[90%]'
              type='text'
              name='phone-number'
              id='phone'
            />

            <label htmlFor='email' className='w-full text-xs text-gray-600'>
              Электронная почта
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='border-b-2 focus:outline-0 mb-2 w-[90%]'
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div className='mx-3 col-span-2 md:col-span-1'>
            <label htmlFor='city' className='w-full text-xs text-gray-600'>
              Город
            </label>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className='border-b-2 focus:outline-0 mb-2 w-[90%]'
              type='text'
              name='city'
              id='city'
            />

            <label htmlFor='street' className='w-full text-xs text-gray-600'>
              Улица
            </label>
            <input
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              className='border-b-2 focus:outline-0 mb-2 w-[90%]'
              type='text'
              name='street'
              id='street'
            />

            <label htmlFor='frame' className='w-full text-xs text-gray-600'>
              Корпус
            </label>
            <input
              onChange={(e) => setFrame(e.target.value)}
              value={frame}
              className='border-b-2 focus:outline-0 mb-2 w-[90%]'
              type='text'
              name='frame'
              id='frame'
            />

            <div className='flex justify-between gap-3 w-[90%]'>
              <div>
                <label htmlFor='house' className='w-full text-xs text-gray-600'>
                  Дом
                </label>
                <input
                  onChange={(e) => setHouse(e.target.value)}
                  value={house}
                  className='border-b-2 focus:outline-0 mb-2 w-[100%]'
                  type='text'
                  name='house'
                  id='house'
                />
              </div>
              <div>
                <label
                  htmlFor='apartment'
                  className='w-full text-xs text-gray-600'
                >
                  Квартира
                </label>
                <input
                  onChange={(e) => setApartment(e.target.value)}
                  value={apartment}
                  className='border-b-2 focus:outline-0 mb-2 w-[100%]'
                  type='text'
                  name='apartment'
                  id='apartment'
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type='button'
          onClick={setUserData}
          disabled={isLoading}
          className={`${isLoading ? 'bg-gray-200' : 'bg-gray-600'} text-[10px] md:text-base py-2 md:py-2 px-3 text-white rounded-md`}
        >
          СОХРАНИТЬ ИЗМЕНЕНИЯ
        </button>

      </div>
    </div>
  )
}
