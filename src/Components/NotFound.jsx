import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='bg-not_found h-[400px]'>
      <div className='w-full h-full bg_opacity'>
        <div className='flex align-middle h-full justify-center items-center'>
          <div className='text-center px-2'>
            <p className='text-xl sm:text-3xl font-semibold'>К сожалению, страница не найдена</p>
            <p className='text-sm sm:text-xl pb-2'>
              Но мы обязательно всё починим,<br/> а пока попробуйте:
            </p>
            <Link to='/' className='transition duration-700 hover:bg-orange-500 bg-orange-700 text-sm sm:text-base rounded-md no-underline py-2 px-3 text-white'>
              ВЕРНУТЬСЯ НА ГЛАВНУЮ
            </Link>
            <h1 className='text-8xl mt-4'>404</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
