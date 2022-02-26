import { GET_ERRORS, CLEAR_ERRORS } from "../types";

const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return false;
    default:
      return state;
  }
}
