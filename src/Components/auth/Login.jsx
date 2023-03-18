import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import {startSession} from '../session.js'


export default function Login() {
  const {userValue3} = useContext(AuthContext)
  const logIn = userValue3
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    try{
      setLoading(true)
      let loginResponse = await logIn(email, password)
      startSession(loginResponse.user)
      setErrorMsg('')
      navigate('/lichniy-kabinet')
      setSuccessMsg('true')
    }catch {
      setErrorMsg('не удалось войти')
    }
    setLoading(false)
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
            required
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
            required
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