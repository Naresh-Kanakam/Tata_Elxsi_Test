import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getMoviesList} from '../actions/index'
import MoviesList from './MoviesList'

class App extends Component {

  componentDidMount(){
    this.props.getMoviesList()
  }

  render() {
    return (
      <div>
        <MoviesList movies={this.props.allMovies}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    allMovies:state.movies.getMoviesList
  }
}

export default connect(mapStateToProps,{getMoviesList})(App)
