import { COINS } from '../../data/categories';

const INITIAL_STATE = {
  coins: COINS,
  selected: null,
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
  return { ...state };
}

export default CategoryReducer; 