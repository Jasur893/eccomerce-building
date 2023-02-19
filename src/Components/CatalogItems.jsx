import { useParams } from 'react-router-dom'

export default function CatalogItems() {
  const {catalog2} = useParams()

  return (
    <div className='bg-emerald-500 py-4'>
      <div className='container_content'>
        <h2 className='text-start' >{catalog2}</h2>
        <h2 className='mb-0'>catalog itemlar boladi</h2>
      </div>
    </div>
  )
}