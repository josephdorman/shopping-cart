import '../styles/filter.css'

function Filter({ onFilterClick }) {
  return (
    <>
      <div>THIS IS THE FILTER BAR</div>
      <div>
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