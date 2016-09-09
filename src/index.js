import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import Presentation from './components/Presentation';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const createStoreWithMiddleWare = applyMiddleware(
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleWare(reducers);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Presentation
      slide={store.getState()}
     />
  </Provider>,
  rootEl
)
