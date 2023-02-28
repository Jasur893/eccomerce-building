import Accordion from 'react-bootstrap/Accordion'
import foto from '../img/comparisionCard/comparisionCard01.png'

export default function HistoryOfOrders() {
  return (
    <Accordion bsPrefix>
      <Accordion.Item
        bsPrefix='accardion_item_history-custom'
        className='mb-1 rounded-md'
        eventKey='0'
      >
        <Accordion.Header>
          <div className='text-[12px] sm:text-[16px] w-full flex justify-between'>
            <p className='mb-0'>Заказ № 25463</p>{' '}
            <p className='mb-0 text-gray-300'>Создан: 14.07.2022</p>
            <p className='mb-0 text-gray-300'>Получен: 14.07.2022</p>
            <p className='mb-0'>
              <i className='fa-solid fa-chevron-down'></i>
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body className='pt-2'>
          <div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
          </div>
          <div className='border-t-2 flex justify-between pt-2'>
            <p className='mb-0'>Итого:</p>
            <p className='mb-0'>2 200 ₽</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        bsPrefix='accardion_item_history-custom'
        className='mb-1 rounded-md'
        eventKey='1'
      >
        <Accordion.Header>
          <div className='text-[12px] sm:text-[16px] w-full flex justify-between'>
            <p className='mb-0'>Заказ № 25463</p>{' '}
            <p className='mb-0 text-gray-300'>Создан: 14.07.2022</p>
            <p className='mb-0 text-gray-300'>Получен: 14.07.2022</p>
            <p className='mb-0'>
              <i className='fa-solid fa-chevron-down'></i>
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body className='pt-2'>
          <div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
          </div>
          <div className='border-t-2 flex justify-between pt-2'>
            <p className='mb-0'>Итого:</p>
            <p className='mb-0'>2 200 ₽</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        bsPrefix='accardion_item_history-custom'
        className='mb-1 rounded-md'
        eventKey='2'
      >
        <Accordion.Header>
          <div className='text-[12px] sm:text-[16px] w-full flex justify-between'>
            <p className='mb-0'>Заказ № 25463</p>{' '}
            <p className='mb-0 text-gray-300'>Создан: 14.07.2022</p>
            <p className='mb-0 text-gray-300'>Получен: 14.07.2022</p>
            <p className='mb-0'>
              <i className='fa-solid fa-chevron-down'></i>
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
          </div>
          <div className='border-t-2 flex justify-between pt-2'>
            <p className='mb-0'>Итого:</p>
            <p className='mb-0'>2 200 ₽</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        bsPrefix='accardion_item_history-custom'
        className='mb-1 rounded-md'
        eventKey='3'
      >
        <Accordion.Header>
          <div className='text-[12px] sm:text-[16px] w-full flex justify-between'>
            <p className='mb-0'>Заказ № 25463</p>{' '}
            <p className='mb-0 text-gray-300'>Создан: 14.07.2022</p>
            <p className='mb-0 text-gray-300'>Получен: 14.07.2022</p>
            <p className='mb-0'>
              <i className='fa-solid fa-chevron-down'></i>
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
          </div>
          <div className='border-t-2 flex justify-between pt-2'>
            <p className='mb-0'>Итого:</p>
            <p className='mb-0'>2 200 ₽</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        bsPrefix='accardion_item_history-custom'
        className='rounded-md'
        eventKey='4'
      >
        <Accordion.Header>
          <div className='text-[12px] sm:text-[16px] w-full flex justify-between'>
            <p className='mb-0'>Заказ № 25463</p>{' '}
            <p className='mb-0 text-gray-300'>Создан: 14.07.2022</p>
            <p className='mb-0 text-gray-300'>Получен: 14.07.2022</p>
            <p className='mb-0'>
              <i className='fa-solid fa-chevron-down'></i>
            </p>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
            <div className='flex justify-around align-center'>
              <img src={foto} width='50px' height='50px' alt='card-item' />
              <span className='pt-2'>Эмаль Condor ПФ-115</span>
              <span className='pt-2'>500 ₽ x 2</span>
              <span className='pt-2'>1 000 ₽</span>
            </div>
          </div>
          <div className='border-t-2 flex justify-between pt-2'>
            <p className='mb-0'>Итого:</p>
            <p className='mb-0'>2 200 ₽</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
