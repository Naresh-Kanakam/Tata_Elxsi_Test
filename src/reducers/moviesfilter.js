import { initialData } from "../reducers/movieslist";
import actions from "../actions/index";

export default (state = initialData.sortMovies, action) => {
  switch (action.type) {
    case actions.MOVIES_LIST:
      return state.map((item) => {
        item.active = false;
        if (item.valueToOrderBy === action.payload.filterOption)
          item.active = true;
        return item;
      });
    default:
      return state;
  }
};
