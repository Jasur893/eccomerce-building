import { useParams } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { getcatalogNames } from '../catalogApi'
import { useState } from 'react'
import AccardionCatalogs from './AccardionCatalogs'
import CardItem from './CardItem'

export default function CatalogItems() {
  const { catalog2 } = useParams()
  const catalog = getcatalogNames()
  const [active, setActive] = useState(null)

  let activeStyle = {
    backgroundColor: 'rgb(249 115 22)'
  }

  return (
    <div className='h-full bg-slate-100 py-4'>
      <div className='container_content'>
        <h2 className='text-start'>{catalog2}</h2>

        <div className='h-full grid grid-cols-4 gap-x-3'>
          <div className='col-span-1 '>
            <div className='flex flex-col'>
              <div className=''>
                {catalog.map((catalogEl, catalogIdx) => (
                  <div key={catalogIdx}>
                    <NavDropdown
                      id='nav-dropdown-dark-example'
                      title={catalogEl.name}
                      menuVariant='white'
                      className='border pl-3 py-1 bg-gray-700 text-white'
                      drop='end'
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
              <div className='pt-2'>
                <AccardionCatalogs />
              </div>
              </div>
          </div>

          <div className='col-span-3'>
              <div className='grid grid-cols-3 gap-3'>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
