import data from '../data.json'

export const getMoviesList = () => {
    return{
        type:'GET_MOVIES_LIST',
        payload:data
    }
}

export const getMovieDetails = (title) => {
    return{
        type:'MOVIE_DETAILS',
        payload: data
    }
}

export const updateSelectedMovieId=(id) => {
    return {
        type: "movieId",
        payload: id
    }
}