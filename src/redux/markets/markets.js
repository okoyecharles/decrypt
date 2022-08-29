import * as actionType from '../actionTypes';

const initialState = [];

const markets = (state = initialState, action) => {
  switch (action.type) {
    case `${actionType.LOAD_MARKETS}/fulfilled`:
      return action.payload.markets;
    default:
      return state;
  }
};

export default markets;
