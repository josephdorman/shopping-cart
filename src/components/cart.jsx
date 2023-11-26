import PropTypes from 'prop-types'
import '../styles/cart.css'

function Cart({ cart, setQuantity, onDelete }) {
  return (
    <>
      THIS IS THE CART PAGE
      {
        cart.map(element => (
          <div key={element.id}>
            {element.title} 
            <button onClick={() => setQuantity(element, 'add')}>ADD</button> 
            {element.quantity} 
            <button onClick={() => setQuantity(element, 'sub')}>SUBTRACT</button>
            <button onClick={() => onDelete(element)}>DELETE</button>
          </div>
        ))
      }
    </>
  )
}

export default Cart

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setQuantity: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}