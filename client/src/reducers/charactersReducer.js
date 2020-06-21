// Importing the destructured action command names to avoid typos
import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from '../actions';

// Setting up the initial state for the reducer
const initialState = {
  characters: [],
  error: "",
  isFetching: false
};

export function charactersReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        characters: action.payload
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  };
};