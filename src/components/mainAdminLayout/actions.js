import {
  ADD_REGION_LOCALISATION,
  SEARCH_SM,
  GET_REGION_BY_ID,
  GET_NOT_DEPLOYED_SM,
  GET_ALL_REGIONS,
  DELETE_REGION,
  ADD_REGION_FAILED,
  IS_FETCHING_DATA,
  GET_REGION_WEATHER,
  GET_BLOCKS,
  GET_ERRORS,
  CLEAR_ERRORS,
  IS_FETCHING_WEATHER,
  RECON_REGION,
  DEPLOY_SM,
  GET_TRADE_ACTIONS,
  GET_ELECTRICITY_HISTORY,
  GENERATE_TOKEN
} from "./types";
import axios from "axios";

//START ACTION FOR LOADING SPINNER
export const isFetchingData = payload => {
  return {
    type: IS_FETCHING_DATA,
    payload
  };
};

//actions for error handling
export const getErors = payload => {
  return {
    type: GET_ERRORS,
    payload
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
//start actions  for creating a new region
export const AddRegionLocalisation = payload => {
  return {
    type: ADD_REGION_LOCALISATION,
    payload
  };
};
export function createRegion(url, newRegion) {
  return dispatch => {
    axios
      .post(url, newRegion)
      .then(res => {
        console.log(res.data.err);
        if (res.data.err) {
          return Promise.reject(res.data.err);
        }
        return dispatch(AddRegionLocalisation(res.data));
      })
      .catch(err => dispatch(AddErrorHandling(err)));
  };
}

export function AddErrorHandling(payload) {
  return {
    type: ADD_REGION_FAILED,
    payload
  };
}

//start actions for fetching all regions
export const getAllRegions = payload => {
  return {
    type: GET_ALL_REGIONS,
    payload
  };
};

export function getRegions(url) {
  return dispatch => {
    dispatch(isFetchingData(true));
    dispatch(clearErrors());
    axios
      .get(url)
      .then(res => {
        dispatch(getAllRegions(res.data));
        dispatch(isFetchingData(false));
      })
      .catch(err => {
        dispatch(getErors({ err: "Check youre connection network" }));
        dispatch(isFetchingData(false));
      });
  };
}

//start actions for fetching one region
export const getRegionbyId = payload => {
  return {
    type: GET_REGION_BY_ID,
    payload
  };
};

export function getOneRegion(url) {
  return dispatch => {
    dispatch(clearErrors());
    dispatch(isFetchingData(true));
    axios.get(url).then(res => {
      dispatch(getRegionbyId(res.data));
      dispatch(isFetchingData(false));
    });
  };
}

//start actions for fetching not deployed sm per region
export const getNotDeployedSm = payload => {
  return {
    type: GET_NOT_DEPLOYED_SM,
    payload
  };
};

export function fetchNotDeployedSm(url) {
  return dispatch => {
    dispatch(isFetchingData(true));
    axios.get(url).then(res => {
      dispatch(getNotDeployedSm(res.data));
      dispatch(isFetchingData(false));
    });
  };
}

//start actions for deleting one region by id
export const deleteRegion = payload => {
  return {
    type: DELETE_REGION,
    payload
  };
};
export function deleteRegionById(url, id) {
  return dispatch => {
    axios.delete(url, id).then(() => dispatch(deleteRegion(id)));
  };
}

//start action for filtering sm
export const searchSm = payload => {
  return {
    type: SEARCH_SM,
    payload
  };
};

//START ACTIONS FOR FETCHING REGION WEATHER :
export const getWeather = payload => {
  return {
    type: GET_REGION_WEATHER,
    payload
  };
};
export const fetchingWeather = payload => {
  return {
    type: IS_FETCHING_WEATHER,
    payload
  };
};

export function getRegionWeather(url) {
  return dispatch => {
    dispatch(clearErrors());
    dispatch(isFetchingData(true));
    axios
      .get(url)
      .then(res => {
        dispatch(getWeather(res.data));
        dispatch(isFetchingData(false));
      })
      .catch(err => {
        dispatch(getErors(0));
        dispatch(isFetchingData(false));
      });
  };
}

//actions for fetching swarm blocks :
export const getBlocks = payload => {
  return {
    type: GET_BLOCKS,
    payload
  };
};

export function getSwarmBlocks(url) {
  return dispatch => {
    dispatch(isFetchingData(true));
    axios.get(url).then(res => {
      dispatch(getBlocks(res.data));
      dispatch(isFetchingData(false));
    });
  };
}

//action for recognize non deployed SM
export const recon = payload => {
  return {
    type: RECON_REGION,
    payload
  };
};
export function reconRegion(url) {
  return dispatch => {
    dispatch(isFetchingData(true));
    axios
      .get(url)
      .then(res => {
        dispatch(recon(res.data));
        dispatch(isFetchingData(false));
        window.location.reload();
      })
      .catch(err => {
        dispatch(getErors(err.response.data));
        dispatch(isFetchingData(false));
      });
  };
}

/****************ACTION FOR DEPLOYING SM********** */

export const deploySM = payload => {
  return {
    type: DEPLOY_SM,
    payload
  };
};
export function deploySmartMeter(url, x) {
  return dispatch => {
    dispatch(clearErrors());
    isFetchingData(true);
    axios
      .post(url, x)
      .then(res => {
        console.log(res.data);
        dispatch(isFetchingData(false));
        dispatch(deploySM("hello"));
      })
      .catch(err => dispatch(getErors(err.response.data)));
  };
}

/*******************TRADE ACTIONS********************** */
export const getTrade = payload => {
  return {
    type: GET_TRADE_ACTIONS,
    payload
  };
};
export function getTradeRegion(url) {
  return dispatch => {
    dispatch(clearErrors());
    dispatch(isFetchingData(true));
    axios
      .get(url)
      .then(res => {
        dispatch(getTrade(res.data));
        dispatch(isFetchingData(false));
      })
      .catch(err => dispatch(getErors(err.response.data)));
  };
}

/*************HISTORY ACTIONS********** */
export const getHistory = payload => {
  return {
    type: GET_ELECTRICITY_HISTORY,
    payload
  };
};

export function getElectricityHistory(url) {
  return dispatch => {
    dispatch(clearErrors());
    dispatch(isFetchingData(true));
    axios
      .get(url)
      .then(res => {
        dispatch(getHistory(res.data));
        dispatch(isFetchingData(false));
      })
      .catch(err => {
        dispatch(getErors(err.response.data));
        dispatch(isFetchingData(false));
      });
  };
}

/**********************ACTION FOR GENERATING TOKEN  * ****************************** */
export const generateToken = payload => {
  return {
    type: GENERATE_TOKEN,
    payload
  };
};
export function generateTokeNTrade(url, x) {
  return dispatch => {
    axios.post(url, x).then(res => {
      dispatch(generateToken(res.data));
    });
  };
}
