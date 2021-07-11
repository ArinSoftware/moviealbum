import React, {useContext} from 'react'
import Card from './Card'
import { MovieContext } from '../contexts/MovieContext'


const CardList = () =>{

    const  { movies } = useContext(MovieContext)

        return (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {
                    movies.map(function (movie) {
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

export default CardList
