import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Layout from './components/layout';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Dashboard from './components/dashboard';

import history from './history';
import requireAuth from './components/requireAuth';
import NewsletterNew from './components/newsletter/newsletterNew';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path='/' exact component={Signin}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            {/* <Route path='/dashboard' component={requireAuth(Dashboard)}/> */}
            {/* <Route path='/newsletter/new' component={requireAuth(NewsletterNew)} */}
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/newsletter/new' component={NewsletterNew}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
