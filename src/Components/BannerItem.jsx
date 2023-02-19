export default function BannerItem(props) {
  return (
    <>
      <div className='w-full h-full relative rounded-md overflow-hidden'>
        <img
          src={props.banner}
          className='object-cover w-full h-full'
          alt='banner'
        />
        <p className='absolute z-10 top-2 pl-3 leading-6 text-start text-white  sm:text-2xl text-xl'>
          {props.title}
        </p>
        <div className='hover_link cursor-pointer absolute z-10 bottom-0 left-0 w-10 h-10 text-white flex justify-center items-center'>
          <i className='fa-solid fa-arrow-right'></i>
        </div>
      </div>
    </>
  )
}
