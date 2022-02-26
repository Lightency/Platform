import { GET_REGION_WEATHER, IS_FETCHING_DATA } from "../types";

const inialState = {
  weather: [],
  isLoading: false
};
export default function WeatherReducer(state = inialState, action) {
  if (action.type === GET_REGION_WEATHER) {
    return { ...state, weather: action.payload };
  }
  if (action.type === IS_FETCHING_DATA) {
    return { ...state, isLoading: action.payload };
  }
  return state;
}
