import PropTypes from 'prop-types'
import '../styles/cart.css'

function Cart({ cart, setQuantity, onDelete }) {
  const tempitems = [
    {
      id: 1,
      title: 'T-Shirt',
      quantity: 2,
      price: 59,
    },
    {
      id: 2,
      title: 'Pants',
      quantity: 2,
      price: 20,
    },
    {
      id: 3,
      title: 'Shoes',
      quantity: 1,
      price: 140,
    }
  ]

  const getTotal = () => {
    let num = 0;
    tempitems.forEach(item => num += item.price);
    return num
  }

  return (
    <>
      <div className='cart'>
        <div className='items'>
          {
            tempitems.map(element => (
              <div key={element.id}>
                {element.title}
                <button data-testid="add" onClick={() => setQuantity(element, 'add')}>ADD</button> 
                {element.quantity}
                <button onClick={() => setQuantity(element, 'sub')}>SUBTRACT</button>
                <button onClick={() => onDelete(element)}>DELETE</button>
              </div>
            ))
          }
        </div>
        <div className='checkout'>
          <div className='price'>
            <p>Subtotal: <span>${getTotal()}</span></p>
            <p>Shipping: <span>FREE</span></p>
            <p>Tax & Fees: <span>5%</span></p>
          </div>
          <div className="total">
            <p>You Pay: <span>$472</span></p>
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