import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import FilterNew from './FilterNew'
import FilterStock from './FilterStock'
import FilterHitSale from './FilterHitSale'
import { useSelector } from 'react-redux'

 
export default function FilterSlider() {
  const productsAll = useSelector((state) => state.products1.productsAll)

  return (
      <div className='bg-black'>
        <Tabs
          variant='pills'
          defaultActiveKey='home'
          id='uncontrolled-tab-example'
          className='borderTab container_content py-1 gap-x-1 md:gap-x-10'
        >
          <Tab
            className='borderTab bg-dark border-t-0'
            eventKey='home'
            title='Новинки'
          >
            <div className='container_content'>
              <FilterNew data={productsAll} />
            </div>
          </Tab>
          <Tab className='borderTab bg-dark' eventKey='profile' title='Акции'>
            <div className='container_content'>
              <FilterStock data={productsAll} />
            </div>
          </Tab>
          <Tab
            className='borderTab bg-dark'
            eventKey='contact'
            title='Хиты продаж'
          >
            <div className='container_content'>
              <FilterHitSale data={productsAll} />
            </div>
          </Tab>
        </Tabs>
      </div>
    )
}


