import PropTypes from 'prop-types'
import '../styles/productPage.css'

 /* info in array
  Category
  Description
  ID
  Image
  Price
  Rating
   Count
   Rate
  Title
  */

function ProductPage({ product, onAddToCart }) {
  return (
    <>
      <div>THIS IS THE PRODUCT PAGE</div>
      <div key={product.id}>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.image}</p>
        <p>{product.rating.rate} {product.rating.count}</p>
        <button onClick={() => onAddToCart(product)}>ADD TO CART</button>
      </div>
    </>
  )

}

export default ProductPage;

ProductPage.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func.isRequired
}
