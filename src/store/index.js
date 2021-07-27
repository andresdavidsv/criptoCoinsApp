import { createStore, combineReducers } from 'redux';

import CoinReducer from './reducers/coins';

const RootReducer = combineReducers({
  coins: CoinReducer,
})

export default createStore(RootReducer) 