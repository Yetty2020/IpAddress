import { useState } from 'react'
import PropTypes from 'prop-types'
import { GoChevronRight } from "react-icons/go";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim())
      setSearchTerm('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-between px-4 md:px-0 md:w-1/2 md:align-center '>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for any IP address or domain"
        className='w-full py-2 px-3 rounded-l-xl text-medium'
      />
      <button type="submit" className=' bg-black text-white py-4 px-3 rounded-r-xl cursor-pointer'><GoChevronRight className='text-2xl'/></button>
    </form>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Search
