import PropTypes from 'prop-types'
import '../styles/productPage.css'

function ProductPage({ product }) {
  return (
    <>
      <div>THIS IS THE PRODUCT PAGE</div>
      <div key={product.id}>
        <p>{product.title}</p>
      </div>
    </>
  )

}

export default ProductPage;

ProductPage.propTypes = {
  product: PropTypes.object
}
