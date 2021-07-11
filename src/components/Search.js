import React, { useState, useContext } from "react";
import { MovieContext } from '../contexts/MovieContext'

const Search = () => {

  const  { searchMovie } = useContext(MovieContext)

  const [term, setTerm] = useState("")

  const handleOnSubmit = (event) => {
    event.preventDefault()
    searchMovie(term)
  }

  const handleOnChange = (event) => {
    //this.setState({term: event.target.value})
    setTerm(event.target.value)
  }

    return (
      <form onSubmit={handleOnSubmit} className="row g-3 mb-5">
        <div className="col-8">
          <input onChange={handleOnChange} type="text" className="form-control" placeholder="search.." value={term} />
        </div>
        <div className="col-4">
          <input
            type="submit"
            className="form-control btn-block btn btn-danger text-white"
          disabled={!(term.length > 2)}/>
        </div>
      </form>
    );
  }

export default Search;
