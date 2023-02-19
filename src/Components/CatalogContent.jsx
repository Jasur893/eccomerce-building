import { NavLink, Route, Routes } from 'react-router-dom'
import { getcatalogNames } from '../catalogApi'
import Catalogs from './Catalogs'

export default function CatalogContent() {
  const catalogs = getcatalogNames()
  let activeStyle = {
    backgroundColor: 'orangered',
    color: 'white'
  }

  return (
    <div className='bg-slate-100'>
      <div className='container_content'>
        <div className='bg-slate-100'>
          <h2 className='text-left py-2'>Каталог</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px]'>
            {catalogs.map(({ name, id }) => (
              <NavLink
                key={id}
                className='py-2 no-underline rounded-sm catlog_hover'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={id}
              >
              {name}
            </NavLink>
            ))}
          </div>

          <Routes>
            <Route path=':catalogId/*' element={<Catalogs />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
