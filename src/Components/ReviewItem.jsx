import moment from 'moment/moment'

export default function ReviewItem() {
  return (
    <div className='border rounded-md p-3'>
      <h5>Анна Фёдорова</h5>
      <span>{moment().format('DD.MM.YYYY')}</span>
      <p className='mb-0'>Неделю назад покрасила деревья. Температура была околонулевая, краскопультом не получилось, только кистью. Прилагаю фото после первого дождя</p>
    </div>
  )
}