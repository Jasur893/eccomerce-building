import Card from 'react-bootstrap/Card'
import CaruselCards from './CaruselCards'

export default function CardItem() {
  return (
    <Card className='relative border-0 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105'>
      <Card.Body className='flex justify-between align-center p-2'>
        <span className='bg-purple-900 text-white leading-none p-1'>
          Новинка
        </span>
        <div className='flex justify-end align-center'>
          <span className='text-gray-300 pr-2'>
            <i className='fa-solid fa-chart-simple'></i>
          </span>
          <span>
            <i className='text-gray-300 align-middle fa-regular fa-heart'></i>
          </span>
        </div>
      </Card.Body>

      <CaruselCards />

      <Card.Body className='p-2'>
        <Card.Text className='text-sm mb-1'>
          Эмаль Condor ПФ-115 жёлтая 1,8 кг
        </Card.Text>
        <div className='w-4/5'>
          <div className='flex justify-start align-center flex-wrap'>
            <span className='text-xl font-semibold pr-1'>500 ₽</span>
            <span className='text-base line-through text-gray-300 pr-6'>
              720 ₽
            </span>
            <span className='text-sm text text-green-700'>
              <i className='fa-solid fa-check'></i> в наличии
            </span>
            <div className='absolute bottom-0 right-0 border-2 border-orange-700 rounded-br-md flex justify-center align-center p-2 text-xs'>
              <i className='text-xl leading-none fa-solid fa-cart-shopping'></i>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
