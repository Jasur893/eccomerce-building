import { useState } from 'react';
import ComparisionCardItem from './ComparisionCardItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import ComTableTypeGruntovka from './comporisionTableItem/ComTableTypeGruntovka';
import ComTableTypeDreli from './comporisionTableItem/ComTableTypeDreli';
import ComTableTypeKrasteli from './comporisionTableItem/ComTableTypeKrasteli';
import ComTableTypeMontajniy from './comporisionTableItem/ComTableTypeMontajniy';
import ComTableTypeNasosi from './comporisionTableItem/ComTableTypeNasosi';
import ComTableTypeObuv from './comporisionTableItem/ComTableTypeObuv';
import ComTableTypePerforatori from './comporisionTableItem/ComTableTypePerforatori';
import ComTableTypePerchatki from './comporisionTableItem/ComTableTypePerchatki';
import ComTableTypePolivochniyInvertor from './comporisionTableItem/ComTableTypePolivochniyInvertor';
import ComTableTypeSlesarniy from './comporisionTableItem/ComTableTypeSlesarniy';
import ComtableTypeSpetsOdejda from './comporisionTableItem/ComtableTypeSpetsOdejda';
import ComTableTypeSuxiyeSmesi from './comporisionTableItem/ComTableTypeSuxiyeSmesi';
import ComTableTypeShlifmashinki from './comporisionTableItem/ComTableTypeShlifmashinki';

export default function ComparisionList() {
  const comparision = useSelector((state) => state.products1.comparision)
  const {catalogId, catalogName} = useParams()
  const [showOne, setShowOne] = useState(true)
 
  const filterArr = comparision.filter((el) => el.productType === catalogName)

  const filterTable = (catalogId, filterArr) => {
    switch (catalogId) {
      case 'gruntovka':
        return <ComTableTypeGruntovka filterArr={filterArr} />
      case 'krasteli':
        return <ComTableTypeKrasteli filterArr={filterArr} />
      case 'suxiye-smesi':
        return <ComTableTypeSuxiyeSmesi filterArr={filterArr} />
      case 'perforatori':
        return <ComTableTypePerforatori filterArr={filterArr}/>
      case 'dreli':
        return <ComTableTypeDreli filterArr={filterArr}/>
      case 'shlifmashinki':
        return <ComTableTypeShlifmashinki filterArr={filterArr} />
      case 'spets-odejda':
        return <ComtableTypeSpetsOdejda filterArr={filterArr} />
      case 'obuv':
        return <ComTableTypeObuv filterArr={filterArr}/>
      case 'perchatki':
        return <ComTableTypePerchatki filterArr={filterArr} />
      case 'polivochniy-invertor':
        return <ComTableTypePolivochniyInvertor filterArr={filterArr} />
      case 'nasosi':
        return <ComTableTypeNasosi filterArr={filterArr} />
      case 'slesarniy':
        return <ComTableTypeSlesarniy filterArr={filterArr} />
      case 'montajniy':
        return <ComTableTypeMontajniy filterArr={filterArr} />
      default:
        return
    }
  }

  return (
    <div className='scroll_position'>
      <p className='text-lg '><span className='font-bold'>{filterArr.length}</span> товаров</p>
      <div className='flex gap-3'>
        <div className='min-w-[130px] w-[130px]'></div>
        {comparision.filter((el) => el.productType === catalogName).map((itemEl) => (
          <ComparisionCardItem key={itemEl.id} {...itemEl} />
        ))}
      </div>
      
      <div onClick={() => setShowOne(!showOne)} className='mt-3 flex justify-between px-3 py-2 items-center cursor-pointer font-medium border mb-2'>
        <p  className='mb-0'>Основные характеристики</p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {showOne && <Table striped className='max-w-min'>
        <tbody className='border'>
          {filterTable(catalogId, filterArr)}
        </tbody>
      </Table>}
    </div>
  )
}