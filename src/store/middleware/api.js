import axios from "axios";
import * as actions from "../actions/api";
import config from "../../config.json";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, params, onStart, onSuccess, onError } =
      action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: config.apiUrl,
        url,
        method,
        data,
        params,
      });
      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      console.log(error);
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError)
        dispatch({ type: onError, payload: error.response.data.message });
    }
  };

export default api;
