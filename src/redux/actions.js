import axios from 'axios';
import * as actionType from './actionTypes';

const loadTickers = (tickers) => ({
  type: actionType.LOAD_TICKERS,
  payload: tickers,
});

const loadMarketInfo = (data) => {
  const marketInfo = {
    coinsCount: data.coins_count,
    marketCount: data.active_markets,
    marketCap: data.total_mcap,
    marketVol: data.total_volume,
    marketPerChange: data.avg_change_percent,
  };
  return {
    type: actionType.LOAD_MARKET_INFO,
    payload: marketInfo,
  };
};

const loadDetails = (details) => ({
  type: actionType.LOAD_DETAILS,
  payload: details,
});

export const fetchTickers = () => async (dispatch) => {
  const { data } = await axios.get('https://api.coinlore.net/api/tickers/');
  dispatch(loadTickers(data.data));
};

export const fetchMarketInfo = () => async (dispatch) => {
  const { data } = await axios.get('https://api.coinlore.net/api/global/');
  dispatch(loadMarketInfo(data[0]));
};

export const fetchDetails = (id) => async (dispatch) => {
  const { data: tickerInfo } = await axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
  const { data: markets } = await axios.get(`https://api.coinlore.net/api/coin/markets/?id=${id}`);
  const { data: socials } = await axios.get(`https://api.coinlore.net/api/coin/social_stats/?id=${id}`);

  const details = {
    tickerInfo: tickerInfo[0],
    socials,
    markets,
  };
  dispatch(loadDetails(details));
};

export const setDetails = (id) => ({
  type: actionType.SET_DETAILS,
  payload: id,
});

export const removeNavBack = () => ({
  type: actionType.REMOVE_NAV_BACK,
});
