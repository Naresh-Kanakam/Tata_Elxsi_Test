import React, { Component } from 'react'

export class MoviesList extends Component {

    renderMovies = () => {
        if(this.props.movies === "undefined"){
            return this.props.movies.map(movie => {
                return(
                    <div key={movie.type}>
                        <h1> {movie.items} </h1>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div>
                This is Movies List.
                {this.renderMovies()}
            </div>
        )
    }
}

export default MoviesList

