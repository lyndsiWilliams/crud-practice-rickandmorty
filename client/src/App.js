// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import CharactersList from './components/CharactersList';
// Styling
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CharactersList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
