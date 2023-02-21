import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function AccardionCatalogs() {
  const [isBrend, setIsBrend] = useState(false)
  const [isCountry, setCountry] = useState(false)
  const [isColor, setIsColor] = useState(false)
  const [isKuryer, setisKuryer] = useState(false)
  
  const handleClickBrand = (e) =>  setIsBrend(e.target.checked);
  const handleClickCountry = (e) =>  setCountry(e.target.checked);
  const handleClickColor = (e) =>  setIsColor(e.target.checked);
  const handleClickKuryer = (e) =>  setisKuryer(e.target.checked);
  
  function resetCheck() {
    setIsBrend(false)
    setCountry(false)
    setIsColor(false)
    setisKuryer(false)
  }

  return (
    <div className=''>
      <Accordion bsPrefix alwaysOpen>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='0'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Цена, ₽</Accordion.Header>
          <Accordion.Body>
            <Form.Range />
            <div className='flex'>
              <Form.Control bsPrefix='form_number_input' type="number" />  {'-'} 
              <Form.Control bsPrefix='form_number_input' type="number" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='1'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Бренд</Accordion.Header>
          <Accordion.Body>
            <div className='flex flex-col pt-2'>
              {['Asko', 'Alpicool', 'Bertazzoni', 'Cold Vine', 'Dunavox', 'Neff', 'Новолукомль', 'Кнауф'].map((label) => (
                <label htmlFor={label} className='block'  key={label}>
                  <input type='radio' onChange={handleClickBrand} checked={isBrend} name='brand' value={label} id={label} />
                  {label}
                </label>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='2'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Старна производитель</Accordion.Header>
          <Accordion.Body>
            <div className='pt-2'>
              {['Англия', 'Болгария', 'Венесуэлла', 'Испания', 'Италия', 'Португалия', 'Россия', 'Словения'].map((label) => (
                <label htmlFor={label} className='block'  key={label}>
                  <input type='radio' onChange={handleClickCountry} checked={isCountry} name='country' value={label} id={label} />
                  {label}
                </label>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='3'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Цвет</Accordion.Header>
          <Accordion.Body>
            <div className='pt-2'>
              {['Белый', 'Голубой', 'Жёлтый', 'Зелёный', 'Красный', 'Оранжевый', 'Розовый'].map((label) => (
                <label htmlFor={label} className='block' key={label}>
                  <input type='radio' onChange={handleClickColor} checked={isColor} name='color' value={label} id={label}  />
                  {label}
                </label>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='4'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Способ доставки</Accordion.Header>
          <Accordion.Body>
            <div className='pt-2'>
              {['Самовывоз', 'Доставка курьером', 'Любой'].map((label) => (
                <label htmlFor={label} className='block' key={label}>
                  <input type='radio' onChange={handleClickKuryer} checked={isKuryer} name='kuryer' value={label} id={label} />
                  {label}
                </label>
              ))}
            </div>

            <div className='text-center'>
              <button onClick={resetCheck} className='text-xs p-1 hover:bg-gray-900 bg-gray-800'>СБРОСИТЬ ФИЛЬТР</button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


      
    </div>
  )
}
