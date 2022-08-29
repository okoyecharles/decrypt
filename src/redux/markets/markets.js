import * as actionType from '../actionTypes';

const initialState = [];

const markets = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_MARKETS:
      return action.payload;
    default:
      return state;
  }
};

export default markets;
