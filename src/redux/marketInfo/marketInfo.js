import * as actionType from '../actionTypes';

const initialState = {};

const marketInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_MARKET_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default marketInfo;
