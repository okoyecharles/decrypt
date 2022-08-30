import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tickers from './tickers/tickers';
import marketInfo from './marketInfo/marketInfo';

const rootReducer = combineReducers({ tickers, marketInfo });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
