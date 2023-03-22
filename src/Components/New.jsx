import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import CardItem from './CardItem'

export default function New() {
  const {value1} = useContext(ProductContext)
  const productsAll = value1

  const productAll = productsAll.filter(item => item.mark === 'Новинка').map(item => (
    <CardItem key={item.id} data={item}/>
  ))

  return (
    <div className='pt-4'>
      <div className='container_content'>
        <h4 className='text-lg md:text-3xl mb-3'>Новинки</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-3 pb-4'>
          {productAll}
        </div>
      </div>
    </div>
  )
}