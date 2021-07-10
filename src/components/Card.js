import React, { Component } from 'react'

class Card extends Component {
    render() {

      const { title, overview, vote_average, poster_path} = this.props.movie


        return (
            <div className="card shadow-sm">
            <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />

            <div className="card-body">
            <h5 className="card-title">{title}</h5>
              <p className="card-text">{overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                </div>
                <small className="text-muted">{vote_average}</small>
              </div>
            </div>
          </div>
        )
    }
}

export default Card
