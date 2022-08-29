import axios from 'axios';
import * as actionType from './actionTypes';

export const loadMarkets = (markets) => ({ type: actionType.LOAD_MARKETS, markets });

const fetchMarkets = () => async (dispatch) => {
  const { data } = await axios.get('https://api.coinlore.net/api/tickers/');
  dispatch(loadMarkets(data.data));
};

export default fetchMarkets;
