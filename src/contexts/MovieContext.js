import React, {createContext, useState, useEffect} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(()=> {
      getMovies()
    }, [])
  
  
    const getMovies = () => {
      setLoading(true)
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=274c12e6e2e4f9ca265a01d107280eba')
      .then(response => response.json())
      .then(data => {
        //this.setState({movies: data.results, loading: false})
        setMovies(data.results)
        setLoading(false)
      }
        )
    }
  
    const searchMovie = (term) => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=274c12e6e2e4f9ca265a01d107280eba&query=${term}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
    }

    return (
        <MovieContext.Provider value={{
            movies,
            searchMovie,
            loading,
            getMovies
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}