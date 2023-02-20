import Accordion from 'react-bootstrap/Accordion'

export default function AccardionCatalogs() {
  return (
    <div className=''>
      <Accordion bsPrefix alwaysOpen>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='0'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Цена, ₽</Accordion.Header>
          <Accordion.Body>Lorem ipsum ctetur</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='1'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Бренд</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='3'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Старна производитель</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='4'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Цвет</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item bsPrefix='accordion_item_custom' eventKey='5'>
          <Accordion.Header bsPrefix='accordion_header_custom' >Способ доставки</Accordion.Header>
          <Accordion.Body>Lorem ipsum dolor</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
