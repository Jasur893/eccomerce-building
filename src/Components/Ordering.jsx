import DataBuyer from './DataBuyer'
import Delivery from './Delivery'
import Payment from './Payment'
import { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { AuthContext } from '../context/AuthContext'
import { addDoc, collection} from 'firebase/firestore'
import { db } from '../FirebaseConfigs/firebaseConfig'
import moment from 'moment'

export default function Ordering() {
  const [show, setShow] = useState('Доставка курьером')
  const [activeTabO, setActiveTabO] = useState('data-buyer')
  const {userValue4} = useContext(AuthContext);
  const {value3, value7, value10} = useContext(ProductContext);
  const cart = value3;
  const total = value7;
  const handleBuyProducts = value10

  const handleShow = (e) => setShow( e.target.id )
  const deliveryMoney = 950
  const delivery = show === 'Доставка курьером' ? deliveryMoney : null;
  const isDelivery = show === 'Доставка курьером' ? delivery : 0


  let totalSum = parseFloat(total) + delivery

  //handleTabsShow
  function handleShowComponent(tab1, tab2, tab3){
    if(activeTabO === 'data-buyer'){
      return tab1
    } else if(activeTabO === 'delivery'){
      return tab2
    } else if(activeTabO === 'payment'){
      return tab3
    }
  }

  //handleBuyProducts in useContext
  const handleBuyProd = handleBuyProducts(totalSum, isDelivery)
  //buy products and set DB 
  const buyProducts = async() => {
    await addDoc(collection(db, `user-buy-${userValue4?.uid}`), {
      buyProduct: handleBuyProd,
      created: moment().format('DD.MM.YYYY'),
      order: new Date().getTime()
    })
    .then(() => {
      console.log('ваши данные успешно установлены')
    }).catch((error) => {
      const errorEr = error.code
      console.log(errorEr);
    })
  }

  //button click
  function handleNext() {
    if(activeTabO === 'data-buyer'){
      setActiveTabO('delivery')
    } else if(activeTabO === 'delivery'){
      setActiveTabO('payment')
    } else if(activeTabO === 'payment'){
      if(cart.length > 0){
        alert('Ваш заказ был получен')
        buyProducts()
        return
      }else {
        alert('у вас нет товаров')
        return
      }
    }
  }


  return (
    <div className='bg-slate-100 pt-3'>
      <div className='container_content'>
        <h3 className='mb-3 text-xl sm:text-3xl'>Оформление заказа</h3>

        <div className='bg-white rounded-tr-md grid rounded-tl-md grid-cols-12'>
          <div className='pl-3 pr-3 col-span-12 md:col-span-9'>
            <ul className='flex justify-start py-3 pl-0 gap-x-2 md:gap-x-6 text-[16px] sm:text-xl'>
              <li
                className={`${activeTabO === 'data-buyer' ? 'text-gray-900' : ''} hover:text-current text-gray-300 no-underline cursor-pointer`}
                onClick={() => setActiveTabO('data-buyer')}
              >
                Данные покупателя
              </li>
              <li
                className={`${activeTabO === 'delivery' ? 'text-gray-900' : ''} hover:text-current text-gray-300 no-underline cursor-pointer`}
                onClick={() => setActiveTabO('delivery')}
              >
                Доставка
              </li>
              <li
                className={`${activeTabO === 'payment' ? 'text-gray-900' : ''} hover:text-current text-gray-300 no-underline cursor-pointer`}
                onClick={() => setActiveTabO('payment')}
              >
                Оплата
              </li>
            </ul>

            <div>
              {handleShowComponent(<DataBuyer />, <Delivery show={show} delivery={delivery} handleShow={handleShow} />, <Payment />)}
            </div>

            <div className='mt-3 mb-3'>
              <button
                onClick={() => handleNext()}
                className={`${activeTabO === 'payment' ? 'bg-orange-500' : 'bg-gray-900'}  rounded-md py-2 px-4 text-[13px] sm:text-[16px] text-white `}
              >
                {activeTabO === 'payment' ? 'ПОДТВЕРДИТЬ ЗАКАЗ' : 'ДАЛЕЕ'}
              </button>
            </div>
          </div>

          <div className='col-span-6 md:col-span-3 mb-3'>
            <div className='bg-dark pl-3 pr-3 py-3 rounded-tr-md rounded-br-md rounded-bl-md'>
              <div className='flex justify-between text-white font-semibold text-[13px] sm:text-[20px]'>
                <span>Итого</span>
                <span className='text-orange-700'>{parseFloat(total) + delivery} ₽</span>
              </div>
              <div className='flex justify-between text-gray-300 pt-1 text-[10px] sm:text-[16px]'>
                <span>{cart.length} товаров</span>
                <span>{parseFloat(total)} ₽</span>
              </div>
              <div className='flex justify-between text-gray-300 pt-1 text-[10px] sm:text-[16px]'>
                <span>Доставка</span>
                <span>{show === 'Доставка курьером' ? delivery : 0} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}