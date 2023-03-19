import { useState } from 'react'

export default function Payment() {
  const [show, setShow] = useState('Оплата при получении')
  const [showPayment, setShowPayment] = useState('in-cash')

  const handleShow = (e) => setShow(e.target.id)
  const handleShowPayment = (e) => setShowPayment(e.target.id)

  const showText = () => {
    if (show === 'Оплата при получении') {
      return (
        <div className=''>
          <input type="radio" name="payment" value={showPayment} id='in-cash' onChange={handleShowPayment} checked={showPayment === 'in-cash'}/>
          <label htmlFor="in-cash" className='pl-2'>наличными</label> <br/>
          <input type="radio" name="payment" value={showPayment} id='bank-card' onChange={handleShowPayment} checked={showPayment === 'bank-card'}/>
          <label htmlFor="bank-card" className='pl-2'>банковской картой</label>
        </div>
      )
    } else if (show === 'Оплата онлайн') {
      return <p>плата онлайн</p>
    }
  }

  return (
    <div>
      <p className='mb-2'>Выберите подходящий вам вариант оплаты:</p>

      <div className='flex justify-start flex-wrap pr-2 gap-3 sm:gap-5 mb-2'>
        {['Оплата при получении', 'Оплата онлайн'].map((el, idx) => (
          <div  key={idx}>
            <input
              onChange={handleShow}
              type='radio'
              name='el'
              value={el}
              id={el}
              className='pt-4'
              checked={show === el}
            />
            <label htmlFor={el} className='pl-2'>
            {el}
          </label>
          </div>
        ))}
      </div>

      <div>{showText()}</div>
    </div>
  )
}
