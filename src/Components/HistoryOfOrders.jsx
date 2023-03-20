import { collection, getDocs } from 'firebase/firestore'
import { useState, useContext, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { AuthContext } from '../context/AuthContext'
import { db } from '../FirebaseConfigs/firebaseConfig'

export default function HistoryOfOrders() {
  const {userValue4} = useContext(AuthContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getAllOreders = async() => {
      const ordersArray = []
      await getDocs(collection(db, `user-buy-${userValue4?.uid}`)).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          ordersArray.push({...doc.data(), id: doc.id, isLiked: false, isAdded: false})
        })
      }).catch((error)=> {
        console.log(error.message);
      })
      setOrders(ordersArray)
    }
    getAllOreders()
  },[userValue4?.uid])

  console.log(orders);


  return (
    <div>
      <div>
      {orders.length > 0 ? (
        <div>
        {orders.map((item) => (
          <Accordion bsPrefix key={item.id}>
            <Accordion.Item
              bsPrefix='accardion_item_history-custom'
              className='mb-1 rounded-md'
              eventKey='0'
            >
              <Accordion.Header>
                <div className='text-[12px] sm:text-[16px] w-full flex justify-between'>
                  <p className='mb-0 text-[10px] sm:text-base'>Заказ № {item.order}</p>
                  <p className='mb-0 text-gray-300 text-[10px] sm:text-base'>Создан: {item.created}</p>
                  <p className='mb-0 text-gray-300 text-[10px] sm:text-base'>Получен: ??</p>
                  <p className='mb-0'>
                    <i className='fa-solid fa-chevron-down'></i>
                  </p>
                </div>
              </Accordion.Header>
              <Accordion.Body className='pt-2'>
                <div className='w-full px-1'>
                {item.buyProduct.newCartPayment.map((itemEl, idx) => (
                  <div key={idx} className='flex justify-between items-center'>
                    <div className='w-[30px] lg:w-[40px] h-[30px] lg:h-[40px]'>
                      <img src={itemEl.img} className='w-full' alt='card-item' />
                    </div>
                    <span className='pt-2 text-[11px] sm:text-base'>{String(itemEl.title).slice(0, 15) + '...'}</span>
                    <span className='pt-2 text-[11px] sm:text-base'>{itemEl.price} ₽ x {itemEl.amount}</span>
                    <span className='pt-2 text-[11px] sm:text-base'>{itemEl.sum} ₽</span>
                  </div>
                ))}
                </div>
                <div className='border-t-2 flex justify-between items-center pt-2'>
                  <p className='mb-0 text-[11px] sm:text-base' >Итого:</p>
                  <div>
                    <span className={`${item.buyProduct.deliverService ? 'text-green-400' : 'text-gray-400'} pr-2 text-[10px] sm:text-[12px] `}>доставка {item.buyProduct.deliverService} ₽</span>
                    <span className='text-[14px] sm:text-base'>{item.buyProduct.totalPrice} ₽</span>

                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
       </div>
      ) : (
        <div className='text-center'>
          <h3>История заказов пуста</h3>
        </div>
      )}
    </div>
    </div>
  )
}
 