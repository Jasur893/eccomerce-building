import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { getcatalogNames } from '../catalogApi'
import AccardionCatalogs from './AccardionCatalogs'
import CardItem from './CardItem'
import Loader from './Loader'
import { useSelector } from 'react-redux'

export default function CatalogItems() {
  const productsAll = useSelector((state) => state.products1.productsAll)
  const { catlogName } = useParams()
  const catalog = getcatalogNames()
  const [active, setActive] = useState(null)

  let activeStyle = {
    backgroundColor: 'rgb(249 115 22)'
  }

  return (
    <div className='h-full bg-slate-100 py-4'>
      <div className='container_content'>
        <h2 className='text-start'>{catlogName}</h2>

        <div className='h-full grid grid-cols-4 gap-x-3'>
          <div className='col-span-4  sm:col-span-1'>
            <div className='flex flex-col'>
              <div className=''>
                {catalog.map((catalogEl, catalogIdx) => (
                  <div className='w-full' key={catalogIdx}>
                    <NavDropdown
                      id='nav-dropdown-dark-example'
                      title={catalogEl.name}
                      menuVariant='white'
                      className='text-[12px] lg:text-base border w-full break-words pl-3 py-1 bg-gray-700 text-white'
                      drop='down'
                      onClick={() => setActive(catalogEl.name)}
                      style={active=== catalogEl.name ? activeStyle : null}
                    >
                      {catalogEl.resources.map((sub) => (
                        <div key={sub.id}>
                          <NavDropdown.Item to={sub.id}>
                            {sub.name}
                          </NavDropdown.Item>
                        </div>
                      ))}
                    </NavDropdown>
                  </div>
                ))}
              </div>
              <div className='pt-2 pb-3'>
                <AccardionCatalogs />
              </div>
              </div>
          </div>

          <div className='col-span-4 sm:col-span-3'>
            {productsAll?.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {productsAll?.filter(item => item.productType === catlogName).map((item) => (
                  <div key={item.id}>
                    <CardItem  data={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-3'>
                <Loader />
              </div>
            )}
          </div>
          {}
        </div>
      </div>
    </div>
  )
}
