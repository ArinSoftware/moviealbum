import React, {useState, useEffect} from "react";
import { useParams, Link } from 'react-router-dom'

const CardDetail = () => {

    const [movie, setMovie] = useState({})

    const { id } = useParams()

    useEffect(()=> {
        const getMovie = () => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=274c12e6e2e4f9ca265a01d107280eba`)
            .then(response => response.json())
            .then(data => setMovie(data))
        }
        getMovie()
      }, [id])


  return (
    <main>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">{movie.title}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          {movie.overview}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link className="btn btn-outline-secondary" to="/">Home</Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="container px-5">

              {
                  movie.poster_path ?

                  <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="img-fluid border rounded-3 shadow-lg mb-4"
                  alt={movie.title}/>

                  :

                  null

              }

          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDetail;
