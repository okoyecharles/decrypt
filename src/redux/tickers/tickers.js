import * as actionType from '../actionTypes';

const initialState = [];

const tickers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_TICKERS:
      return action.payload;
    default:
      return state;
  }
};

export default tickers;
