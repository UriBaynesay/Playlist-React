import { useState } from "react"

export const SearchBar = ({ onSearch }) => {
  const [searchBy, setSearchBy] = useState("")

  const handleChange = ({ target }) => {
    setSearchBy(target.value)
  }

  return (
    <section className="search-bar-container">
      <input type="text" value={searchBy} onChange={handleChange} />
      <button onClick={()=>onSearch(searchBy)}>Search</button>
    </section>
  )
}
