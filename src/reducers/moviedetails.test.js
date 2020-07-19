import actions from "../actions/index";
import { initialData } from "../reducers/movieslist";
import moviedetails from "./moviedetails";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  it("should return the initial state", () => {
    const newState = moviedetails(undefined, {});
    expect(newState).toEqual({});
  });

  it("Should return new state on matching type", () => {
    const movies = initialData.movies;
    const newState = moviedetails(undefined, {
      type: actions.MOVIES_DETAILS,
      payload: movies,
    });
    expect(newState).toEqual(movies);
  });
});
