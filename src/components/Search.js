import React from 'react'

const Search = ({searchTerm, handleChange}) => {
  return (
    <div className="Search">
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for Pokemon"/>
    </div>
  )
}

export default Search