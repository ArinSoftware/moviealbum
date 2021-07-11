import React, {useContext} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import About from './components/About'
import CardDetail from './components/CardDetail'
import { MovieContext } from './contexts/MovieContext'

const App = () => {

  const  { loading } = useContext(MovieContext)

    return (
      <Router basename={process.env.PUBLIC_URL}>
        
      <>
        <Navbar />

        <Switch>
        <Route exact path="/"> 
        <main>
          <Header title="Sample Title" slogan="Sample slogan text" />
          <div className="album py-5 bg-light">
            <div className="container">
              
              <Search />

              {
                loading ?
                (
                  <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div>
                )
                :
                <CardList />                
              }
              
            </div>
          </div>
        </main>
        </Route>

        <Route path="/about" component={About} />
        <Route path="/movies/:id" component={CardDetail} />
        </Switch>

        <Footer />
      </>
      </Router>
    );
  }

export default App;
