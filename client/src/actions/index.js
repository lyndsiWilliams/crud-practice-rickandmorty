// Axios
import axios from 'axios';
// Destructuring the command names to avoid typos in the reducer
// GET
export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";
// POST
export const POST_CHARACTERS_START = "POST_CHARACTERS_START";
export const POST_CHARACTERS_SUCCESS = "POST_CHARACTERS_SUCCESS";
export const POST_CHARACTERS_FAILURE = "POST_CHARACTERS_FAILURE";


export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS_START });
  axios.get("https://rickandmortyapi.com/api/character")
    .then(res => {
      // On success, data is loaded onto the payload linked to the characters array in reducer state
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results })
    })
    .catch(err => {
      console.log(err);
      // On failure, error is loaded onto the payload linked to the error string in reducer state
      dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err })
    });
};

export const addCharacter = newCharacter => dispatch => {
  dispatch({ type: POST_CHARACTERS_START });
  axios.post("https://reqres.in/api/users", newCharacter)
    .then(res => {
      console.log("POST REQUEST: ", res);
      dispatch({ type: POST_CHARACTERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_CHARACTERS_FAILURE, payload: err });
    });
};