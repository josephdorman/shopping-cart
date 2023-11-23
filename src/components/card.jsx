import PropTypes from 'prop-types';
import '../styles/card.css'

function Card({ data }) {

  return (
    <>
      {
        data.map(data => (
          <div key={data.id}>
            <div>{data.id}</div>
            <div>{data.description}</div>
            <div>{data.category}</div>
            <div>{data.price}</div>
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