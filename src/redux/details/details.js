import * as actionType from '../actionTypes';

const initialState = { ticker_id: '90', nav_active: false };

const details = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_DETAILS:
      return { ...state, ...action.payload };
    case actionType.SET_DETAILS:
      return { ticker_id: action.payload, nav_active: true };
    case actionType.REMOVE_NAV_BACK:
      return { ...state, nav_active: false };
    default:
      return state;
  }
};

export default details;
