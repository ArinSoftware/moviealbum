import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import About from './components/About'


const App = () => {

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
      <Router>
      <>
        <Navbar />

        <Switch>
        <Route exact path="/"> 
        <main>
          <Header title="Sample Title" slogan="Sample slogan text" />
          <div className="album py-5 bg-light">
            <div className="container">
              

              <Search searchMovie={searchMovie} />

              {
                loading ?
                (
                  <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div>
                )
                :
                <CardList movies={movies} />
                
              }
              
            </div>
          </div>
        </main>
        </Route>

        <Route path="/about" component={About} />
        </Switch>

        <Footer />
      </>
      </Router>
    );
  }

export default App;
