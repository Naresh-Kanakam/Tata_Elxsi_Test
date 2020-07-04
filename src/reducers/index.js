import {combineReducers} from 'redux';

import movies_reducer from './movie_reducer';
import selected_id from './selected_id';

const rootReducer = combineReducers({
    movies: movies_reducer,
    selectedId: selected_id
})

export default rootReducer