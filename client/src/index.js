// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Reducer
import { rootReducer } from './reducers';
// Styling
import './index.css';
// Component
import App from './App';
// Other
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
