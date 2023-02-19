import { Link, useParams } from 'react-router-dom'
import { getcatalogName } from '../catalogApi'
// import CatalogItems from './CatalogItems'


export default function Catalogs() {
  const {catalogId} = useParams()
  const catalog = getcatalogName(catalogId)

  return (
    <div className='bg-blue-400 pt-3 pb-4'>
      <div className='container_content'>
      <h1>{catalog.name}</h1> 

      
        {catalog.resources.map((sub) => (
          <li className='text-lg inline px-3' key={sub.id}>
            <Link className='my-0' to={sub.id}>{sub.name}</Link>
          </li>
        ))}
  
      </div>


    </div>
  )
}

