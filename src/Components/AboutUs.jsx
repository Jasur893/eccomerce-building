import aboutUs from '../img/aboutUs.jpg'

export default function AboutUs() {
  return (
    <div className='pt-5 pb-5 bg-slate-100 mx-auto'>
      <div className='container_content gap-y-4 grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <img src={aboutUs} className='w-full' alt="About"/>
        </div>
        <div className='md:ml-10 lg:ml-28'>
          <h3 className='leading-none text-3xl mb-6 text-black'>О нас</h3>
          <p className='text-base text-dark'>Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих.</p>
          <p className='text-base text-dark'>Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации предприятия</p>
          <button className='mt-8 text px-4 py-2 text-xs sm:text-lg transition duration-700 rounded-md bg-zinc-900 text-white hover:bg-orange-700'>ПЕРЕЙТИ В КАТАЛОГ  </button>
        </div>
      </div>
    </div>
  )
}