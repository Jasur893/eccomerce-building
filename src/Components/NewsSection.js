import moment from 'moment/moment'
import news01 from '../img/news/news01.jpg'
import news02 from '../img/news/news02.png'

export default function NewsSection() {
  return (
    <div className='container_content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-3 py-5'>
      <div className='row-span-2'>
        <h1 className='text-3xl text-black'>Новости</h1>
        <p className='pr-3'>Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих. Компании имеют статус юридического лица.</p>
        <button className=' mt-3 lg:mt-8 mb-3 lg:mb-1 px-4 py-2 text-xs sm:text-lg transition duration-700 rounded-md bg-zinc-900 text-white hover:bg-orange-700'>ПЕРЕЙТИ К НОВОСТЯМ</button>
      </div>
      <div>
        <div className='w-full'>
          <img src={news01} className='w-full' alt="news" />
        </div>
        <h3 className='mt-1 mb-0 text-black text-lg'>Название новости</h3>
        <span className='text-dark'>{moment().format('DD MMMM YYYY')}</span>
      </div>

      <div>
        <div className='w-full'>
          <img src={news02} className='w-full' alt="news" />
        </div>
        <h3 className='mt-1 mb-0 text-black text-lg'>Название новости</h3>
        <span className='text-dark'>{moment().format('DD MMMM YYYY')}</span>
      </div>

      <div>
        <div className='w-full'>
          <img src={news02} className='w-full' alt="news" />
        </div>
        <h3 className='mt-1 mb-0 text-black text-lg'>Название новости</h3>
        <span className='text-dark'>{moment().format('DD MMMM YYYY')}</span>
      </div>

      <div>
        <div className='w-full'>
          <img src={news01} className='w-full' alt="news" />
        </div>
        <h3 className='mt-1 mb-0 text-black text-lg'>Название новости</h3>
        <span className='text-dark'>{moment().format('DD MMMM YYYY')}</span>
      </div>
    </div>
  )
}