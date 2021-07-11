import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {

      const { title, overview, vote_average, poster_path, id} = props.movie


      const truncateString = (str, num) => {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }

        return (
            <div className="card shadow-sm">
            <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />

            <div className="card-body">
            <h5 className="card-title">{title}</h5>
              <p className="card-text">{ truncateString(overview, 100)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link to={`/movies/${id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                </div>
                <small className="text-muted">{vote_average}</small>
              </div>
            </div>
          </div>
        )
    }

export default Card
