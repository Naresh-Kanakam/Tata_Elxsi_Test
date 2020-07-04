import {combineReducers} from 'redux';

import movies_reducer from './movie_reducer';

const rootReducer = combineReducers({
    movies: movies_reducer
})

export default rootReducer