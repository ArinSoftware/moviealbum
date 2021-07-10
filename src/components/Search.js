import React, { useState } from "react";

const Search = (props) => {

  const [term, setTerm] = useState("")

  const handleOnSubmit = (event) => {
    event.preventDefault()
    props.searchMovie(term)
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
          />
        </div>
      </form>
    );
  }

export default Search;
