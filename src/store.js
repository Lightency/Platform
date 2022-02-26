import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mapReducer from "./components/mainAdminLayout/reducers/mapReducer";
import WeatherReducer from "./components/mainAdminLayout/reducers/weatherReducer";
import ErrorReducer from "./components/mainAdminLayout/reducers/errorReducer";
import tokenReducer from "./components/mainAdminLayout/reducers/tokenReducer";
import searchSmReducer from "./components/mainAdminLayout/reducers/search-sm";
import { composeWithDevTools } from "redux-devtools-extension";
import { GetRegionNameReducer } from "./components/mainAdminLayout/reducers/regionNameReducer";
const store = createStore(
  combineReducers({
    mapIcon: mapReducer,
    searchInput: searchSmReducer,
    regionName: GetRegionNameReducer,
    weather: WeatherReducer,
    error: ErrorReducer,
    token: tokenReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
