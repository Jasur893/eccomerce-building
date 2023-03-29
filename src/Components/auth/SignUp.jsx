import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfigs/firebaseConfig'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  // eslint-disable-next-line
  const [successMsg, setSuccessMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const handleSubmit =  async(e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)
    if(password !== passwordConfirm){
      setLoading(false)
      return setErrorMsg('пароль не подходит')
    }

    try{
      await  signUp(email, password)
      setErrorMsg('')
      navigate('/login')
      setLoading(false)
    }catch {
      setErrorMsg('не удалось создать учетную запись')
    }
    setLoading(false)
  }

  return (
    <div className='flex justify-center py-3'>
      <div className='container_content bg-white w-[60%]'>
        <h2 className='text-center pt-2'>Регистрация</h2>
        <form className='' onSubmit={handleSubmit}>
          {successMsg && <div className='p-2 rounded-md bg-green-500 text-green-900'>{successMsg}</div>}
          {errorMsg && <div className='p-2 rounded-md bg-red-500 text-red-900'>{errorMsg}</div>}
          
          <label htmlFor='email' className='w-full text-xs text-gray-600'>
            электронная почта
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='border-b-2 focus:outline-0 mb-2 w-full'
            type='email'
            id='email'
          />

          <label htmlFor='password' className='w-full text-xs text-gray-600'>
            парол
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='border-b-2 focus:outline-0 mb-2 w-full'
            type='password'
            id='password'
          />
          <label htmlFor='password-confirm' className='w-full text-xs text-gray-600'>
            подтвердить пароль
          </label>
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            className='border-b-2 focus:outline-0 mb-2 w-full'
            type='password'
            id='password-confirm'
          />
          <button 
            className='w-full bg-gray-800 text-white pr-1 py-2 rounded-md'
            type='submit'
            disabled={loading}
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

