export default function selectedId(state={}, action){
    switch(action.type){
        case "movieId":
            return{
                ...state,
                id: action.payload
            }   
            

        default: 
            return state
    }
}