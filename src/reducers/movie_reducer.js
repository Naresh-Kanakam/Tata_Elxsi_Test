const movies = {}

export default function movies_list_reducer(state=movies, action){
    switch(action.type){
        case "GET_MOVIES_LIST":
            return{
                ...state,
                getMoviesList:action.payload
            }

        case "MOVIE_DETAILS":                
            return{
                ...state,
                getMovieDetails:action.payload
            }    
            

        default: 
            return state
    }
}