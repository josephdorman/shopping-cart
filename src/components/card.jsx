import PropTypes from 'prop-types';
import '../styles/card.css'

function Card({ data }) {

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
          <div key={data.id}>
            <img src={data.image} alt="" />
            <h3>{data.title}</h3>
            <p>${data.price}</p>
          </div>
        ))
      }
    </>
  )
}

export default Card

Card.propTypes = {
  data: PropTypes.array.isRequired
}