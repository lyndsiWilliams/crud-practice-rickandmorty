import { combineReducers } from 'redux';
// Reducers
import { charactersReducer } from './charactersReducer';


export const rootReducer = combineReducers({
  charactersReducer,
});