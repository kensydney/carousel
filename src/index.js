import React from 'react';
import ReactDOM, {render} from 'react-dom';
import configureStore from './configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCarousels} from './actions/carouselActions';

const store = configureStore();
store.dispatch(loadCarousels());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
