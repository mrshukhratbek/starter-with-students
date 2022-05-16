import { combineReducers } from 'redux';

import { users } from './users';
import { categories } from './categories';

export const rootReducer = combineReducers({
  users,
  categories,
});
