import moment from 'moment/moment'

export default function ReviewItem({reviews}) {
  return (
    <>
      {reviews?.map((item, idx) => (
        <div key={idx} 
          className='border rounded-md p-3'>
          <h5>{item.name}</h5>
          <p className='mb-0 text-gray-400'>{moment(item.createAdt).format('DD.MM.YYYY')}</p>
          <p className='mb-0'>{item.comment}</p>
      </div>
      ))}
    </>
  )
}


