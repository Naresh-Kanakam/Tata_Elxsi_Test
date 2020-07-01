export const getMoviesList = () => {

    const getMoviesList = fetch('http://localhost:3004/movies')
                            .then(res => res.json())

    return{
        type:'GET_MOVIES_LIST',
        payload:getMoviesList
    }
}