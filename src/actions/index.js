export const getMoviesList = () => {

    const getMoviesList = fetch('http://localhost:3004/movies')
                            .then(res => res.json())

    return{
        type:'GET_MOVIES_LIST',
        payload:getMoviesList
    }
}

export const getMovieDetails = (title) => {
    const getMovieDetails = fetch(`http://localhost:3004/movies?title=$.['components[1]'].['items'].['title']`, {method:"GET"})
                            .then(res => res.json())
    console.log("path", getMovieDetails);
    return{
        type:'MOVIE_DETAILS',
        payload:getMovieDetails
    }
}