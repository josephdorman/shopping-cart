import { useState } from 'react'
import PropTypes from 'prop-types'
import trashcan from '/trash-can-outline.svg'
import '../styles/cart.css'
import { useEffect } from 'react'

function Cart({ cart, setQuantity, onDelete }) {
  const [prices, setPrices] = useState([
    {
      subtotal: 0,
      shipping: 'FREE',
      tax: 0,
      total: 0
    }
  ])

  useEffect(() => {
    const calcPrices = () => {
      let array = {
        subtotal: 0,
        shipping: 'FREE',
        tax: 0,
        total: 0
      }
  
      // get subtotal
      tempitems.forEach(item => array.subtotal += item.price);
  
      array.tax = (array.subtotal * 0.051).toFixed(2);
      array.total = Number(array.subtotal) + Number(array.tax);
  
      setPrices([array])
    }

    calcPrices()

  }, [cart])

  const tempitems = [
    {
      id: 1,
      title: 'T-Shirt',
      quantity: 2,
      price: 59,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    },
    {
      id: 2,
      title: 'Pants',
      quantity: 2,
      price: 20,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    },
    {
      id: 3,
      title: 'Shoes',
      quantity: 1,
      price: 140,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    }
  ]

  return (
    <>
      <div className='cart'>
        <div className='items'>
          {
            tempitems.map(element => (
              <div className='item' key={element.id}>
                <div className="item-container">
                  <img className="item-img" src={element.image} />
                  {element.title}
                </div>
                <div className="edit">
                  <button className='add' onClick={() => setQuantity(element, 'add')}>+</button> 
                  <p className='quantity'>{element.quantity}</p>
                  <button className='sub' onClick={() => setQuantity(element, 'sub')}>-</button>
                  <button className='delete' onClick={() => onDelete(element)}><img src={trashcan}></img></button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='checkout'>
          <div className='price'>
            <p>Subtotal: <span>${prices[0].subtotal}</span></p>
            <p>Shipping: <span>{prices[0].shipping}</span></p>
            <p>Tax & Fees: <span>${prices[0].tax}</span></p>
          </div>
          <div className="total">
            <p>You Pay: <span>${prices[0].total}</span></p>
          </div>
          <button className='place-order'>Place Order</button>
        </div>
      </div>
    </>
  )
}

export default Cart

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setQuantity: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}