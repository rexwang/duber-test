import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

function init() {
  run();
  store.subscribe(run);
}

init();
