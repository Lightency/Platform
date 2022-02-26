import {
  ADD_REGION_LOCALISATION,
  GET_ALL_REGIONS,
  GET_REGION_BY_ID,
  GET_NOT_DEPLOYED_SM,
  DELETE_REGION,
  IS_FETCHING_DATA,
  ADD_REGION_FAILED,
  GET_BLOCKS,
  RECON_REGION,
  GET_TRADE_ACTIONS,
  GET_ELECTRICITY_HISTORY,
  DEPLOY_SM
} from "../types";

const initialState = {
  regions: [],
  region: [],
  notDeployed: [],
  isLoading: "",
  error: false,
  swarmBlocks: {},
  trade: {},
  history: {},
  message: "",
  id: ""
};
//this object is describing the initial State off regions
function mapReducer(state = initialState, action) {
  //we add the action payload in the element concerned in the state ,
  //to know each action.type check the action folder
  if (action.type === IS_FETCHING_DATA) {
    return { ...state, isLoading: action.payload };
  }
  if (action.type === GET_ALL_REGIONS) {
    return { ...state, regions: action.payload };
  }
  if (action.type === ADD_REGION_LOCALISATION) {
    return {
      ...state,
      regions: [...state.regions, action.payload.updateRegion]
    };
  }
  if (action.type === ADD_REGION_FAILED) {
    return { ...state, error: action.payload };
  }
  if (action.type === RECON_REGION) {
    return { ...state, notDeployed: action.payload };
  }
  if (action.type === GET_NOT_DEPLOYED_SM) {
    return { ...state, notDeployed: action.payload };
  }
  if (action.type === GET_REGION_BY_ID) {
    return { ...state, region: action.payload, id: action.payload._id };
  }
  if (action.type === DELETE_REGION) {
    return {
      ...state,
      regions: state.regions.filter(el => el._id !== action.payload)
    };
  }
  if (action.type === GET_BLOCKS) {
    return { ...state, swarmBlocks: action.payload };
  }
  if (action.type === GET_TRADE_ACTIONS) {
    return { ...state, trade: action.payload };
  }
  if (action.type === GET_ELECTRICITY_HISTORY) {
    return { ...state, history: action.payload };
  }
  if (action.type === DEPLOY_SM) {
    return { ...state, message: action.paylaod };
  }
  return state;
}

export default mapReducer;
