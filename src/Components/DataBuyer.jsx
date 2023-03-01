import { useState } from 'react'

export default function DataBuyer() {
  const [surName, setSurName] = useState('')
  const [numberPhone, setnumberPhone] = useState('')
  const [firstName, setFirsName] = useState('')
  const [email, setEmail] = useState('')

  return (
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
      </div>
      <div className='mx-3 col-span-2 md:col-span-1'>
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
    </div>
  )
}
