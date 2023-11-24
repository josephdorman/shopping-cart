import PropTypes from 'prop-types';
import Card from './card'
import '../styles/store.css'

function Store({data, error, loading}) {
  return (
    <>
      <p>THIS IS THE STORE PAGE</p>
      {error 
      ? <p>A network error was encountered</p> // if error render error
      : loading ? <p>Loading...</p> // if no error check if loading and output loading if loading
      : <div className="card-container"><Card data={data}/></div> // if not loading then render the card (data finished fetching)
      }
    </>
  )
}

export default Store

Store.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool
}