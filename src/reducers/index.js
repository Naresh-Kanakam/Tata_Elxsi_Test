import {combineReducers} from 'redux';

import movies_list_reducer from './movie_reducer';

const rootReducer = combineReducers({
    movies: movies_list_reducer
})

export default rootReducer