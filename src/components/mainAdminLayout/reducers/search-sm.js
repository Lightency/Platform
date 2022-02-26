import { SEARCH_SM } from "../types";
const initialState = "";

const SearchSmReducer = (state = initialState, action) => {
  if (action.type === SEARCH_SM) {
    return action.payload;
  }
  return state;
};
export default SearchSmReducer;
