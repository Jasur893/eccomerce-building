import { Link, useParams } from 'react-router-dom'
import { getcatalogName } from '../catalogApi'
// import CatalogItems from './CatalogItems'

export default function Catalogs() {
  const { catalogId } = useParams()
  const catalog = getcatalogName(catalogId)

  return (
    <div className='bg-white mt-[2px] pt-3 pb-4'>
      <div className='container_content w-[90%] lg:w-[78%]'>
        <h1>{catalog.name}</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          {catalog.resources.map((sub) => (
            <li className='text-lg list-none overflow-hidden rounded-md text-center catalog_item' key={sub.id}>
              <div className='bg-slate-100 flex justify-center'>
                <div className='py-3 '>
                <img src={sub.image} className='w-full' alt={sub.id} />
                </div>
              </div>
              <Link
                className='my-0 py-2 no-underline block w-100 text-white transition duration-700 hover:bg-orange-700 bg-gray-700 '
                to={sub.id}
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}
