import CardsSection from './CardsSection';
import { getcatalogNames } from '../catalogApi'; 

export default function CardsSectionContent() {
  const getCatalog = getcatalogNames()

  const catalogNames =  getCatalog.map((itemEl) => (
    Object.values(itemEl.resources).map((resursEl) => (
      <CardsSection key={resursEl.id} elName={resursEl.name}/>
    ))
  ))

  return (
    <div className='pt-3 pb-5 bg-slate-100'>
      <div className='container_content grid grid-cols-1 lg:grid-cols-2 gap-x-3'>
        {catalogNames}
      </div>
    </div>
  )
}
