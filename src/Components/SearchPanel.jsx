import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchPanel({data}) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord)
    const newFilter = data?.filter((value) => {
      return value.productTittle.toLowerCase().includes(searchWord.toLowerCase())
    })
    if(searchWord === ""){
      setFilteredData([])
    } else{
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className='relative w-full'>
      <div className='bg-white rounded-md flex flex-col justify-center w-[240px] h-[40px] search_panel-w ml-3'>
        <input
          onChange={handleFilter}
          value={wordEntered}
          className='py-0 max-w-[215px] pl-1 outline-none'
          type='text'
          placeholder='Поиск по каталогу'
        />
        
        {filteredData?.length === 0 ? (
          <span className='absolute top-2 right-1 cursor-pointer '><i className="fa-solid fa-magnifying-glass"></i></span>
        ) : (
          <span onClick={clearInput} className='absolute top-2 right-2 cursor-pointer '><i className="fa-solid fa-xmark"></i></span>
        )} 
      </div>
      
      {filteredData?.length !== 0 && (
        <div className='absolute top-11 right-0 z-20 border w-full sm:w-[350px] max-h-[400px] overflow-y-auto bg-white rounded-md'>
          {filteredData?.map((value, idx) => {
            return (
              <div key={idx} className='flex justify-between items-center py-1 hover:bg-gray-200 px-2'>
                <img src={value.productImage} className='w-[35px] h-[35px]' alt="foto"/>
                <Link to={`/about-card/${value.id}`} className='no-underline grow hover:text-gray-900 text-gray-900'><span className='pl-3'>{String(value.productTittle).slice(0, 20)+ "..."}</span></Link>
                <span className='font-semibold'>{value.price} ₽</span>
              </div>
            )
          })}
      </div>)}
    </div>
  )
}