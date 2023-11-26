import '../styles/cart.css'

function Cart({ cart, setQuantity }) {
  return (
    <>
      THIS IS THE CART PAGE
      {
        cart.map(element => (
          <div key={element.id}>{element.title} <button onClick={() => setQuantity(element, 'add')}>ADD</button> {element.quantity} <button onClick={() => setQuantity(element, 'sub')}>SUBTRACT</button></div>
        ))
      }
    </>
  )
}

export default Cart