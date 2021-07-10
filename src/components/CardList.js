import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
    render() {

        return (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {
                    this.props.movies.map(function (movie) {
                        return (
                        <div className="col" key={movie.id}>
                            <Card movie={movie}/>
                        </div>
                        )
                    })
                }


            </div>
        )
    }
}

export default CardList
