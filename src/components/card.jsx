import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../styles/card.css'

function Card({ data , onProductClick}) {

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

  return (
    <>
      {
        data.map(data => (
          <Link data-testid="card" to={`../product/${data.title}`} key={data.id} onClick={() => onProductClick(data)}>
          <div className="card" key={data.id}>
            <div className="card-img-wrapper">
              <img className="card-img" src={data.image} alt="" /> 
            </div>
            <p className='card-title'>{data.title}</p>
            <p className='card-rating'>{data.rating.rate}/5 - ({data.rating.count})</p>
            <p className='card-price'>${data.price}</p>
          </div>
          </Link>
          
        ))
      }
    </>
  )
}

export default Card

Card.propTypes = {
  data: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired
}