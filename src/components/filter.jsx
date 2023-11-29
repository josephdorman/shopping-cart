import PropTypes from 'prop-types'
import '../styles/filter.css'

function Filter({ onFilterClick }) {
  return (
    <>
      <div className='filter-bar'>
        <p>Filters: </p>
        <button onClick={() => onFilterClick('all')}>ALL</button>
        <button onClick={() => onFilterClick('jewelery')}>JEWELERY</button>
        <button onClick={() => onFilterClick('electronics')}>ELECTRONICS</button>
        <button onClick={() => onFilterClick("men's clothing")}>MENS CLOTHING</button>
        <button onClick={() => onFilterClick("women's clothing")}>WOMENS CLOTHING</button>
      </div>
    </>
  )
}

export default Filter

Filter.propTypes = {
  onFilterClick: PropTypes.func.isRequired
}