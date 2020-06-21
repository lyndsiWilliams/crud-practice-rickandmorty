// React
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { getCharacters } from '../actions';


const CharactersList = props => {
  console.log("Props in CharactersList.js", props);


  return (
    <div>
      <button onClick={props.getCharacters}>Fetch RAM Characters</button>
      {props.characters && !props.isFetching && props.characters.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state.charactersReducer.characters,
  error: state.charactersReducer.error,
  isFetching: state.charactersReducer.isFetching
});


export default connect(
  mapStateToProps,
  { getCharacters }
)(CharactersList);