import { GENERATE_TOKEN } from "../types";
const token = {};

function tokenReducer(state = token, action) {
  if (action.type === GENERATE_TOKEN) {
    return action.payload;
  }
  return state;
}
export default tokenReducer;
