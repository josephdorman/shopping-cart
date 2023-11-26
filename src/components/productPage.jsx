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

function ProductPage({ product }) {
  return (
    <>
      <div>THIS IS THE PRODUCT PAGE</div>
      <div key={product.id}>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.image}</p>
        <p>{product.rating.rate} {product.rating.count}</p>
      </div>
    </>
  )

}

export default ProductPage;

ProductPage.propTypes = {
  product: PropTypes.object
}
