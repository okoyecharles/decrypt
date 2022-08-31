import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tickers from './tickers/tickers';
import marketInfo from './marketInfo/marketInfo';
import details from './details/details';

const rootReducer = combineReducers({ tickers, marketInfo, details });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
