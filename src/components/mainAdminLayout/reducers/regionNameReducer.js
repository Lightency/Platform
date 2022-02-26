import { GET_REGION_BY_ID } from "../types";
const initialState = "";

export function GetRegionNameReducer(state = initialState, action) {
  if (action.type === GET_REGION_BY_ID) {
    return action.payload;
  }
  return state;
}
