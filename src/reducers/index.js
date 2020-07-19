import { combineReducers } from "redux";

import movieslist from "./movieslist";
import moviedetails from "./moviedetails";
import moviesfilter from "./moviesfilter";

const rootReducer = combineReducers({
  movieslist,
  moviedetails,
  moviesfilter,
});

export default rootReducer;
