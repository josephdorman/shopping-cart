import PropTypes from 'prop-types';
import Card from './card'
import Filter from './filter';
import '../styles/store.css'
import { useState, useEffect } from 'react';

function Store({data, error, loading, onProductClick}) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const onFilterClick = (value) => {
    if (value === 'jewelery') {
      setFilteredData(data.filter((data) => data.category === value));
    }
    else if (value === 'electronics') {
      setFilteredData(data.filter((data) => data.category === value));
    }
    else if (value === "men's clothing") {
      setFilteredData(data.filter((data) => data.category === value));
    }
    else if (value === "women's clothing") {
      setFilteredData(data.filter((data) => data.category === value));
    }
    else {
      setFilteredData(data);
    }
  }

  return (
    <>
      <div className='store'>
        <Filter onFilterClick={onFilterClick}/>
        {error 
        ? <p>A network error was encountered</p> // if error render error
        : loading ? <p>Loading...</p> // if no error check if loading and output loading if loading
        : <div className="card-container"><Card filteredData={filteredData} onProductClick={onProductClick}/></div> // if not loading then render the card (data finished fetching)
        }
      </div>
    </>
  )
}

export default Store

Store.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
  onProductClick: PropTypes.func.isRequired
}