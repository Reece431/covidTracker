import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*Always need these 3 when using async api calls*/ 
import {Provider} from 'react-redux'; /*This gives its child components access to the store*/
import {applyMiddleware, compose, createStore} from 'redux';/*This lets us add middleware, and create our store for all state, not sure what compose does*/
import thunk from 'redux-thunk'; /*This is the middleware*/

import App from './App';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);