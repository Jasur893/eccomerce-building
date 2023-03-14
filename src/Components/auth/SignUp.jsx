import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../FirebaseConfigs/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export default function SignUp() {
  const [firstname, setFirsName] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const initialcartvalue = 0

        addDoc(collection(db, 'users'), {
          firstname: firstname,
          email: email,
          phonenumber: phonenumber,
          password: password,
          cart: initialcartvalue,
          uid: user.uid
        }).then(() => {
          setSuccessMsg('New useradded successfuly, You will now be automaticaly redirect to login page.')
          setFirsName('')
          setPhoneNumber('')
          setEmail('')
          setPassword('')
          setErrorMsg('')
          setTimeout(() => {
            setSuccessMsg('')
            navigate('/login')
          }, 4000)
        })
        .catch((error) => { setErrorMsg(error.message) })
      })
      .catch((error) => {
        if(error.message == 'Firebase: Error (auth/invalid-email).'){
          setErrorMsg('Please fill all required fields')
        }
        if(error.message == 'Firebase: Error (auth/email-already-in-use).'){
          setErrorMsg('User already exists')
        }
      })
  }

  return (
    <div className='flex justify-center py-3'>
      <div className='container_content bg-white w-[60%]'>
        <h2 className='text-center pt-2'>Регистрация</h2>
        <form className='' onSubmit={handleSubmit}>
          {successMsg && <div className='p-2 rounded-md bg-green-500 text-green-900'>{successMsg}</div>}
          {errorMsg && <div className='p-2 rounded-md bg-red-500 text-red-900'>{errorMsg}</div>}
          <label htmlFor='firstName' className='w-full text-xs text-gray-600'>
            Имя
          </label>
          <input
            onChange={(e) => setFirsName(e.target.value)}
            value={firstname}
            className='border-b-2 focus:outline-0 mb-2 w-full'
            type='text'
            id='firstName'
          />

          <label htmlFor='email' className='w-full text-xs text-gray-600'>
            Электронная почта
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='border-b-2 focus:outline-0 mb-2 w-full'
            type='email'
            id='email'
          />

          <label htmlFor='phonenumber' className='w-full text-xs text-gray-600'>
            Телефон
          </label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phonenumber}
            className='border-b-2 focus:outline-0 mb-2 w-full'
            type='tel'
            id='phonenumber'
          />

          <label htmlFor='password' className='w-full text-xs text-gray-600'>
            Парол
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='border-b-2 focus:outline-0 mb-2 w-full'
            type='password'
            id='password'
          />
          <button
            className='w-full bg-gray-800 text-white pr-1 py-2 rounded-md'
            type='submit'
          >
            РЕГИСТРАЦИЯ
          </button>
          <div className='my-2'>
            <span className='pr-2 font-bold'>У вас уже есть аккаунт?</span>
            <Link to='/login'>Вход</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

