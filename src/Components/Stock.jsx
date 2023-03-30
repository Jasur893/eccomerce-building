import { useSelector } from 'react-redux'
import CardItem from './CardItem'

export default function Stock() {
  const productsAll = useSelector((state) => state.products1.productsAll)

  const productAll = productsAll?.filter(item => item.mark === 'Акция').map(item => (
    <CardItem key={item.id} data={item}/>
  ))

  return (
    <div className='pt-4'>
      <div className='container_content'>
        <h4 className='text-lg md:text-3xl mb-3'>Акции</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-3 pb-4'>
          {productAll}
        </div>
      </div>
    </div>
  )
}