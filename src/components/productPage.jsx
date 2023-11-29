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
      <div key={product.id} className='product'>
        <div className="product-img-container">
          <img className="product-img" src={product.image} />
        </div>
        <div className="product-info">
          <div className='product-main'>
            <h2 className='product-title'>{product.title}</h2>
            <p className='product-rating'>{product.rating.rate} {product.rating.count}</p>
            <p className='product-price'>${product.price}</p>
          </div>
          <div className='product-color'>
            <p>Color :</p>
            <div className="button-container">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
          <div className='product-size'>
            <p>Size :</p>
            <div className='button-container'>
              <button>XXS</button>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>
          <button className='add-cart' onClick={() => onAddToCart(product)}>ADD TO CART</button>
          <div className='product-desc'>
            <p className='desc-title'>Product Info</p>
            <p className='desc'>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default ProductPage;

ProductPage.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func.isRequired
}
