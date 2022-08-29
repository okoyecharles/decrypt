import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import markets from './markets/markets';

const rootReducer = combineReducers({ markets });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
