import actions from "../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.MOVIES_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
