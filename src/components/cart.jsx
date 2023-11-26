import '../styles/cart.css'

function Cart({ cart }) {
  return (
    <>
      THIS IS THE CART PAGE
      {
        cart.map(element => (
          <div key={element.id}>{element.title}</div>
        ))
      }
    </>
  )
}

export default Cart