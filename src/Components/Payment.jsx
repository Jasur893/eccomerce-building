import { useState } from 'react'

export default function Payment() {
  const [show, setShow] = useState(null)

  const handleShow = (e) => setShow(e.target.id)

  const showText = () => {
    if (show === 'Оплата при получении') {
      return (
        <div className=''>
          <input type="radio" name="payment" value="in-cash" id='in-cash'/>
          <label htmlFor="in-cash">наличными</label> <br/>
          <input type="radio" name="payment" value="bank-card" id='bank-card'/>
          <label htmlFor="bank-card">банковской картой</label>
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
          <label key={idx} htmlFor={el}>
            <input
              onChange={handleShow}
              type='radio'
              name='el'
              value={el}
              id={el}
              className='pt-4'
            />
            {el}
          </label>
        ))}
      </div>

      <div>{showText()}</div>
    </div>
  )
}
