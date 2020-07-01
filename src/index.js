import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from '../src/components/App';

import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(<Provider store={createStoreWithMiddleware(rootReducer)}>
                  <Router>
                    <Switch>
                      <Route exact path='/' component={App} />
                    </Switch>
                  </Router>
                </Provider>
,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
