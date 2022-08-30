import * as actionType from '../actionTypes';

const initialState = {};

const details = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default details;
