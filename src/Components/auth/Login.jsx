import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


export default function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const auth = getAuth();
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      setSuccessMsg('Logged in successfully, You will now be automaticaly redirect to personal page')

      setEmail('')
      setPassword('')
      setErrorMsg('')
      setTimeout(() => {
        setSuccessMsg('')
        navigate('/lichniy-kabinet/*')
      }, 3000)
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(error.message);
      if(error.message == 'Firebase: Error (auth/invalid-email).'){
        setErrorMsg('Please fill all required fields')
      }
      if(error.message == 'Firebase: Error (auth/user-not-found).'){
        setErrorMsg('Email not found')
      }
      if(error.message == 'Firebase: Error (auth/wrong-password).'){
        setErrorMsg('Wrong Password')
      }
    })
  }


  return (
    <div className='flex justify-center py-3'>
      <div className='container_content bg-white w-[60%]'>
        <h2 className='text-center pt-2'>Вход</h2>
        <form className=''>
          {successMsg && <div className='p-2 rounded-md bg-green-500 text-green-900'>{successMsg}</div>}
          {errorMsg && <div className='p-2 rounded-md bg-red-500 text-red-900'>{errorMsg}</div>}
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
            onClick={handleLogin}
          >
            Вход
          </button>
          <div className='my-2'>
            <span className='pr-2 font-bold'>нет учетной записи?</span>
            <Link to='/signup'>Регистрация</Link>
          </div>
        </form>
      </div>
    </div>
  )
}