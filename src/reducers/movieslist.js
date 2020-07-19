import data from "../data.json";
import actions from "../actions/index";

export const initialData = {
  movies: data.components.filter((item) => item.type === "movie-list").pop()
    .items,
  sortMovies: data.components
    .filter((item) => item.type === "order-select")
    .pop().items,
};

export const sortRankDate = (data, type) => {
  return data.sort((a, b) => a[type] - b[type]);
};

export default (state = initialData.movies, action) => {
  switch (action.type) {
    case actions.MOVIES_LIST:
      return sortRankDate([...state], action.payload.filterOption);

    default:
      return state;
  }
};
